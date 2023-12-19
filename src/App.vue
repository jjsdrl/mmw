<template>
  <div id="app">
    <div class="row">
		<header class="col-lg-2">
			<div class="logo">
				<img src="./assets/img/0.jpg">
			</div>
			<div class="nav">
				<router-link to="/ShouYe" class="col-md-12 col-xs-3">首页</router-link>
				<router-link to="/Shuku" class="col-md-12 col-xs-3">书库</router-link>
				<router-link to="/SouSuo" class="col-md-12 col-xs-3">搜索</router-link>
				<router-link to="/BodyWo" class="col-md-12 col-xs-3">我</router-link>
			</div>
		</header>
	<div class="col-lg-7">
		<router-view></router-view>
	</div>
      <PageTail class="col-lg-3"></PageTail>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import VueAxios from 'vue-axios';
import PageTail from './components/Page-Tail.vue';
import  Vue from 'vue';
import VueRouter from 'vue-router';
import ShouYe from './components/Body-ShouYe.vue';
import Shuku from './components/Body-Shuku.vue';
import SouSuo from './components/Body-SouSuo.vue';
import BodyWo from './components/Body-Wo.vue';
import ShuJia from './components/Body-ShuJia.vue';
import Miss from './components/Body-Miss.vue';
import Login from './components/Body-Login.vue';
import Xiaoshuo from './components/Body-Xiaoshuo.vue';
  Vue.use(VueAxios,axios)
  Vue.use(VueRouter)
  var router = new VueRouter({
	routes:[
		{path:"/ShouYe",component:ShouYe},
		{path:"/ShuJia",component:ShuJia},
		{path:"/SouSuo",component:SouSuo},
		{path:"/BodyWo",component:BodyWo,children:[
			{path:'Miss',component:Miss},
		]},
		{path:"/Login",component:Login},
		{path:"/Xiaoshuo",component:Xiaoshuo},
		{path:"/Shuku",component:Shuku},
	]
  })
export default {
  name: 'App',
  components:{
    PageTail,
  },
  router:router,
  data(){
	return{
		list:[]
	}
  },
  methods:{
	getlist(e){
		this.list= e;
		console.log(e)
	}
  },
  
}
</script>
<style>
ul{
	list-style-type: none;
	margin: 0;
	padding: 0;
}
a{
	color: #666;
	text-decoration: none;
}
a:hover{
	text-decoration: none;
}
@media screen and (min-width: 1280px) {
	.container{
		width:1280px;		
				}
}
header{
	padding-left: 0;
}
.logo img{
	width: 100%;
	height: 50%;
}
.nav{
	background-color: #eee;
	border-bottom: 1px solid #ccc;
}
.nav a{
	display: block;
	height: 50px;
	line-height: 50px;
	padding-left: 30px;
	font-size: 16px;
}
.nav a:hover{
	background-color: #fff;
	color: #333;
}
</style>