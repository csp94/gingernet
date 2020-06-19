<template>
  <div id="app" class="clearfix">
   <nav-header></nav-header>
    <router-view/>
  </div>
</template>

<script>
// import NavHeader from '@/components/common/navHeader.vue'
export default {
  name: 'App',
  components:{
      NavHeader: require('@/components/common/navHeader.vue').default,
      // NavFooter: require('@/components/common/navFooter.vue').default
  },

  props: {},

  data(){
    return {
      
    }
  },
  created() {
      
  },
  mounted() {
      
  },
  methods: {
      
  },

}
</script>


<style lang="less">
@import './assets/less/index.less';
html,body {font-size:62.5%!important;min-width: 680px; /* 10 ÷ 16 × 100% = 62.5% 相当于是10px*/}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // height: 4.8rem;
  height: 100%;
}

</style>
