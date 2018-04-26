<template>
  <div class="xiaoxi">
    <div class="xiaoxi-top">
    	<div class="xiaoxi-top-buttom">
    		<router-link style="text-align: center;color:rgb(255,215,5);text-decoration: none;" to="/xiaoxi">
	    		<i class="icon iconfont icon-tuisong" style="font-size:40px;position: relative;left:20px;top:5px;"></i>
	    		<div>推送</div>
    		</router-link>
    	</div>
    	<div class="xiaoxi-top-buttom">
    		<router-link style="text-align: center;color:rgb(255,215,5);text-decoration: none;" to="/xiaoxi/guanzhu">
	    		<i class="icon iconfont icon-chakantieziguanzhu" style="font-size:35px;position: relative;left:22.5px;top:7.5px;"></i>
	    		<div style="position: relative;left:2px;top:4px;">留意</div>
    		</router-link>
    	</div>
    </div>
    <transition name="fade" mode="out-in">
		  <router-view style="height:100%;"></router-view>
		</transition>
    
  </div>
  
</template>

<script>
export default {
  name: 'xiaoxi',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.xiaoxi{
	width:375px;
	height:100%;
}
.xiaoxi-top{
	width:100%;
	height:100px;
	border-bottom:3px solid rgba(255,215,5,0.3);
}

.xiaoxi-top-buttom{
	float: left;
	display: block;
	border:2px solid rgba(255,215,5,0.5);
	width:80px;
	height:80px;
	border-radius: 50px;
	margin-top:10px;
	margin-left:51px;
	margin-right:51px;
}

.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
