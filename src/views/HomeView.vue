<template>


  <router-link to="/amusic">
    <Mark/>
    <el-button>Amusic</el-button>
  </router-link>
</template>

<script>
import Mark from "../components/Mark.vue";

export default {
  name: "HomeView",
  components: {Mark}
}
</script>

<style scoped>

</style>