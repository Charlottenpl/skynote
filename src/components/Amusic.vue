<template>
  <el-card style="align-content: center;width: 100%">
    <div style="align-self: center">
      <div style="width:100%;height:10%;">
        <div align="center">
          <img  src="https://小熊.fun/api/file/favicon.ico"/>
          <br/>

          <el-button type="primary" plain>Get Start!</el-button>
          <el-button style="margin-left: 10px" type="success" plain>Download</el-button>
        </div>
      </div>


    </div>

  </el-card>

<Milk/>
</template>

<script>
import Milk from '../components/Milk.vue'
export default {
  name: "Amusic",
  components: {Milk}
}
</script>

<style scoped>

</style>