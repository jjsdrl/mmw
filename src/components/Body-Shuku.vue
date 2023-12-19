<template>
    <div class="Body-Shuku">
        <button @click="getBook">获取书库</button>
        <div class="row" v-for="(l,index) in list" :key="index">
		<div class="col-sm-12">
        <router-link to="/Xiaoshuo" class="col-md-12 col-xs-3 homex">
            <hr>
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
name: 'Body-Shuku',
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
<style>
.homex{
border-top:1px solid #ccc;
}
.homex .row{
border-bottom:1px solid #ccc;
}
</style>