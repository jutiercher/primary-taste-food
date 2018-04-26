<template>
	<div class="user">
		<div class="user-userview">
			<span class="user-userview-img">
				<img src="../../static/images/user/userimg.jpg" class="user-userview-img-logo" />
			</span>
			<span class="user-userview-username">
				<div class="user-userview-username-position">
					<div class="user-userview-username-name">
						<span>{{username}}</span>
					</div>
					<div class="user-userview-username-level">
						<i class="icon iconfont icon-daxiao"></i>
						<span>{{level}}</span>会员
					</div>
				</div>
			</span>
			<span class="user-userview-sezhi">
				<div>设置</div>
			</span>
		</div>
		<div class="user-usertext">
				<div @click="unbind">
					<span class="mg-left" >口味</span>
					<span class="user-usertext-position">{{userview.kouwei}}</span>
				</div>
				<div>
					<span class="mg-left">健康状态</span>
					<span class="user-usertext-position">{{userview.jiankan}}</span>
				</div>
				<div>
					<span class="mg-left">平台满意度</span>
					<span class="user-usertext-position">{{userview.manyi}}</span>
				</div>
				<div>
					<span class="mg-left">性别</span>
					<span class="user-usertext-position">{{userview.sex}}</span>
				</div>
				<div>
					<span class="mg-left">出生日期</span>
					<span class="user-usertext-position">{{userview.time}}</span>
				</div>
				<div>
					<span class="mg-left">手机号码</span>
					<span class="user-usertext-position">{{userview.shouji}}</span>
				</div>
				<div>
					<span class="mg-left">邮箱</span>
					<span class="user-usertext-position">{{userview.youxian}}</span>
				</div>
				<div>
					<span class="mg-left">联系地址</span>
					<span class="user-usertext-position">{{userview.dizhi}}</span>
				</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'user',
		data(){
			return {
				username:'Kio',
				level:'白银',
				userview:{
					kouwei:'偏甜',
					jiankan:'良好',
					manyi:'满意',
					sex:'帅哥',
					time:'1996/9/2',
					shouji:'13400000001',
					youxian:'13400000001@qq.com',
					dizhi:'广东省珠海市斗门白蕉镇'
				}
			}
		},
		methods:{
			unbind:function(){
				
			}
		}
	}
</script>

<style>
	.user{
		width:375px;
		height:100%;
		background-color:rgba(0,0,0,0.1);
	}
	.user-userview{
		width:100%;
		height:110px;
		background: url(../../static/images/user/UserBackground.jpg);
		background-size: 375px;
	}
	.user-userview-img{
		width:30%;
		height:100%;
		float: left;
		display: block;
	}
	.user-userview-img-logo{
		width:80%;
		height:80%;
		border:1px solid rgba(255,255,255,0.5);
		border-radius: 50%;
		margin: 10px;
		
	}
	.user-userview-username{
		width:48%;
		height:100%;
		float: left;
		display: block;
	}
	.user-userview-sezhi{
		width:20%;
		height:100%;
		float: right;
		display: block;
	}
	.user-userview-username-position{
		margin-top:20px;
		height: 80px;
		
	}
	.user-userview-username-name{
		color: rgba(0,0,0,0.8);
		font-size: 20px;
		font-weight: bold;
		text-shadow: 0 0 2px rgba(255,255,255,0.5);
	}
	.user-userview-username-level{
		width: 50%;
		height: 20px;
		color: rgba(255,255,255,0.8);
		font-size: 14px;
		background: #ffc107;
		text-align: center;
		border-radius: 20px;
		line-height: 20px;
		margin-top:10px;
	}
	.user-userview-sezhi div{
		width:35px;
		height:25px;
		text-align: center;
		line-height: 25px;
		border-radius: 20px;
		font-size: 15px;
		color:rgba(0,0,0,0.7);
		font-weight: bold;
		margin-top: 5px;
		margin-left: 30px;
		background-color: rgba(0,0,0,0.1);
	}
	.user-usertext{
		margin-top:20px;
		
	}
	.user-usertext div{
		display: block;
		width: 100%;
		height:50px;
		margin-bottom: 5px;
		background-color:rgb(255,255,255);
		font-size:14px;
		line-height: 50px;
		color: #000000;
	}
	.user-usertext-position{
		float: right;
		margin-right: 10px;
		font-size:13px;
		color: rgba(0,0,0,0.5);
	}
	.mg-left{
		margin-left:10px;
	}
</style>