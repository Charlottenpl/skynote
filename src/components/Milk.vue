<template>
  <!--  todo-list的图标需要用到-->
  <link
      href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
      rel="stylesheet">

  <!--  代码高亮-->
  <link href="../theme/prism-ghcolors.css" rel="stylesheet"/>
  <link href="../theme/prism-ghcolors.css" rel="stylesheet"/>
  <VueEditor :editor="editor"/>
</template>

<script>
import {defineComponent} from "vue";
import {Editor, rootCtx, defaultValueCtx} from "@milkdown/core";
import {nord} from "@milkdown/theme-nord";
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


export default defineComponent({
  name: "Milk",
  components: {
    VueEditor,
  },
  setup: () => {

    const def = '## Amusic\n' +
        '\n' +
        '> Amusic 是一个非常非常好用的音乐播放器，以下是我拿来凑字数的。\n' +
        '\n' +
        '**更新日志：**\n' +
        '\n' +
        '220820\n' +
        '\n' +
        '[ ] 添加了音乐播放列表等功能。\n' +
        '\n' +
        '修复了一些bug\n' +
        '\n' +
        '优化了UI体验\n' +
        '\n' +
        '添加了更多功能～'
    const editor = useEditor((root) =>
        Editor.make()
            .config((ctx) => {
              ctx.set(rootCtx, root);
              ctx.set(defaultValueCtx, def);

            })
            .use(nord)
            .use(emoji)
            .use(gfm)
            .use(history)
            .use(prism)
            .use(
                tooltip.configure(tooltipPlugin, {
                  bottom: true,
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
      editor,
    };
  },
});
</script>
<style>
.milknote{
  background: #f2f2f2;
}
</style>