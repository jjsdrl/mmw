<template>
    <div class="Body-Wo">
      <div class="col-md-7">
					<h4>欢迎来到米奇妙妙屋！！！</h4>
          
          <!-- <router-link to="/Login" v-show="!isShow">请登录！！！</router-link> -->
          <div v-show="isShow">
          <router-link to="/BodyWo/Miss" class='wo'>
            <span class='btn btn-info'>查询密码</span>
            <h4 class='text-primary'>您也是鱼的记忆吗？</h4>
            <p class='text-muted'>如若忘记密码点击此处查找您的密码</p>
          </router-link>
          <router-view></router-view>
          <router-link to="/Shujia" class='wo'>
            <span class='btn btn-danger'>我的书架</span>
            <h4 class='text-primary'>不知来岁牡丹时，再相逢何处！！！</h4>
            <p class='text-muted'>点击查询书架内容</p>
          </router-link>
          <router-link to="/Login" class='wo'>
            <span class='btn btn-warning'>退出登录</span>
						<h4 class='text-primary'>白茶清欢无别事，我在等风也在等你！！</h4>
						<p class='text-muted'>点击此处退出登录</p>
          </router-link>
          
        </div>
				</div>
    </div>				
</template>
  
<script>
import store from '../store/index';
  export default {
    name: 'Body-Wo',
    data(){
      return{
        isShow:this.$store.state.isShow,
      }
    },
    store,
    
  }
</script>
<style>
.wo{
display:block;
width: 800px;
margin-top: 20px;
padding:0 20px 20px;
border:1px solid #ccc;
}
.wo span{
border-radius: 0;
margin-bottom: 20px;
}
</style>