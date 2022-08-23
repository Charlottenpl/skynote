<template>
  <div class="common-layout">
    <el-container class="common-layout">
      <!--      头部布局-->
      <el-header id="header">

        <div style="margin: 25px 30px">
          <el-image style="height: 30px;vertical-align: middle" src="https://小熊.fun/api/file/favicon.ico;"/>
          <span class="title">Amusic</span>

          <div style="float: right">
            <span>1</span>
            <span>2</span>
          </div>
        </div>
      </el-header>
      <div style="height: 1px;background: #e7e7e7"/>
      <!--      主要内容-->
      <el-main id="main">
        <!--        <Milk/>-->
        <Amusic id="milk"/>
      </el-main>
      <!--      底部布局-->
      <el-footer id="footer">
        <img src="https://小熊.fun/api/file/60076975-3e70-4330-94c0-0db4a3492849_img.png" style="vertical-align: middle"/>
        <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" style="display: inline-block;vertical-align: middle;color: #f2f2f2">
            备案号：【 冀ICP备2021027170号-2】
        </a>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Milk from '../components/Milk.vue'
import Amusic from "../components/Amusic.vue";

export default {
  components: {
    Milk, Amusic
  }
}
</script>


<style>
.common-layout {
  width: 100%;
  height: 100%;
}

#header {
  align-content: center;
  height: 80px;
  padding: 0;
  color: #0e2c49;
  background: #ffffff;
}

.title {
  display: inline-block;
  vertical-align: middle;
  color: #2c3e50;
  font-size: x-large;
  font-weight: bold;
  line-height: 30px;
  margin: 0px;
  margin-left: 5px
}

#main {
  padding: 0px;
  background: #ffffff;
}

#milk {
  min-height: 130%;
  width: 100%;
  height: 100%;
}

#footer {
  height: 100px;
  background: #44505b;
  color: #f2f2f2;
  align-content: center;
  width: 100%;
  padding: 1%;
  text-align: center;
}
</style>
