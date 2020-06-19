<template>
	<div class="gap-nav">
		<div class='tab-first'>
			<div class="title-txt">
				<h1>研究中心</h1>
				<p style="margin-top:50px">专注于区块链行业底层技术分析，包括区块链应用、基础协议层、生态服务类与区块链技术。</p>
			</div>
		</div>
        <div class="list">
            <div class="item wow lightSpeedIn" data-wow-duration="0.5s" data-wow-delay="0.2s">
                <div class="flex">
                    <img src="../assets/img/common/kds.png" alt="">
                </div>
                <div class="flex info">
                    <h3 class="title">木姜子研究报告：一种云端可干扰的密钥解决方案</h3>
                    <p>2019-06-28</p>
                    <p class="conten">
                        对于数字资产钱包来说, 私钥是整个钱包的核心, 不管是去中心化钱包还是硬件钱包, 私钥的存储都是在端上, 私钥的丢失是一个必然存在的问题,
                        如何解决去中心化应用的私钥抗丢失是所有数字资产交易所和钱包的痛点, 为了解决目前普遍存在的这么个痛点，我们提出了一种云端可干扰的密钥解决方案。
                    </p>
                    <div class="info-footer">
                        <router-link class='button' :to="{ name: 'viewkds'}" >预览</router-link>
                        <a href="http://www.gingernet.vip/dl/pdf/kds.pdf"
                                class="download" download="">
                                <span class="download-text">
                                    下载
                                </span>
                                <img src="../assets/img/common/download_icon.png">
                        </a>
                    </div>
                </div>
            </div>

            <div class="item wow lightSpeedIn" data-wow-duration="0.5s" data-wow-delay="0.4s">
                <div class="flex">
                    <img src="../assets/img/common/zscq.png" alt="">
                </div>
                <div class="flex info">
                    <h3 class="title">木姜子研究报告：基于区块链的知识产权系统设计研究报告</h3>
                    <p>2019-7-15</p>
                    <p>GinChain 知识产权保护底层区块链项目， 主要是作为天津木姜子科技科技拟
                        推出的底层区块链平台， 服务于公司业务的同时也可以服务于其他公司的需求，
                        如： 知识产权保护、 资产 Token 化和仲裁等业务。 因此， 基于 Token 化的知识
                        产权保护在设计上除了重点考虑良好的用户体验和模块化外， 还要考虑以后的扩
                        展性； 基于这些目标， 我们提出主链和子链相结合的区块链底层技术构架设计。
                    </p>
                    <div class="info-footer">
                        <router-link class='button' :to="{ name: 'viewzscq'}" >预览</router-link>
                        <a href="http://www.gingernet.vip/dl/pdf/ginchain.pdf"
                           class="download" download="">
                                <span class="download-text">
                                    下载
                                </span>
                            <img src="../assets/img/common/download_icon.png">
                        </a>
                    </div>
                </div>
            </div>

            <div class="item wow lightSpeedIn" data-wow-duration="0.5s" data-wow-delay="0.6s">
                <div class="flex">
                    <img src="../assets/img/common/gongshi.png" alt="">
                </div>
                <div class="flex info">
                    <h3 class="title">木姜子研究报告：区块链共识算法研究</h3>
                    <p>2019-07-28</p>
                    <p>
                        目前区块链公链联盟链技术发展很快, 从 Bitcoin 到 ETH，从 EOS 到 COSMOS, 从 Fabric 发展到各大公司自主联盟链
                        到底发生了那些变化，区块链的共识算法经历那些变革，什么共识算法才是目前公链联盟链共识算法的最优解。
                    </p>
                    <div class="info-footer">
                        <router-link class='button' :to="{ name: 'viewgs'}" >预览</router-link>
                        <a href="http://www.gingernet.vip/dl/pdf/gs.pdf"
                                class="download" download="">
                                <span class="download-text">
                                    下载
                                </span>
                                <img src="../assets/img/common/download_icon.png">
                        </a>
                    </div>
                </div>
            </div>

            <div class="item wow lightSpeedIn" data-wow-duration="0.5s" data-wow-delay="0.8s">
                <div class="flex">
                    <img src="../assets/img/common/gzjy.png" alt="">
                </div>
                <div class="flex info">
                    <h3 class="title">木姜子研究报告：去中心化交易所底层技术解决方案</h3>
                    <p>2019-08-01</p>
                    <p>随着币安去中心化交易所的上线，币安的市值发生了翻天覆地的变化，越来越多的公司开始关注去中心化交易所，如何开发一个去中心化交易所成为了区块链技术公司研究的新方向，木姜子科技跟上时代的步伐，为大家带来几种去中心化交易所的解决方案。
                    </p>
                    <div class="info-footer">
                        <router-link class='button' :to="{ name: 'viewjys'}" >预览</router-link>
                        <a href="http://www.gingernet.vip/dl/pdf/jys.pdf"
                                class="download" download="">
                                <span class="download-text">
                                    下载
                                </span>
                                <img src="../assets/img/common/download_icon.png">
                        </a>
                    </div>
                </div>
            </div>
        </div>
		<!-- 底部 -->
		<nav-footer></nav-footer>
	</div>
