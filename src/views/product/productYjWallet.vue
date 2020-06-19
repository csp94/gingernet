<template>
    <div class="gap-nav">
        <div class='tab-first'>
            <div class="title-txt">
                <h1>数字货币硬件钱包</h1>
                <p style="margin-top:50px">蓝牙通信，串口通信，钱包内部离线签名，可以完美的和钱包和交易所相结合，支持 10 多种主链币</p>
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
                        <h3>蓝牙通信</h3>
                        <p>提供和第三方交易所和钱包接入的蓝牙通信接口，客户可以根据自己的需求对接开发</p>
                    </div>
                </div>
                <div class="cpgn-item">
                    <div>
                        <h3>串口通信</h3>
                        <p>提供和第三方交易所和钱包接入的串口通信指令，客户可以根据自己的需求对接开发</p>
                    </div>
                </div>
                <div class="cpgn-item">
                    <div>
                        <h3>图灵完备</h3>
                        <p>硬件钱包可以配合我们的硬件钱包专用 APP，桌面程序进行使用，比 Ledger 使用更加流畅的体验</p>
                    </div>
                </div>
                <div class="cpgn-item">
                    <div>
                        <h3>内部离线签名</h3>
                        <p>钱包机内部实现离线签名，用户可以将要签名的数据导入到硬件钱包，钱包签完名返回签名的字符串给用户</p>
                    </div>
                </div>
            </div>
        </div>

        <div id='cp-good' class="box">
            <h1>产品优势</h1>
            <div class="good-box">
                <div class="item">
                    <h3>内部离线签名</h3>
                    <p>钱包机内部实现离线签名，用户可以将要签名的数据导入到硬件钱包，钱包签完名返回签名的字符串给用户</p>
                </div>
                <div class="item">
                    <h3>图灵完备</h3>
                    <p>钱包机内部实现离线签名，用户可以将要签名的数据导入到硬件钱包，钱包签完名返回签名的字符串给用户</p>
                </div>
                <div class="item">
                    <h3>币种支持</h3>
                    <p>系统实时资金风控，业务层、钱包、上链数据同步监控，防渗透、DDoS等系统攻击，发现用户和管理员的高危行为及时自动干预，风控服务模块独立部署和运行</p>
                </div>
            </div>
        </div>

        <div id='helpword' class="box">
            <h1>帮助文档</h1>
            <div class="help-box box-ctx">
                <div class="item">
                    <h3>串口指令通信文档</h3>
                    <p>联系公司技术部门索要，微信电话：13611267041</p>
                    <span></span>
                </div>
                <div class="item">
                    <h3>蓝牙通信文档</h3>
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
                        <img src="../../assets/img/common/coincore.png"/>
                    </span>
                    <div>
                        <h3>CoinCore</h3>
                        <p>一款通用数字货币钱包</p>
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
        name: 'productYjWallet',
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
            text-align: left;
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
