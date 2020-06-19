<template>
	<div class="gap-nav">
		<div class='tab-first'>
			<div class="title-txt">
				<h1>数字货币钱包</h1>
				<p style="margin-top:50px">HD钱包，云端钱包，交易所钱包，去中心化钱包密钥抗丢失，开放API平台，支持上百种主链币</p>
			</div>
		</div>
		<div class='nav-link'>
			<a href="#cpgneng">产品功能</a>
			<a href="#cp-good">产品优势</a>
			<a href="#helpword">帮助文档</a>
			<a href="#user-data">应用场景</a>
		</div>
		<div id='cpgneng' class="box">
			<h1>产品功能</h1>
			<div class="cpgn-jieshao box-ctx">
				<div class="cpgn-item">
					<div>
						<h3>助记词</h3>
						<p>提供自定义化的助记词接口，支持12，15，18，21，24个助记词生成方式，支持简体中文，繁体中文，英文，韩文，日文，意大利文，西班牙和法文等国家语言助记词</p>
					</div>
				</div>
				<div class="cpgn-item">
					<div>
						<h3>离线签名</h3>
						<p>不管是去中心化钱包还是中心化钱包，我都是使用离线签名机制，保证用户的私钥不在网络中传输，去中化钱包使用云端可干扰的密钥抗丢失组件</p>
					</div>
				</div>
				<div class="cpgn-item">
					<div>
						<h3>币种支持</h3>
						<p>不管是HD钱包，云端钱包，交易所钱包，我们都支持上百种主链币</p>
					</div>
				</div>
				<div class="cpgn-item">
					<div>
						<h3>开放 API 平台</h3>
						<p>目前我公司已经对外开放数 10 种数字货币的包含助记词，私钥地址生成，离线签名，充值和提现的 API</p>
					</div>
				</div>
			</div>
		</div>

		<div id='cp-good' class="box">
			<h1>产品优势</h1>
			<div class="good-box">
				<div class="item">
					<h3>资金安全</h3>
					<p>系统实时资金风控，业务层、钱包、上链数据同步监控，防渗透、DDoS等系统攻击，发现用户和管理员的高危行为及时自动干预，风控服务模块独立部署和运行</p>
				</div>
				<div class="item">
					<h3>密钥抗丢失</h3>
					<p>去中化钱包密钥存储在客户端，我们完美地使用《云端可干扰的技术方案解》决了密钥丢失的问题</p>
				</div>
				<div class="item">
					<h3>快速开发迭代</h3>
					<p>已有的钱包三天就能上线，新钱包开发周期不会超过三个周</p>
				</div>
			</div>
		</div>

		<div id='helpword' class="box">
			<h1>帮助文档</h1>
			<div class="help-box box-ctx">
				<div class="item">
					<h3>助记词私钥文档</h3>
					<p>联系公司技术部门索要，微信电话：13611267041</p>
					<span></span>
				</div>
				<div class="item">
					<h3>离线签名文档</h3>
					<p>联系公司技术部门索要，微信电话：13611267041</p>
					<span></span>
				</div>
				<div class="item">
					<h3>充值提现文档</h3>
					<p>联系公司技术部门索要，微信电话：13611267041</p>
					<span></span>
				</div>
			</div>
		</div>

		<div id='user-data' class="box">
			<h1>应用场景</h1>
			<div class="data-box box-ctx">
				<div class="data-item">
					<span>
						<img src=""/>
					</span>
					<div>
						<h3>Biwork</h3>
						<p>知名企业级数字货币钱包</p>
					</div>
				</div>
				<div class="data-item">
					<span>
						<img src=""/>
					</span>
					<div>
						<h3>XQSToken</h3>
						<p>去中心化量化交易钱包</p>
					</div>
				</div>
				<div class="data-item">
					<span>
						<img src=""/>
					</span>
					<div>
						<h3>UmiCash</h3>
						<p>通用数字货币钱包</p>
					</div>
				</div>

				<div class="data-item">
					<span>
 						<img src=""/>
					</span>
					<div>
						<h3>AskMe</h3>
						<p>全球第一款币圈知识付费产品</p>
					</div>
				</div>

				<div class="data-item">
					<span>
 						<img src=""/>
					</span>
					<div>
						<h3>TBS Wallet</h3>
						<p>集共振交易，12层推销模型，挖矿托管的资产投资钱包</p>
					</div>
				</div>

				<div class="data-item">
					<span>
 						<img src=""/>
					</span>
					<div>
						<h3>辛运兔</h3>
						<p>一款基于 USDT 付费的小游戏DAPP</p>
					</div>
				</div>
			</div>
		</div>

		<!-- 底部 -->
		<nav-footer></nav-footer>
	</div>
