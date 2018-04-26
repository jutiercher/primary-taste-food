<template>
  <div id="app">
    <mt-header fixed title="WoGo猿喂菜" style="height: 60px;font-size: 22px;background-color:#ffd705;box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.3);"></mt-header>
    
	  <mt-tab-container fixed v-model="active" class="TopView">
	    <div style="margin:auto;">
	    	<transition name="fade" mode="out-in">
			   <router-view></router-view>
			   </transition>
			</div>
		</mt-tab-container>
		
		
		<mt-tabbar v-model="selected" fixed>
		  <mt-tab-item id="首页" @click.native.prevent="active = '1'">
		  	<router-link to="/" style="text-decoration: none;color:#2c3e50;">
			    <div style="margin-bottom: 5px;">
			    	<i class="icon iconfont icon-ziyuan" style="font-size: 20px;"/>
			    </div>
			        首页
		   </router-link>
		  </mt-tab-item>
		  <mt-tab-item id="消息" @click.native.prevent="active = '2'">
		  	<router-link to="/xiaoxi" style="text-decoration: none;color:#2c3e50;">
			    <div style="margin-bottom: 5px;">
			    	<i class="icon iconfont icon-buoumaotubiao14" style="font-size: 20px;"/>
			    </div>
			        消息
		   </router-link>
		  </mt-tab-item>
		  <mt-tab-item id="发现" @click.native.prevent="active = '3'">
		  	<router-link to="/faxian" style="text-decoration: none;color:#2c3e50;">
		    <div style="margin-bottom: 5px;">
		    	<i class="icon iconfont icon-weibiaoti2fuzhi15" style="font-size: 20px;"/>
		    </div>
		    	发现
		    </router-link>
		  </mt-tab-item>
		  <mt-tab-item id="我的" @click.native.prevent="active = '4'">
		  	<router-link to="/user" style="text-decoration: none;color:#2c3e50;">
			    <div style="margin-bottom: 5px;">
			    	<i class="icon iconfont icon-wode" style="font-size: 20px;"/>
			    </div>
		    	我的
		   </router-link>
		  </mt-tab-item>
		</mt-tabbar>

  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
  	return{
  		active:"1"
  	};
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

html,body{
	width:100%;
	margin:0px;
	padding:0px;
}

.TopView{
	width:100%;
	height:100%;
	margin-bottom: 60px;
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
</style
</style>