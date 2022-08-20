<template>
  <div class="common-layout">
    <el-container class="common-layout">
<!--      头部布局-->
      <el-header id="header">
        Amusic~
      </el-header>
<!--      主要内容-->
      <el-main id="main">
        <Milk id="milk"/>
        <Amusic/>
      </el-main>
<!--      底部布局-->
      <el-footer id="footer">
        冀-2134234325425435432-1
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Milk from '../components/Milk.vue'
import Amusic from "../components/Amusic.vue";
export default {
  components:{
    Milk,Amusic
  }
}
</script>


<style>
.common-layout{
  width: 100%;
  height: 100%;
}

#header{
  background: #00bd7e;
}

#main{
  background: aliceblue;
}

#milk{
  width: 100%;
  height: 100%;
}

#footer{
  background: #2c3e50;
}
</style>