</template>

<script>
  export default {
  name: 'productWallet',
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
      // init_cns()
  },
  methods: {},

}
</script>

<style scoped lang="less">
@import './../../assets/less/index.less';
// #cvs {
// 	height: 100%;
// 	width: 100%;
// }
	.tab-first{height: 300px; width: 100%; background-color: #170202;background-repeat: no-repeat;
			.flex-box();
			.flex-wrap(wrap);
			.title-txt{
        flex: 1;
        padding-left: 20rem;
        color: #fff;
        text-align: left;
				h1 {font-size: 25px;margin-top: 6rem;}
				p{font-size: 16px;}
			}
			.title_bg {
				flex: 1;
				overflow: hidden;
				background-image: url('../../assets/img/common/index_a.png');
				background-size: cover;
				background-repeat: no-repeat;
			}
		}

	.nav-link {background-color: #001724;height: 60px;color: #fff;
		.flex-box();
		.flex-wrap(wrap);
		padding: 0 32%;
		a{padding: 0 20px;color: #fff;line-height: 60px;height: 100%;font-size: 18px;
		&:hover{color:#939CA5;}}
	}
	#cpgneng{
		// padding: 5rem 0;
		// h1{font-size: 25px;}
		.cpgn-jieshao{
			.flex-box();
			.flex-wrap(wrap);
			.cpgn-item{
				width: 50%;
				margin-top: 20px;
				.flex-box();
				span{width: 80px;height: 80px;border:1px solid #f0f0f0;border-radius: 5px;}
				div{
					padding-left: 30px;
					text-align: left;
					h3{font-size: 16px;margin-bottom: 5px;}
					P {font-size: 14px;}
				}
			}
		}
	}
	.box {
		padding: 5rem 0;
		h1{font-size: 25px;}
		.box-ctx{
			.flex-box();
			.flex-wrap(wrap);
			padding: 0 10%;
		}
	}
	#helpword{
		.item{
			margin-top: 20px;
			width: 28%;background: #f0f0f0;
			margin-left: 8%;
			padding: 3rem;
			box-sizing: border-box;
			border:1px solid #f0f0f0;
			border-radius: 6px;
			text-align: center;
			&:first-child{margin-left: 0;}
			&:hover{
				border:1px solid #0A93ED;
				transition: all 1s;
			}
			position: relative;
			h3{font-size: 16px;}
			p{font-size: 14px;text-align: left;}
			span{
				width: 100px;
				height: 40px;
				position: absolute;
				right: -50px;
				top:42%;
				background-image: url('../../assets/img/common/next.png');
				background-size: cover;
				background-size: 40%;
				background-repeat: no-repeat;
			}
		}
	}
	#cp-good{
		background-color: #F3F6F7;
		.good-box{
			padding: 0 10%;
			.item{
				// .flex-box();
				// .flex-wrap(wrap);
				margin-top: 20px;
				height: 70px;
				h3{width: 25%;font-size: 16px;float: left;line-height: 20px;}
				p{width: 70%;height: 100%; margin-left: 5%;text-align: left;float: left;line-height: 20px;color:#939CA5;font-size: 14px;border-bottom: 1px solid #DEE4E7;}
			}
		}
	}
	#user-data{
		background-color: #F3F6F7;
		.data-box {
			.data-item{
				margin-top: 20px;
				padding: 10px 50px;
				.flex-box();width: 100%;height: 90px; background-color: #fff;border-radius: 6px;}
				span{width: 100px;height: 70px;
				img{width:100px; height:40px; margin-top:15px}}
				div{
					margin-top: 10px;
					padding-left: 30px;
					text-align: left;
					h3{font-size: 16px;margin-bottom: 5px;}
					p{font-size: 14px;}
				}
		}
	}
</style>
