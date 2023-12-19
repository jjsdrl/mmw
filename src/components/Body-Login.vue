<template>
  <div class="Body-Login">
    <div class="shell">
      <div class="contain a-container" id="a-contain">
        <form action="" id="a-form" class="form">
          <h2 class="form_title title">创建账号</h2>
          <input type="text" class="form-input" placeholder="USERNAME" v-model="nname">
          <input type="text" class="form-input" placeholder="PASSWORD" v-model="npasswd">
          <BUtton class="form-button button submit" @click="getCreate">Sign up</BUtton>
        </form>
      </div>

      <div class="contain b-container" id="b-contain">
        <form action="" id="b-form" class="form">
          <h2 class="form_title title">登录</h2>
          <input type="text" class="form-input" placeholder="USERNAME" v-model="uname">
          <input type="text" class="form-input" placeholder="PASSWORD" v-model="upasswd">
          <router-link to="/Miss" class="form-link">忘记密码</router-link>
          <BUtton class="form-button button submit" >Sign in</BUtton>
        </form>
      </div>

      
      <div class="switch" id="switch-cnt">
        <div class="switch-circle"></div>
        <div class="switch-circle switch-circle-t"></div>
        <div class="switch-container" id="switch-c1">
          <h2 class="switch-title title" style="letter-spacing: 0;">Welcom Back!</h2>
          <p class="switch-description description">已经有账号了嘛？去登录账号来进入米奇妙妙屋吧！！！</p>
          <BUtton class="switch-button button switch-btn">Sign in</BUtton>
        </div>

      <div class="switch-container is-hidden" id="switch-c2">
        <h2 class="switch-title title" style="letter-spacing: 0;">Hello Friend!</h2>
        <p class="switch-description description">去注册一个账号，成为尊贵的成员吧！！！</p>
        <BUtton class="switch-button button switch-btn">Sign up</BUtton>
      </div>


    </div>
    </div>
	</div>			
  </template>
  
  <script>






  import axios from 'axios';
	import VueAxios from 'vue-axios';
	import Vue from 'vue';
  import store from '../store/index';
	Vue.use(VueAxios,axios)

  export default {
    name: 'Body-Login',
    data(){
      return{
        list:'',
        upasswd:'',
        uname:'',
        npasswd:'',
        nname:'',
      }
    },
    methods:{
      getUser(nm,pw){
      nm = this.uname;
      pw = this.upasswd;
      axios.get('http://localhost:3000/user?uname='+nm+'&upasswd='+pw).then(reponse =>{console.log("请求数据成功了:",this.list = reponse.data.list,this.$emit('list',reponse.data.list))},error=>{console.log("请求数据失败了:",error.message)});
      this.$store.commit('changeisShow');
      
      },
      getCreate(nn,np){
            nn = this.nname;
            np = this.npasswd;
            axios.get('http://localhost:3000/getCreate?nname='+nn+'&npasswd='+np).then(reponse =>{console.log("请求数据成功了:",this.list = reponse.data.list,)},error=>{console.log("请求数据失败了:",error.message)});
        }
    },
    store
  }


// js语法
  // let switchCtn = document.querySelector('#switch-cnt');
  // let switchC1 = document.querySelector('#switch-c1');
  // let switchC2 = document.querySelector('#switch-c2');
  // let switchCircle = document.querySelectorAll('.switch-circle');
  // let switchBtn = document.querySelectorAll('.switch-btn');
  // let aContainer = document.querySelectorAll('#a-container');
  // let bContainer = document.querySelectorAll('#b-container');
  // let allButtons = document.querySelectorAll('.submit');

  // let getButtons = (e) =>e.preventDefault()
  // let changeForm = () =>{
  //   switchCtn.classList.add('is-gx');
  //   setTimeout(function(){
  //     switchCtn.classList.remove('is-gx');
  //   },1500)
  //   switchCtn.classList.toggle('is-txr');
  //   switchCircle[0].classList.toggle('is-txr');
  //   switchCircle[1].classList.toggle('is-txr');

  //   switchC1.classList.toggle('is-hidden');
  //   switchC2.classList.toggle('is-hidden');
  //   aContainer.classList.toggle('is-txl');
  //   bContainer.classList.toggle('is-txl');
  //   bContainer.classList.toggle('is-z');

  // }
  // let shell = () =>{
  //   for(var i = 0;i<allButtons.length ; i++)
  //   allButtons[i].addEventListener("click",getButtons);
  //   for(var x = 0;x<switchBtn.length ; x++)
  //   switchBtn[x].addEventListener('click',changeForm)
  // }
  // window.addEventListener('load',shell);



