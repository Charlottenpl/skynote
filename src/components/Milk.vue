<template>
  <!--  todo-list的图标需要用到-->
  <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet">
  <VueEditor :editor="editor"/>
</template>

<script>
import {defineComponent} from "vue";
import {Editor, rootCtx, defaultValueCtx} from "@milkdown/core";
import {nord} from "@milkdown/theme-nord";
import {VueEditor, useEditor} from "@milkdown/vue";
import {commonmark} from "@milkdown/preset-commonmark";
import {emoji} from "@milkdown/plugin-emoji";
import {listener, listenerCtx} from '@milkdown/plugin-listener';
import {gfm} from '@milkdown/preset-gfm'

export default defineComponent({
  name: "Milk",
  components: {
    VueEditor,
  },
  setup: () => {

    const def =  '## Amusic\n' +
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
    );
    return {
      editor,
    };
  },
});
</script>
<style>
</style>