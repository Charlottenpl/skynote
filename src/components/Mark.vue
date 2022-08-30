<template>

    <!--    编写-->
    <div>
      <v-md-editor v-model="mdVal" height="400px"></v-md-editor>
    </div>
</template>

<script>
//TODO https://code-farmer-i.github.io/vue-markdown-editor/zh/examples/base-editor.html
//TODO https://blog.csdn.net/weixin_45291937/article/details/125275996?spm=1001.2101.3001.6650.7&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-7-125275996-blog-126064438.t5_layer_eslanding_D_0&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-7-125275996-blog-126064438.t5_layer_eslanding_D_0&utm_relevant_index=8


export default {
  name: "Mark",
  components: {

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