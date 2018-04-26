<template>
	<div style="position: relative;">
		<div v-for="ts in tuisongview" class="xiaoxi-tuisong-view">
			<div style="float:left;display: block;position:relative;top:10px;left:10px;">
				<img :src="ts.img" width="30" height="30" style="border:1px solid rgb(251,192,45);border-radius: 20px;"/>
			</div>
			<div style="float:left;display: block;position:relative;top:20px;left:30px;font-size:17px;font-weight: bold;color: rgba(44,62,80,0.8);">
				{{ts.title}}
			</div>
			<div  style="float:left;display: block;position:relative;top:30px;left:0px;font-size:13px;color: rgba(44,62,80,0.6);width:280px;height:70px;text-indent:20px;">
				{{ts.text}}
			</div>
			<i class="icon iconfont icon-x" style="float:left;display: block;position:relative;top:-20px;left:10px;font-size:12px;"></i>
			<div id="shijian" style="float:left;display: block;position:relative;top:40px;left:195px;font-size:12px;width:120px;height:15px;text-align: center;">
				时间 2018/3/16 15:24
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'tuisong',
  data () {
    return {
      tuisongview:[
      	{img:'../../static/images/xiaoxi/tuisong-one.jpg',title:'炳胜品味(珠江新城店)',text:' 推荐菜:脆皮叉烧拼秘制黑叉烧,招牌菠萝包,双拼鹅肠'},
      	{img:'../../static/images/xiaoxi/tuisong-two.jpg',title:'麓苑轩酒家',text:' 推荐菜:蒸汽火锅,白贝,排骨香米锅底'},
      	{img:'../../static/images/xiaoxi/tuisong-three.jpg',title:'點都德·德誉楼',text:' 推荐菜:招牌虾饺皇,金沙红米肠,豉汁蒸凤爪'}
      ]
    }
  }
}
</script>

<style>
	.xiaoxi-tuisong-view{
		border-bottom:2px solid rgba(0,0,0,0.2);
		width:90%;
		height:150px;
		margin-top:15px;
		margin-left:5%;
	}
</style>