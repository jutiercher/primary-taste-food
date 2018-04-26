<template>
  <div class="shouye">
    <mt-swipe :show-indicators="false" class="swipe">
		  <mt-swipe-item v-for="item in images">
		  	<img v-bind:src="item.img" style="width:100%;height:100%;"/>
		  </mt-swipe-item>
		</mt-swipe>
		
		<div class="shouye_daohang">
			<ul>
				<li v-for="dhicon in daohangicon" class="shouye_daohang_text">
					<router-link to="/h2" style="text-decoration: none;color:#2c3e50">
						<img :src="dhicon.ic" width="30" height="30"></img>
						<div v-text="dhicon.view"></div>
					</router-link>
				</li>
			</ul>
		</div>
		
		<div class="shouye_huati">
			
			<div style="width: 100%;height:100px;float:left;box-shadow: 0px 2px 5px rgba(0,0,0,0.5);" v-for="meishi in meishichengshi">
				<router-link to="/xiaoxi" style="text-decoration: none;color:#2c3e50">
					<div>
						<img :src="meishi.img" width="90" height="80" style="float:left;border: 2px solid rgba(249,168,37,0.8);margin:10px;"/>
						<div style="float:left;font-size:18px;margin:10px;" v-text="meishi.title"></div>
						<div style="float:left;font-size:13px;width:160px;height:40px;margin-left:10px;color:rgba(44,62,80,0.5)">
							<span v-text="meishi.text"></span>
						</div>
						<i class="icon iconfont icon-57" style="float:left;font-size:22px;margin-top:-5px;margin-left:50px;"></i>
					</div>
				</router-link>
			</div>
			
		</div>
  </div>
</template>

<script>
export default {
  name: 'shouye',
  data(){
  	return{
  		images:[
  			{img:'../../static/images/hd.jpg'},
  			{img:'../../static/images/img2.jpg'},
  			{img:'../../static/images/img3.jpg'},
  			{img:'../../static/images/img4.jpg'},
  			{img:'../../static/images/img5.jpg'},
  			{img:'../../static/images/img6.jpg'},
  			{img:'../../static/images/img7.jpg'},
  			{img:'../../static/images/img8.jpg'}
  		],
  		daohangicon:[
  		{ic:'../static/images/ic1.png',view:'川菜'},
  		{ic:'../static/images/ic2.png',view:'鲁菜'},
  		{ic:'../static/images/ic3.png',view:'粤菜'},
  		{ic:'../static/images/ic4.png',view:'苏菜'},
  		{ic:'../static/images/ic5.png',view:'浙菜'},
  		{ic:'../static/images/ic6.png',view:'闽菜'},
  		{ic:'../static/images/ic7.png',view:'湘菜'},
  		{ic:'../static/images/ic8.png',view:'徽菜'}
  		],
  		meishichengshi:[
  			{img:'../static/images/dushi/82da3f2df3524f5489a86492737ab8b3_th.jpg',title:'风淡露浓的杭州',text:'江南美景诗情画意，江南美食其味无穷。'},
  			{img:'../static/images/dushi/29a1f4312a064201ac1e9093f05eca2a_th.jpg',title:'胡吃海喝的广州',text:'广州小吃属岭南风味，多来源于民间，大都被流传下来而成为传统名食。'},
  			{img:'../static/images/dushi/1b6dc916f86b4df286016d7a5fcb9636_th.jpg',title:'行云流水的洛阳',text:'一天三顿饭,顿顿不离汤,咸汤甜汤早晚搭配。'},
  			{img:'../static/images/dushi/a26e13b6800a414683b6e804addeb4fe_th.jpg',title:'肉食天堂乌鲁木齐',text:'在历史上，居住在新疆的民族很少吃蔬菜，因而菜肴也较少。'},
  			{img:'../static/images/dushi/bc3e77fa8ee1480988a7ed446ea7f599_th.jpg',title:'魂牵梦绕的西安',text:'作为一座千年古城，没准儿你吃的不起眼小店，其实是传承百年老店。'},
  			{img:'../static/images/dushi/7e9dc3dc45e3409ea065e20311b1ec20_th.jpg',title:'无辣不欢的长沙',text:'说到长沙，可能我们并不陌生！橘子洲头，长沙臭豆腐等等等等！'},
  			{img:'../static/images/dushi/0a2c1fed7bc84e5dbcd3f35a46c1b76e_th.jpg',title:'小吃天堂的成都',text:'成都街头至少有上百种特色小吃，比如酸辣粉，还有“龙抄手”'},
  			{img:'../static/images/dushi/b83959d63aea41d294976e70005b6c35_th.jpg',title:'麻辣酸爽的重庆',text:'小面、酸辣粉、火锅、毛血旺、梁山鸡……'}
  		]
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.swipe{
		width:375px;
		height:200px;
	}
	
	.shouye_daohang{
		width:375px;
		height:200px;
		padding: 0px;
	}
	.shouye_daohang_text{
		float:left;
		display: block;
		text-decoration: none;
		width:80px;
		height:70px;
		margin-left:-20px;
		margin-right: 23px;
		margin-top:5px;
		padding-top:10px;
		box-shadow: 1px 3px 3px 1px rgba(0,0,0,0.3);
		font-size: 15px;
		text-align: center;
		line-height: 20px;
	}
	.shouye_huati{
		width:375px;
		padding: 0px;
		height:100%;
	}
</style>