</template>

<script>
    import pdf from 'vue-pdf'
    import {WOW} from 'wowjs'
    export default {
        name: 'product',
        components:{
            NavFooter: require('@/components/common/navFooter.vue').default,
            pdf
        },

        props: {},

        data(){
            return {}
        },
        created() {

        },
        mounted() {
            new WOW().init()
        },
        methods: {},

    }
</script>

<style scoped lang="less">
	@import './../assets/less/index.less';
	.tab-first{height: 300px; width: 100%; text-align: center; background-color: #170202;background-repeat: no-repeat;
		.flex-box();
		.flex-wrap(wrap);
		.title-txt{
			flex: 1;
			color: #fff;
			text-align: left;
            h1 {font-size: 25px;margin-top: 6rem;text-align: center;
                position: relative;
                &:after{
                    content: " ";
                    width: 40px;
                    height: 2px;
                    background-color: red;
                    position: absolute;
                    top: 40px;
                    left: 50%;
                    margin-left: -20px;
                }
            }
			p{font-size: 16px;text-align: center;}
		}
		.title_bg {
			flex: 1;
			overflow: hidden;
			background-image: url('./../assets/img/common/index_a.png');
			background-size: cover;
			background-repeat: no-repeat;
		}
    }
    .list {
        width: 900px;
        margin: 0 auto;
        margin-top: -100px;
        .item {
            width: 900px;
            height: 320px;
            margin-bottom: 20px;
            background-color: white;
            box-shadow: 0px 2px 10px 0px rgba(72, 39, 0, 0.1);
            display: flex;
            .flex {
                flex: 1;
                img{width: 100%;}
            }
            .info {
                flex: 2;
                margin: 45px;
                h3.title {
                    font-size: 20px;
                    color: #333333;
                    line-height: 1.08;
                    text-align: left;
                }
                p{
                    font-size: 14px;
                    color: #555555;
                    margin: 10px 0 30px;
                    text-align: left;
                    &:last-child {
                        margin-bottom: 10px;
                    }
                }
                .info-footer {
                    margin-bottom: 0;
                    height: 38px;
                    .button{
                        padding: 10px 25px;
                        border-radius: 15px;
                        background-color: #ff8a00;
                        color: white;
                        text-decoration: none;
                        float: left;
                    }
                    .download {
                        text-decoration: none;
                        font-size: 16px;
                        color: #444444;
                        float: right;
                        -webkit-box-align: center;
                        -webkit-align-items: center;
                        -ms-flex-align: center;
                        align-items: center;
                        vertical-align: middle;
                        line-height: 38px;
                    }
                    .download-text {
                        margin-right: 10px;
                    }
                    img {
                        width: 18px;
                        height: 17px;
                        padding: 0;
                        margin: 0;
                        border: none;
                        outline: none;
                        vertical-align: middle !important;
                        outline-style: none;
                    }
                }
            }

        }
    }
</style>
