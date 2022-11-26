<template>
	<div>
		<div class="footer_wrapper">
		    <div>
		      <div class="top">
		          <div class="item">关于我们</div>
		          <div class="item">|</div>
		          <div class="item">用户隐私政策</div>
		          <div class="item">|</div>
		          <div class="item">用户服务协议</div>
		          <div class="item">|</div>
		          <div class="item">联系我们</div>
		      </div>
		    </div>
		    <div>
		      <div class="infoone">
		        <p>
		          Copyright © 2010-2022 南京爱一格网络科技有限公司 版权所有</p>
		      </div>
		      <div class="info"> 
		        <p> 经营性许可证编号： 苏B2-20180515   苏网文〔2021〕4647-106号</p>
		      </div>
		      <div class="info">
		        <p>苏ICP备20036081号</p>
		      </div>
		    </div>
		  </div>
	</div>
</template>

<script>
	import { defineComponent } from 'vue';
	export default defineComponent({
	  name: 'footer',
	});
</script>

<style>
	.footer_wrapper{
		width: 100%;
	    text-align: center;
	    background-color: #221f23;
	    
	   
	}
	 .top {
	  padding-top: 20px;
	  color: #b1b5c1;
	  font-size: 14px;
	  display: flex;
	  justify-content: center;
	}
	.item{
	 margin-left: 100px;
	}
	.info{
	  padding-top: 6px;
	  padding-bottom: 2px;
	  color: #b1b5c1;
	  font-size: 14px;
	  display: flex;
	  justify-content: center;
	}
	.infoone{
	  padding-top: 30px;
	  color: #b1b5c1;
	  font-size: 14px;
	  display: flex;
	  justify-content: center;
	  padding-bottom: 2px;
	}
</style>