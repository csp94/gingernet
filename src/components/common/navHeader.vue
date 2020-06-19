<template>
   <div class="header-bar clearfix">
		<h1 class="title" @click="go('home')">
			木姜子科技(gingernet.vip)
		</h1>
		<ul class="nav clearfix" @mouseleave="leaveNav">
			<li v-for='(i,index) in nav' :key='index' @mouseover="hoverNav(i.hasMenu)" >
				<router-link class='font-color'   :to="{ name: i.to}" v-bind:class='{"more": i.hasMenu}'>{{i.name}}</router-link>
			</li>
    	</ul>
		<div class="menu-nav" v-if='secodNav.type' @mouseleave="leaveMenuNav" @mouseover="entMenuNav()">
			<li>{{secodNav.name}}</li>
			<li><span @click='go(item.to)' v-for='(item,index) in secodNav.minNav' :key='index'>{{item.name}}</span></li>
		</div>
  </div>
</template>

<script>
export default {
  name: 'navHeader',
  components:{},
  props: {},
  watch: {

  },
  data(){
      return {
        nav:[
			{to:'home',name:'首页'},
			{to:'product',name:'区块链产品',hasMenu:'product'},
			{to:'solution',name:'解决方案'},
			{to:'research',name:'研究中心'},
			{to:'partner',name:'合作伙伴'},
			{to:'about',name:'关于我们'},
        ],
		navMenu:{
			product:{
				name:'产品',
				type:'product',
				minNav:[{name:'数字货币钱包',to:'productWallet'},{name:'数字货币硬件钱包',to:'productYjWallet'},{name:'数字货币交易所',to:'ginExchage'},{name:'主链联盟链',to:'mainChain'},{name:'股票交易所',to:'guExchange'}]
			}
		},
		secodNav: {},
		type:''
      }
  },
  created() {
      
  },
  mounted() {

  },
  methods: {
	  hoverNav(nav){
		  if(nav){
			  if(!this.secodNav.type || this.secodNav.type!==nav){
				  this.secodNav = Object.assign({},this.navMenu[nav]);
			  }
		  }else this.secodNav = {};
		   this.type = '';
	  },
	  leaveNav(e){
		  e.stopPropagation();
		  setTimeout(() => {
			if(this.type !== 'enter'){
				this.secodNav = {};
				 this.type = ''
			}
		  }, 400);
	  },
	  leaveMenuNav(){
		  this.secodNav = {};
		  this.type = ''
	  },
	  entMenuNav(){
		  this.type = 'enter';
	  },
	  go(route){
		  if(!route) return false;
		  this.type = '';
		  this.$router.push({name:route})
	  }
  },

}
</script>

<style scoped lang="less">

@import './../../assets/less/index.less';
 
  .has-header {
    margin-top: 4.8rem;
    
  }
  a {
    text-decoration: none;
  }
 .font-color{color:white}
  li{ list-style: none}
  .header-bar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 998;
    height: 4.8rem;
    background: #170202;;
    border-bottom: 0.1rem solid #170202;
    line-height: 4.8rem;
    min-width:750px;
    .title{float:left;font-size:1.6rem; color:white;text-indent: 7rem;padding-left: 1.8rem;}
	// 子菜单
	.menu-nav{
		width: 100%;
		position: absolute;
		top:4.7rem;
		border-top: 1px solid #1D3647;
		background-color: #170202;
		overflow: hidden;
		.flex-box();
		li{
			box-sizing: border-box;
			color:#fff;
			&:first-child{width: 40%;font-size: 18px;line-height: 57px;}
			&:nth-child(2){
				width: 60%;
				font-size: 14px;
				border-left: 1px solid #1D3647;
				.flex-box();
				.flex-wrap(wrap);
				span{
					width: 33%;
					cursor: pointer;
					&:hover{
						color:#E4A813;
					}
				}
			}
		}
	}
    .nav{
        float:right;
		font-size:1.8rem;
		display: flex;
		padding-right: 1.8rem;
		li {
			list-style:none;
			padding: 0 2rem;
		}
		.more{
			position: relative;
			&:before{
				content: ' ';
				width: 7px;
				height: 0;
				position: absolute;
				right: -9px;
				bottom: 5px;
				border-bottom: 7px solid #fff;
				border-left: 7px solid #170202;
			}
		}
		  .router-link-active{
			  color: #E4A813;
			  &.more{
					position: relative;
					&:before{
						border-bottom: 7px solid #E4A813;
					}
				}
		  }
    }
  }
</style>
