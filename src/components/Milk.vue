<link rel="stylesheet" href="../theme/prism-ghcolors.css">
<template>
  <!--  todo-list的图标需要用到-->
  <link
      href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
      rel="stylesheet">

  <VueEditor :editor="editor"/>
  <!--  {{playWithEditor}} {{output}}  {{doc}}-->
</template>

<!--  代码高亮-->
<style>
@import "../theme/prism-ghcolors.css";
</style>

<script>
import {defineComponent} from "vue";
import {
  Editor,
  rootCtx,
  defaultValueCtx,
  editorViewOptionsCtx,
  editorViewCtx,
  serializerCtx,
  hex2rgb
} from "@milkdown/core";
import {VueEditor, useEditor} from "@milkdown/vue";
import {commonmark} from "@milkdown/preset-commonmark";
//表情支持
import {emoji} from "@milkdown/plugin-emoji";
import {listener, listenerCtx} from '@milkdown/plugin-listener';
// GITHUB语法
import {gfm} from '@milkdown/preset-gfm'
//撤销/恢复
import {history} from '@milkdown/plugin-history';
// TODO 代码高亮,缺高亮主题
import {prism} from '@milkdown/plugin-prism';
//选中文字之后弹出菜单框
import {tooltipPlugin, tooltip} from '@milkdown/plugin-tooltip';
// 对/命令的支持
import {slash} from '@milkdown/plugin-slash';
//菜单支持
import {menu} from '@milkdown/plugin-menu';
//用于模拟块编辑器的行为。在块前面加一个菜单按钮
import {block} from '@milkdown/plugin-block';
//缩进支持
import {indent} from '@milkdown/plugin-indent';
//自动在文档末尾添加尾随节点。
import {trailing} from '@milkdown/plugin-trailing';
//协作支持
// import {collaborative, collabServiceCtx} from '@milkdown/plugin-collaborative';
//拖放时上传并创建图像（或您喜欢的任何文件类型）。需要配置 https://milkdown.dev/plugin-upload
import {upload} from '@milkdown/plugin-upload';
//添加拖放光标和间隙光标支持。
import {cursor} from '@milkdown/plugin-cursor';
//通过mermaid添加对图表的支持
import {diagram} from '@milkdown/plugin-diagram';
//支持markdown格式的复制粘贴
import {clipboard} from '@milkdown/plugin-clipboard';
//导入store
import {useCounterStore} from "../stores/counter.js";

//theme
import {tokyo} from '@milkdown/theme-tokyo';
import {nord} from "@milkdown/theme-nord";
import {themeFactory, ThemeColor, ThemeSize, ThemeIcon, ThemeFont, ThemeGlobal, getPalette} from '@milkdown/core';
import {lightColor} from "../theme/light";

export default defineComponent({
  name: "Milk",
  components: {
    VueEditor,
  },

  data() {
    return {
      output: '',
      doc: ''
    }
  },
  mounted() {
    async function playWithEditor() {
      const getMarkdown = () =>
          editor.action((ctx) => {
            const editorView = ctx.get(editorViewCtx);
            const serializer = ctx.get(serializerCtx);
            return serializer(editorView.state.doc);
          });

      // get markdown string:
      getMarkdown();
    }
  },
  setup: () => {

    let output = '';
    let doc = '';
    const store = useCounterStore();
    const enable = false;

    const extendedNord = nord.override((emotion, manager) => {
      const colorSet = lightColor;
      manager.set(ThemeColor, (options) => {
        if (!options) return;
        const [key, opacity] = options;
        const hex = colorSet[key];
        const rgb = hex2rgb(hex);
        if (!rgb) return;

        return `rgba(${rgb?.join(', ')}, ${opacity || 1})`;
      });
    });
    const editor = useEditor((root) =>
        Editor.make()
            .config((ctx) => {
              ctx.set(rootCtx, root);
              ctx.set(defaultValueCtx, store.def);
              ctx.set(editorViewOptionsCtx, {enable});
              ctx.get(listenerCtx).markdownUpdated((ctx, markdown, prevMarkdown) => {
                store.doc = markdown;
                store.output = prevMarkdown
                console.log(store.output);
              });
            })
            .use(listener)
            // .use(tokyo)
            .use(nord)
            .use(extendedNord)
            // .use(myTheme)
            .use(emoji)
            .use(gfm)
            .use(history)
            .use(prism)
            .use(
                tooltip.configure(tooltipPlugin, {
                  bottom: editor,
                }),
            )
            .use(slash)
            // .use(menu)
            // .use(block)
            .use(indent)
            .use(trailing)
            .use(upload)
            .use(cursor)
            .use(diagram)
            .use(clipboard)
    );
    return {
      editor, store,
    };
  },
});
</script>
<style>
/* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "仓耳渔阳体 W02";font-weight: 400;src: url("//at.alicdn.com/wf/webfont/XluNjncSyg65/MgAktzwkQ1OlUYtULJ88J.woff2") format("woff2"),
url("//at.alicdn.com/wf/webfont/XluNjncSyg65/RNMfHIcDcmjOX3aT09cuM.woff") format("woff");
  font-display: swap;
}
</style>