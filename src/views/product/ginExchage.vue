<template>
    <div class="gap-nav">
        <!-- <nav-header></nav-header> -->
        <!-- <canvas id="cvs"></canvas> -->
        <div class='tab-first'>
            <div class="title-txt">
                <h1>数字货币交易所</h1>
                <p style="margin-top:50px">支持上百中主链数字货币，撮合系统，币币交易，法币交易，杠杆交易和用户自定义交易对，用户可以通过 API 下单</p>
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
                        <h3>撮合系统</h3>
                        <p>基于内存设计的撮合系统，对顾客所下订单进行公平合理的排列和撮合功能，保证撮合算法的公平高效以及扩展性</p>
                    </div>
                </div>
                <div class="cpgn-item">
                    <div>
                        <h3>币币交易</h3>
                        <p>提供平台内盈利的良好机会，降低兑换币种之间的成本，不违背国家的政策</p>
                    </div>
                </div>
                <div class="cpgn-item">
                    <div>
                        <h3>法币交易</h3>
                        <p>数字货币和法定货币可以直接交易和支付的交易所系统。可直接对接本地银行。仅为数字交易合法合规的国家和地区提供。</p>
                    </div>
                </div>
                <div class="cpgn-item">
                    <div>
                        <h3>杠杆交易</h3>
                        <p>现货杠杆交易系统，竞价交易机制，与现货交易共享盘口深度，为用户提供中短期借贷资金周转支持，完善的风险防范机制，保证平台零亏损。</p>
                    </div>
                </div>
                <div class="cpgn-item">
                    <div>
                        <h3>OTC</h3>
                        <p>数字资产交易世界的出入口，打通与其他产品的用户账户体系，方便用户用法币购买数字资产或将手中资产随时变现。严格的用户安全认证和反洗钱策略，保障运营方和用户的账户安全。</p>
                    </div>
                </div>
                <div class="cpgn-item">
                    <div>
                        <h3>流动性系统</h3>
                        <p>通过机器人程序和流动性资金支持，对上线早期盘面深度不足的品种和流动性不充分的品种，提供充足的流动性，并提高庄家作恶的成本，防止盘面不合理波动。</p>
                    </div>
                </div>
            </div>
        </div>

        <div id='cp-good' class="box">
            <h1>产品优势</h1>
            <div class="good-box">
                <div class="item">
                    <h3>专业定制开发</h3>
                    <p>开发周期短，一周之内定制一款属于您自己的交易所</p>
                </div>
                <div class="item">
                    <h3>长期维护</h3>
                    <p>对只做运营的团队，我们提供永久的技术支持与技术服务</p>
                </div>
                <div class="item">
                    <h3>源码出售</h3>
                    <p>本项目可以之间出售项目源码，给项目方提供自己定制的可能性</p>
                </div>
            </div>
        </div>

        <div id='helpword' class="box">
            <h1>帮助文档</h1>
            <div class="help-box box-ctx">
                <div class="item">
                    <h3>行情 API 文档</h3>
                    <p>联系公司技术部门索要，微信电话：13611267041</p>
                    <span></span>
                </div>
                <div class="item">
                    <h3>交易 API 文档</h3>
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
						<img width="220px" height="60px" src="../../assets/img/common/ginger.png"/>
					</span>
                    <div>
                        <h3> Ginger </h3>
                        <p>正在崛起的交易所</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 底部 -->
        <nav-footer></nav-footer>
    </div>
</template>

<script>
    // import { init_cns } from '../static/canvas-dh/index.js'
    export default {
        name: 'product',
        components:{
            NavFooter: require('@/components/common/navFooter.vue').default
            // NavHeader: require('@/components/common/navHeader.vue').default
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
    .tab-first{height: 300px; width: 100%; text-align: center; background-color: #170202;background-repeat: no-repeat;
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
            background-image: url('./../../assets/img/common/index_a.png');
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
            text-align: center;
            border-radius: 6px;
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
                background-image: url('./../../assets/img/common/next.png');
                background-size: cover;
                background-size: 50%;
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
