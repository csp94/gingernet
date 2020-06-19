<template>
<div class="gap-nav">
    <div class="pdf">
        <iframe src="http://www.gingernet.vip/pdf/price.pdf" style="min-height: 700px;min-width: 70%" frameborder="0"></iframe>
    </div>
    	<!-- 底部 -->
	<nav-footer></nav-footer>
</div> 
</template>
<script>
import pdf from 'vue-pdf'
export default {
  name: 'Pdf',
  components:{
      pdf,
      NavFooter: require('@/components/common/navFooter.vue').default
  },
  data(){
      return {
          pdfUrl:"../../assets/pdf/price.pdf",
          pageNum:1,
          pageTotalNum:1,
          pageRotate:0,
          // 加载进度
          loadedRatio:0,
          curPageNum:0,
      }
  },
  created() {
    //   this.pdfUrl = pdf.createLoadingTask(this.pdfUrl)
  },
  mounted: function() {
      
  },
  methods: {
    
  }
}
</script>
<style lang="less">
.pdf {
    width: 100%;
    font-size: 14px;
    opacity: 1;
    z-index: 99;
    background-color: rgb(82, 86, 89)
}
.pdf span {
    width: 900px;
}
.pdf-tab .btn-def {
    display: inline-block;
    font-size: 14px;
    width: 60px;
    line-height: 30px;
    color:#fff;
    background-color: yellowgreen;
    margin-top: 20px;
    // margin-right: 10px;
    border-radius: 5px;

}
.pdf-tab .btn-spance {
  width: 20px;
}
</style>
