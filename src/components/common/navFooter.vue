<template>
	<div class="footer-box">
		<div class="footer-bar clearfix">
			<ul class="item">
				<li>产品</li>
				<li>数字货币钱包</li>
				<li>数字货币硬件钱包</li>
				<li>数字货币交易所</li>
				<li>公链联盟链</li>
				<li>钱包安全系统</li>
				<li>股票交易所</li>
				<li>去中心化钱包</li>
				<li>去中心化交易所</li>
				<li>密钥协商平台</li>
				<li>密码保险柜</li>
			</ul>
			<ul class="item">
				<li>解决方案</li>
				<li>交易所解决方案</li>
				<li>数字货币云端钱包解决方案</li>
				<li>公链技术解决方案</li>
				<li>联盟链解决方案</li>
				<li>跨链技术解决方案</li>
				<li>数字钱包解决方案</li>
				<li>硬件钱包解决方案</li>
				<li>交易所风控解决方案</li>
				<li>去中心化钱包解决方案</li>
				<li>去中心化交易所解决方案</li>
				<li>密钥抗丢失解决方案</li>
				<li>股票交易所解决方案</li>
			</ul>

			<ul class="item">
				<li>研究院</li>
				<li>区块链知识产权保护</li>
				<li>一种云端可干扰的密钥解决方案</li>
				<li>交易所底层技术</li>
				<li>5G 流化研究</li>
				<li>5G 和区块链的融合</li>
				<li>数字货币银行</li>
				<li>数字货币支付</li>
			</ul>
			<ul class="item">
				<li>合作伙伴</li>
				<li>知鱼财经</li>
				<li>知鱼网络科技</li>
				<li>邦国科技</li>
				<li>问我学院</li>
				<li>巡宇投贷</li>
				<li>华严科技</li>
				<li>家艺家政保洁</li>
				<li>阿里云</li>
			</ul>
			<ul class="item mjz">
				<li>关注木姜子</li>
				<li>
					<span><a href="https://mp.weixin.qq.com/s?__biz=MzU5MTgwODU3OQ==&mid=2247483715&idx=1&sn=e4822cb8300dfef50df2b60eb6feef41&chksm=fe28106fc95f9979421565707bc20fc9ddd97eb9b0a85a4471c987c3c22765729d420417827c&token=1303392152&lang=zh_CN#rd">
						<img width="30px" height="30px" src="../../assets/img/common/gzh.png"/>
					</a></span>
					<span><a href="https://www.github.com/gingernet">
						<img width="30px" height="30px" src="../../assets/img/common/github.png"/>
					</a></span>
					<span><a href="#">
						<img width="30px" height="30px" src="../../assets/img/common/facebook.png"/>
					</a></span>
					<span><a href="#">
						<img width="30px" height="30px" src="../../assets/img/common/twitter.png"/>
					</a></span>
				</li>
			</ul>
		</div>
  		<div class='call-we'>
			<h1>联系我们</h1>
			<ul class="call-type"> 
				<li>
				<span class="wow jello">
				</span>
				<span class="wow wobble">
				</span>
				</li>
				<li>
					<p>+86 18210042149</p>
					<p>周一至周日 8:00 ~ 20:00</p>
					<P>20123762@s.hlju.edu.cn</P>
				</li>
			</ul>
		</div>
		<div class='footer-siteMsg'>
			<p>GingerNet_区块链技术开发_钱包系统_<a href="http://www.gingernet.vip" style="color: #939CA5;" >数字货币交易系统开发</a>-木姜子科技<br/>
				天津木姜子科技有限公司，18210042149，天津市河西区四信大厦 3 层 C306 D402<br/>
				© 2018-2020 www.gingernet.vip All rights reserved</p>
			<p>津ICP备20001736号-2</p>
		</div>
	</div>	
</template>

<script>
export default {
  name: 'navFooter',
  components:{},
  props: {},
  watch: {

  },
  data(){
      return {
        nav:[
			{to:'home',txt:'首页'},
			{to:'product',txt:'产品'},
			{to:'solution',txt:'解决方案'},
			{to:'partner',txt:'合作伙伴'},
			{to:'about',txt:'关于我们'},
        ]
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

<style scoped lang="less">

@import './../../assets/less/index.less';
	.footer-box{background-color: #102B3B;}
  	.footer-bar {
	  	padding: 10px 5%;
		margin: 0 auto;
		padding-left: 10%;
		.flex-box();
		.item{
			width: 20%;
			color:#fff;
			li{
				text-align: left;
				line-height: 20px;
				font-size: 12px;
				&:first-child{text-indent: 5px;font-size: 14px;padding: 10px 0;}
				.link {color: #fff;cursor: pointer;}
			}
		}
		.mjz {
			li:nth-child(n+2) span{
				display: inline-block;
				width: 30px;
				height: 30px;
				border-radius: 4px;
				background: ivory;
				margin-right: 10px;
				color:#000;
			}
		}
  	}
	.call-we{
		color:#fff;
		h1{width: 100px;margin: 0 auto;font-size:18px;border:1px solid #fff; border-radius: 5px;}
		p {font-size: 14px;}
	}
	.call-type{
		.flex-box();
			padding: 0 15%;
		li{
			flex: 1;
			span{
					display: inline-block;
					width: 100px;
					height: 100px;
					border-radius: 4px;
					background: ivory;
					margin-right: 10px;
					color:#000;
					background-size: cover;
					background-repeat: no-repeat;
					&:first-child{background-image: url('../../assets/img/common/mjzkj.png')}
					&:nth-child(2){background-image: url('../../assets/img/common/mjzkj1.png')}
				}
				P{line-height: 20px;}
			
		}
	}
	.footer-siteMsg {
		border-top:1px solid #1d3647;
		padding: 15px 0;
		p{color:#fff;padding: 0px 0;font-size: 12px;}
	}
</style>
