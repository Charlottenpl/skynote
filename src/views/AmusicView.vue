<template>
  <div class="common-layout">
    <!--      头部布局-->

    <!--        <Milk/>-->
    <Amusic id="milk"/>

  </div>
</template>

<script>
import Milk from '../components/Milk.vue'
import Amusic from "../components/Amusic.vue";
import logo from "../assets/logo.svg"

export default {
  components: {
    Milk, Amusic
  },
  data() {
    return {
      logo: logo,
      doc: ''
    }
  },
}
</script>


<style>
.common-layout {
  width: 100%;
  height: 100%;
}

#milk {
  min-height: 130%;
  width: 100%;
  height: 100%;
}

</style>
