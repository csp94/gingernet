<template>
    <div class="gap-nav">
        <div class='tab-first'>
            <div class="title-txt">
                <h1>股票交易所</h1>
                <p style="margin-top:50px">完整的解决方案，可以快速开发迭代，专业化定制开发</p>
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
                        <h3>现货交易</h3>
                        <p>功能成熟、应用广泛的数字资产现货交易系统，强大的内存撮合引擎保证高并发量交易支持，包含完善的前后台系统，提供配套中心化钱包，系统安全稳定，可保障平台和用户双方的隐私安全、系统安全和资产安全，支持策略委托</p>
                    </div>
                </div>
                <div class="cpgn-item">
                    <div>
                        <h3>期货合约</h3>
                        <p>功能成熟的金融期货交易系统，支持双向开仓和逐仓管理。有完备的风险防范制度，并可按指数价格交割，最大限度保护用户的权益和资产安全。有强大的内存撮合引擎保证高并发量的交易支持</p>
                    </div>
                </div>
                <div class="cpgn-item">
                    <div>
                        <h3>现货杠杆</h3>
                        <p>现货杠杆交易系统，竞价交易机制，与现货交易共享盘口深度，为用户提供中短期借贷资金周转支持，完善的风险防范机制，保证平台零亏损。有强大的内存撮合引擎保证高并发量的交易支持</p>
                    </div>
                </div>

                <div class="cpgn-item">
                    <div>
                        <h3>行情数据</h3>
                        <p>实时行情数据，深度数据，完整的 K 线图，方便客户预测行情</p>
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
                    <h3>股票交易所开发摘要文档</h3>
                    <p>联系公司技术部门索要，微信电话：13611267041</p>
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
                        <h3>股票交易所</h3>
                        <p>股票交易所</p>
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
                background-image: url('../../assets/img/common/next.png');
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
