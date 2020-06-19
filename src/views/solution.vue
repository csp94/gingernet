<template>
  <div class="solution gap-nav">
      <div class="solutionHead"></div>
      <!--exchange-->
      <h3 class="solutionTitle">交易所解决方案</h3>
      <div class="fanganDetail">
          <h3>方案详情</h3>
      </div>
      <div class="fanganContentDetail">
          <p>
              功能成熟、应用广泛的数字资产现货交易系统，强大的内存撮合引擎保证高并发量交易支持，包含完善的前后台系统，提供配套中心化钱包，系统安全稳定，
              可保障平台和用户双方的隐私安全、系统安全和资产安全，支持策略委托；功能成熟的金融期货交易系统，支持双向开仓和逐仓管理。有完备的风险防范制度，
              并可按指数价格交割，最大限度保护用户的权益和资产安全。现货杠杆交易系统，竞价交易机制，与现货交易共享盘口深度，为用户提供中短期借贷资金周转支持，
              完善的风险防范机制，保证平台零亏损。
          </p>
      </div>
      <div class="solutionImg">
          <div class="fanganJiagou">
              <h3>方案架构</h3>
          </div>
        <img src="../assets/img/common/jysjjfa.png"/>
      </div>

      <!--exchange-->

      <!--wallet-->
      <h3 class="solutionTitle">云端钱包解决方案</h3>
      <div class="fanganDetail">
          <h3>方案详情</h3>
      </div>
      <div class="fanganContentDetail">
          <p>
              批量生成地址，给每个用户分配相应的地址，离线签名，接入上百种主链币，完善的财务统计和报警机制，接入主流交易所的行情数据。
          </p>
      </div>

      <div class="solutionImg">
          <div class="fanganJiagou">
              <h3>方案架构</h3>
          </div>
          <img src="../assets/img/common/cloadWallet.png"/>
      </div>
      <!--wallet-->


      <!--HdWallet-->
      <h3 class="solutionTitle">HD 钱包解决方案</h3>
      <div class="fanganDetail">
          <h3>方案详情</h3>
      </div>
      <div class="fanganContentDetail">
          <p>
              HD 钱包物理结构上主要由钱包节点和钱包客户端组成，钱包节点在整个去中心化的钱包中的主要作用是广播交易，下发转账到账通知和获取交易流水数据。钱包客户端是整个去中心化钱包的核心部分，分别有助记词组件，钱包地址私钥组件，密钥抗丢失组件，离线签名组件，手续费优化交易加速组件（有时可以是单独的服务），到账通知组件和 RSA 加密组件等模块组成。去中心化的钱包的私钥存储在客户端的，私钥是RSA加密存储的。为避免私钥存储在客户端丢失无法找回这样尴尬的局面的发生，木姜子科技花大量的成本研发了密钥抗丢失组件。
          </p>
      </div>

      <div class="solutionImg">
          <div class="fanganJiagou">
              <h3>方案架构</h3>
          </div>
          <img src="../assets/img/common/hdWallet.png"/>
      </div>
      <!--HdWallet-->

      <!--YjWallet-->
      <h3 class="solutionTitle">硬件钱包解决方案</h3>
      <div class="fanganDetail">
          <h3>方案详情</h3>
      </div>
      <div class="fanganContentDetail">
          <p>
              我们把助记词的生成，私钥地地址的生成和交易的离线签名放到硬件钱包里面执行，硬件钱包由五块板子组成，分别是加密，存储，签名，蓝牙和串口，加密芯片主要用于对私钥和助记词编码串的加密；存储主要是存储钱包的助记词编码串，钱包的主私钥，子私钥和地址；咱们 Ginger 硬件钱包支持多钱包，多账户；蓝牙芯片主要是对外提供蓝牙通信接口，通过蓝牙通信接口，任何一款钱包或者交易所都可以和咱们 Ginger 做交互；当然，串口和蓝牙是一样的，也是 Ginger 对外提供的蓝牙的通信口，图中的钱包工具就是通过蓝牙或者串口的方式给硬件层发指令的，硬件会根据不同的指令去执行相应的操作</p>
      </div>

      <div class="solutionImg">
          <div class="fanganJiagou">
              <h3>方案架构</h3>
          </div>
          <img src="../assets/img/common/yjWallet.png"/>
      </div>
      <!--YjWallet-->


      <!--key-->
      <h3 class="solutionTitle">云端可干扰的密钥抗丢失解决方案</h3>
      <div class="fanganDetail">
          <h3>方案详情</h3>
      </div>
      <div class="fanganContentDetail">
          <p>
              私钥是分开存储的，一部分放在云端，一部分放到n个朋友手中。这n个朋友只要有t个(t可以远远小于n)没丢失都是可以最 终恢复出密钥的。因此这个方案在很大程度上是抗丢失的密钥存储方案，又因为 恢复密钥必须要跟云端交互，要取得云端的合作，因此云端对客户有一定的制约 权力。
          </p>
      </div>

      <div class="solutionImg">
          <div class="fanganJiagou">
              <h3>方案架构</h3>
          </div>
          <img src="../assets/img/common/keySecret.png"/>
      </div>
      <!--key-->

      <!--chain-->
      <h3 class="solutionTitle">主链联盟链跨链解决方案</h3>
      <div class="fanganDetail">
          <h3>方案详情</h3>
      </div>
      <div class="fanganContentDetail">
          <p>
              跨链技术实现了链与链之间的联通，资产的 Token 化与业务完美结合。
          </p>
      </div>

      <div class="solutionImg">
          <div class="fanganJiagou">
              <h3>方案架构</h3>
          </div>
          <img src="../assets/img/common/mainchain.png"/>
      </div>
      <!--chain-->



      <nav-footer></nav-footer>
  </div>
</template>

<script>

export default {
  name: 'solution',
  components:{
    NavFooter: require('@/components/common/navFooter.vue').default
  },

  props: {},

  data(){
    return {}
  },
  created() {
      
  },
  mounted() {
      
  },
  methods: {
      
  }

}
</script>

<style scoped lang="less">
@import './../assets/less/index.less';
h1{
    color:@font-color-normal;
}

.solutionHead{
    height: 430px;
    width: 100%;
    display: flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    background-repeat: no-repeat;
    background-size: 100%,300px;
    background-image: url("../assets/img/common/jiejuefangan.png");
    background-color:#000000;
    color:white;
}

.fort
{
    font-size:50px;
    height: 80px;
    color:#EC2194;
    line-height: 80px;
    font-weight: bold;
}
.solutionTitle {
    margin-top: 30px;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 30px;
}
.solutionImg{
    background-color:white;
    width: 100%;
    height: 860px;
}
.fanganDetail{
    font-size: 1.5rem;
}
.fanganContentDetail{
    text-align:center;
    font-size:14px;
    color: #777;
    margin-left: 80px;
    margin-right: 80px;
    height: 100px;
}
.fanganContentDetail p{
    margin-top: 20px;
}
.fanganJiagou{
    color: #000000;
    font-size: 1.5rem;
}
</style>
