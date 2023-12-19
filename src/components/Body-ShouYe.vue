<template>
    <div class="Body-ShouYe">
        <article >
			<div class="tp">
				<li>
					<div class="zh">
						<img src="../assets/img/1.jpg"/>
						<p>米奇妙妙屋</p>
					</div>
				</li>
				<li>
					<div class="zh">
						<img src="../assets/img/2.jpg"/>
						<p>《中国意境》</p>
					</div>
				</li>
				<li>
					<div class="zh">
						<img src="../assets/img/3.jpg"/>
						<p>《曹碑》</p>
					</div>
				</li>
				<li>
					<div class="zh">
						<img src="../assets/img/4.jpg"/>
						<p>《乡村文化》</p>
					</div>
				</li>
				<li>
					<div class="zh">
						<img src="../assets/img/5.jpg"/>
						<p>《长安故里》</p>
					</div>
				</li>
			</div>
			<button @click="getBook">更多</button><br>
			<hr>
			
				<div class="row" v-for="(l,index) in list" :key="index">
					<div class="col-sm-12">
						<router-link to="/Xiaoshuo" class="col-md-12 col-xs-3 homex">
						<h3>《{{l.bname}}》</h3>
						</router-link>
						<p class="text-muted">{{l.bzz}}上传于2023-06-19</p>
						<p>{{l.bjj}}</p>
						<p class="text-muted">阅读（520）评论（521）赞（1314）</p>
						<hr>
					</div>
				</div>							
		</article>
    </div>
  </template>
  
  <script>
	import axios from 'axios';
	import VueAxios from 'vue-axios';
	import Vue from 'vue';
	Vue.use(VueAxios,axios)
  export default {
    name: 'Body-ShouYe',
    data(){
		return{
			list:[],
		}
	},
	methods:{
		getBook(){
			axios.get('http://localhost:3000/book').then(reponse =>{console.log("请求数据成功了:",this.list = reponse.data.list)},error=>{console.log("请求数据失败了:",error.message)})
		},
	}
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
.home{
	margin-top:10px;
	width: 100%;
	height:5%;
}
.tp li{
	float: left;
	width: 25%;
	height: 115px;
	padding-right: 10px;
	margin-bottom: 10px;
	list-style: none;
}
.tp li .zh{
	position: relative;
	display: block;
	width: 100%;
	height: 100%;
}
.tp li .zh img{
	width: 100%;
	height: 100%;
}
.tp li .zh p{
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 41px;
	padding: 5 10px;
	margin-bottom: 0;
	background: rgba(0,0,0,0.5);
	line-height: 41px;
	font-size: 20px;
	color: #fff;
}
.tp li:nth-child(1){
	width: 50%;
	height: 240px;
}
.tp li:nth-child(1) p{
	line-height: 41px;
	font-size: 20px;
	padding: 0 10px;
}

  </style>