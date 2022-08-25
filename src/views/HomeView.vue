<template>
  <div class="common-layout">
    <!--      头部布局-->
    <el-header id="header">

      <div style="padding: 15px 30px">
        <el-image style="height: 30px;vertical-align: middle" src="https://小熊.fun/api/file/favicon.ico;"/>
        <span class="title">Amusic</span>

        <div style="float: right;height: 30px;align-content: center;padding-top: 7px;">
          <span style="margin-right: 10px"><el-icon><Comment /></el-icon></span>
          <span style="margin-right: 10px"><el-icon><UserFilled /></el-icon></span>
          <span style="margin-right: 10px"><el-icon><Menu /></el-icon></span>
        </div>
      </div>
    </el-header>
    <div style="height: 1px;background: #e7e7e7"/>
    <el-container class="common-layout1">


      <!--      主要内容-->
      <el-main id="main">
        <!--        <Milk/>-->
        <Amusic id="milk"/>
        <!--      底部布局-->
        <el-footer id="footer">
          <img src="https://小熊.fun/api/file/60076975-3e70-4330-94c0-0db4a3492849_img.png" style="vertical-align: middle"/>
          <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" style="display: inline-block;vertical-align: middle;color: #f2f2f2">
            备案号：【 冀ICP备2021027170号-2】
          </a>
        </el-footer>
      </el-main>

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

.common-layout1 {
  width: 100%;
  height: calc(100vh - 61px);
}

#header {
  align-content: center;
  height: 60px;
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
  height: 100%;
  padding: 0px;
  background: #ffffff;
}

#milk {
  min-height: 130%;
  width: 100%;
  height: 100%;
}

#footer {
  height: 120px;
  background: #44505b;
  color: #f2f2f2;
  align-content: center;
  width: 100%;
  padding: 1%;
  text-align: center;
}
</style>
