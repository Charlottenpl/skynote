<template>
  <el-card style="align-content: center;width: 100%">
    <div style="align-self: center">
      <div style="width:100%;height:10%;">
        <div align="center">
          <img style="height: 20%" :src="logo"/>

          <h2 style="height: 20%;width: 300px;display: inline-block">
            Amusic 是一个非常非常好用的音乐播放器，支持无损音质，沉浸式体验。
          </h2>
          <br/><br/>

          <el-button type="primary" plain>
            <el-icon style="margin-right: 3px">
              <Promotion/>
            </el-icon>
            Get Start!
          </el-button>
          <el-button style="margin-left: 10px" type="success" plain>
            <el-icon style="margin-right: 3px">
              <Download/>
            </el-icon>
            Download
          </el-button>

          <br/><br/> <br/><br/>
        </div>
      </div>
    </div>
  </el-card>

  <Milk/>
</template>

<script>
import Milk from '../components/Milk.vue'
import logo from '../assets/logo.svg'

export default {
  name: "Amusic",
  components: {Milk},
  data() {
    return {
      logo: logo
    }
  },
}
</script>

<style scoped>
.icon {
  width: 20%;
}
</style>