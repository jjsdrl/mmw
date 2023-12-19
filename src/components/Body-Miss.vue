<template>
    <div class="Body-Miss">
	<div class="content">
	<h2>找回密码</h2>
    <form action="http://localhost:3000/getUserwd?uname=" method="get">
	<input type="text" name="uname" placeholder="用户名">
	<input type="submit" value="查找密码">
    </form>
    </div>
    </div>				
</template>
  
<script>
    export default {
        name: 'Body-Miss',
    }
</script>
<style>
	
</style>