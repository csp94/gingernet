<template>
    <div class="gap-nav">
        <div class='tab-first'>
            <div class="title-txt">
                <h1>主链联盟链</h1>
                <p style="margin-top:50px">公链技术，跨链，链改，链通，合约解释器，插件时开发，最大程度降低模块之间耦合性</p>
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
                        <h3>公链</h3>
                        <p>提供主链快速开发，可以基于现有的主链定制化开发，也可以从头设计开发，周期短小</p>
                    </div>
                </div>
                <div class="cpgn-item">
                    <div>
                        <h3>联盟链</h3>
                        <p>提供联盟链快速开发，可以基于现有的联盟链定制化开发，也可以从头设计开发，周期短小</p>
                    </div>
                </div>
                <div class="cpgn-item">
                    <div>
                        <h3>跨链</h3>
                        <p>区块链之间互通性极大程度的限制了区块链的应用空间。不论对于公有链还是私有链来看，跨链技术就是实现价值互联网的关键，它是把区块链从分散的孤岛中拯救出来的良药，是区块链向外拓展和连接的桥梁</p>
                    </div>
                </div>
                <div class="cpgn-item">
                    <div>
                        <h3>合约解释器</h3>
                        <p>合约解释器是为了打通现在的链与链之间通信而设计，目前我们已经研发出 COSMOS 和 以太坊，Fabric 和 以太坊之间的跨链通信合约解释器</p>
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
                    <h3>公链，联盟链开发摘要文档</h3>
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
                       <img src="../../assets/img/common/linkeye.png"/>
                    </span>
                    <div>
                        <h3>Linkeye</h3>
                        <p>新加波知名公链平台</p>
                    </div>
                </div>
                <div class="data-item">
                    <span>
                        <img src="../../assets/img/common/ssp.png"/>
                    </span>
                    <div>
                        <h3>Smartshare</h3>
                        <p>积分通证公链平台</p>
                    </div>
                </div>
                <div class="data-item">
                    <span>
                        <img src="../../assets/img/common/imcorechain.png"/>
                    </span>
                    <div>
                        <h3>ImcoreChain</h3>
                        <p>基于知识产权的保护平台</p>
                    </div>
                </div>
                <div class="data-item">
                    <span>
                       <img src=""/>
                    </span>
                    <div>
                        <h3>GinChain</h3>
                        <p>财务结算联盟链平台</p>
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
            span{width: 100px;height: 70px;border-radius: 5px;
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