</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}

.Body-Login{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #a0a5a8;
}
.shell{

  position: relative;
  width: 1000px;
  min-width: 1000px;
  min-height: 600px;
  height: 600px;
  padding: 25px;
  background-color: #ecf0f3;
  box-shadow: 10px 10px 10px #d1d9e6 , -10px -10px 10px #f9f9f9;
  border-radius: 12px;
  overflow: hidden;
}
.contain{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 600px;
  height: 100%;
  padding: 25px;
  background-color: #ecf0f3;
  transition: 1.25s;
}
.form{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.form-input{
  width: 300px;
  height: 40px;
  margin: 4px 0;
  padding-left: 25px;
  font-size: 13px;
  letter-spacing: 0.15px;
  border: none;
  outline: none;
  background-color: #ecf0f3;
  transition: 0.25s ease;
  border-radius: 8px;
  box-shadow: inset 2px 2px 4px #d1d9e6,inset -2px -2px 4px #f9f9f9;
}
.form-input:focus{
  box-shadow: inset 4px 4px 4px #d1d9e6,inset -4px -4px 4px #f9f9f9;
}
.form-link{
  color: #181818;
  font-size: 15px;
  margin-top: 25px;
  border-bottom: 1px solid #a0a5a8;
  line-height: 2;
}
.title{
  font-size: 34px;
  font-weight: 700;
  line-height: 3;
  color: #181818;
  letter-spacing: 10px;
}
.description{
  font-size: 14px;
  letter-spacing: 0.25px;
  text-align: center;
  line-height: 1.6;
}
.button {
  width: 180px;
  height: 50px;
  border-radius: 25px;
  margin-top: 50px;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1.15px;
  background-color: #4b70e2;
  color: #f9f9f9;
  box-shadow: 8px 8px 16px #d1d9e6,-8px -8px 4px #f9f9f9;
  border: none;
  outline: none;
}
.a-container{
  z-index: 100;
  left: calc(100% - 600px);
}
.b-container{
  left: calc(100% - 600px);
  z-index: 0;
}
.switch{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 400px;
  padding: 50px;
  z-index: 200;
  transition: 1.25s;
  background-color: #ecf0f3;
  overflow: hidden;
  box-shadow:4px 4px 10px #d1d9e6,-4px -4px 10px #f9f9f9;
}
.switch-circle{
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background-color: #ecf0f3;
  box-shadow: inset 8px 8px 12px #b8bec7,inset -8px -8px 12px #fff;
  bottom: -60%;
  left: -60%;
  transition: 1.25s;
}
.switch-circle-t{
  top: -30%;
  left: 60%;
  width: 300px;
  height: 300px;
}
.switch-container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  width: 400px;
  padding: 50px 55px;
  transition: 1.25s;
}
.switch-button{

  cursor: pointer;
}
.switch-button:hover,
.submit:hover{
  box-shadow: 6px 6px 10px #d1d9e6,-6px -6px 10px #f9f9f9;
  transform: scale(0.985);
  transition: 0.25s;
}
.switch-button:active,
.switch-button:focus{
  box-shadow: 2px 2px 6px #d1d9e6,-2px -2px 6px #f9f9f9;
  transform: scale(0.97);
  transition: 0.25s;
}
.is-txr{
  left: calc(100% - 400px);
  transition: 1.25s;
  transform-origin: right;
}
.is-txl{
  left:0 ;
  transition: 1.25s;
  transform-origin: left;
}
.is-z{
  z-index: 200;
  transition: 1.25s;
}
.is-hidden{
  visibility: hidden;
  opacity: 0;
  position: absolute;
  transition: 1.25s;
}
.is-gx{
  animation: is-gx 1.25s;
}
@keyframes is-gx {
  0%,
  10%,
  100%{
    width: 400px;
  }
  30%,
  50%{
    width: 500px;
  }
}
</style>