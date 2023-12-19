<template>
    <div class="Page-Tail">
        <aside>
			<a href="https://www.qidian.com/" class="tj">
				<span class="btn btn-primary">推荐</span>
				<h4 class="text-primary">欢迎来到米奇妙妙屋</h4>
				<p class="text-muted">这里使用全世界最不全的搜索引擎，如未找到你需要的小说请点击此处重新查找</p>
			</a>		
		</aside>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Page-Tail',
    
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
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
.tj{
display:block;
margin-top: 20px;
padding:0 20px 20px;
border:1px solid #ccc;
}
.tj span{
border-radius: 0;
margin-bottom: 20px;
}
  </style>