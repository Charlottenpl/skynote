<template>
  <div class="common-layout">
    <el-container class="common-layout">
      <!--      头部布局-->
      <el-header id="header">
        <el-card body-style="margin: 0;width: 100%;height: 100%;align-content: baseline" shadow="always">
          <el-image style="height: 30px;vertical-align: middle" src="https://小熊.fun/api/file/favicon.ico;"/>
          <span class="title">Amusic</span>
        </el-card>
      </el-header>
      <!--      主要内容-->
      <el-main id="main">
        <!--        <Milk/>-->
        <Amusic id="milk"/>
      </el-main>
      <!--      底部布局-->
      <el-footer id="footer">
        <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">
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
  background: aliceblue;
  padding-bottom: 50px;
}

#milk {
  width: 100%;
  height: 100%;
}

#footer {
  height: 100px;
  background: #44505b;
  color: #f2f2f2;
}
</style>
