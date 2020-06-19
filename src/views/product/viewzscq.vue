<template>
<div class="gap-nav">
    <div class="pdf">
        <div class="pdf-tab">
            <div class="btn-def btn-pre" @click.stop="prePage">上一页</div>
            <div class="btn-def btn-spance"></div>
            <div class="btn-def btn-next" @click.stop="nextPage">下一页</div>
        </div>
        <div>页码：{{pageNum}}/{{pageTotalNum}}</div>
        <!-- <div>进度：{{loadedRatio}}</div> -->
        <pdf 
            ref="pdf"
            :src="pdfUrl"
            :page="pageNum"
            :rotate="pageRotate"
            @password="password"
            @progress="loadedRatio = $event"
            @page-loaded="pageLoaded($event)"
            @num-pages="pageTotalNum=$event" 
            @error="pdfError($event)"
            @link-clicked="page = $event">
        </pdf>
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
          pdfUrl:"http://www.gingernet.vip/pdf/ginchain.pdf",
          pageNum:1,
          pageTotalNum:1,
          pageRotate:0,
          // 加载进度
          loadedRatio:0,
          curPageNum:0,
      }
  },
  mounted: function() {
  },
  methods: {
    prePage(){
      var p = this.pageNum
      p = p>1?p-1:this.pageTotalNum
      this.pageNum = p
    },
    nextPage(){
      var p = this.pageNum
      p = p<this.pageTotalNum?p+1:1
      this.pageNum = p
    },
    clock(){
      this.pageRotate += 90 
    },
    counterClock(){
      this.pageRotate -= 90 
    },
    password(updatePassword, reason) {
      updatePassword(prompt('password is "123456"'))
      console.log('...reason...')
      console.log(reason)
      console.log('...reason...')
    },
    pageLoaded(e){
      this.curPageNum = e
    },
    pdfError(error){
      console.error(error)
    },
    pdfPrintAll(){
      this.$refs.pdf.print()
    },
    pdfPrint(){
      this.$refs.pdf.print(100,[1,2])
    },
  }
}
</script>
<style lang="less">
.pdf {
    font-size: 14px;
    opacity: 1;
    z-index: 99;
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
