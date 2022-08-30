<template>
  <div>
    <!--    渲染-->
    <div class="markdown-body">
<!--      <markdown/>-->
<!--      {{mdVal}}-->
    </div>

    <!--    编写-->
    <div>
      <VueMarkdown :source="mdVal"></VueMarkdown>
    </div>
  </div>
</template>

<script>
// 引入 markdown 文件，引入后是一个组件，需要在 components 中注册
// import markdown from '@/assets/Hello.md'
// 代码高亮
import 'highlight.js/styles/github.css'
// 其他元素使用 github 的样式
import 'github-markdown-css'
// 组件
import VueMarkdown from 'vue-markdown'

export default {
  name: "Mark",
  components: {
    VueMarkdown, //注册组件
    // markdown,
  },
  data() {
    return {
      mdVal: '## Hello gr',  //mdVal的值是要解析的markdown数据

    }
  }
}
</script>

<style scoped>

</style>