<template>
    <div class="Body-ShuJia">
      <center><h1>我的书架</h1></center>
      
      <div class="row bbb">
        <button @click="getUsersj">查看我的书库</button>
      <br>
      <br>
      <br>
      <div class="book col-sm-3" v-for="(l,index) in list" :key="index">
        <h2>《{{ l.bname}}》</h2>
        <h5>{{ l.bzz }}</h5>
        <h6>{{ l.bjj }}</h6>
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
    name: 'Body-ShuJia',
    data(){
      return{
        list:[],
        bid:1111,
      }
    },
    methods:{
      getUsersj(val){
        val = this.bid
        axios.get('http://localhost:3000/getUsersj?uid='+val).then(reponse =>{console.log("请求数据成功了:",this.list = reponse.data.list)},error=>{console.log("请求数据失败了:",error.message)})
      }
    }
  }
  </script>
  <style>
  .book{
    height: 300px;
    width: 100px;
    margin-top: 10px;
    margin-left: 30px;
    border: 1px #333 solid;
  }
</style>