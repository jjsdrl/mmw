<template>
    <div class="Body-SouSuo">
    <div class="sbox">
    <input type="text" name="bname" v-model="bname" placeholder="请输入完整书名">
    <input type="button" class="ss" value="搜索" @click="getbookxx">
    </div>
    <div class="box" v-for="(l,index) in list" :key="index">
					<div class="col-sm-12">
						<router-link to="/Xiaoshuo" class="col-md-12 col-xs-3 homex">
						<h3>《{{l.bname}}》</h3>
						</router-link>
						<p class="text-muted">{{l.bzz}}上传于2023-06-19</p>
						<p>{{l.bjj}}</p>
						<p class="text-muted">阅读（520）评论（521）赞（1314）</p>
					</div>
				</div>
    </div>				
  </template>
  
  <script>
  import axios from 'axios';
  import VueAxios from 'vue-axios';
  import Vue from 'vue';
  Vue.use(VueAxios,axios)
  export default {
    name: 'Body-SouSuo',

	data(){
  
		return{
			list:[],
      bname:'',
		}
	},
    methods:{
		getbookxx(val){
      val = this.bname;
      console.log(val);
      axios.get('http://localhost:3000/getbookxx?bname='+val).then(reponse =>{console.log("请求数据成功了:",this.list = reponse.data.list)},error=>{console.log("请求数据失败了:",error.message)})
    }
	},
  }
</script>
<style>
.sbox{
  position: absolute;
  top: 5%;
  left: 30%;
  width: 50%;
}
.sbox .ss{

  position: relative;
  left: 10px;
}
.box{
  position: absolute;
  top: 15%;
  left: 20%;
  width: 50%;
  border: #373636 1px solid ;
}
.homex{
border-top:1px solid #404040;
}
.homex .row{
border-bottom:1px solid #404040;
}
</style>