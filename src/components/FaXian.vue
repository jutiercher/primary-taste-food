<template>
	<div class="faxian">
		<div class="faxian-button">
			<ul>
				<li class="faxian-button-view bianxian-right">
					<mt-button size="small" @click.native.prevent="active = 'tab-container1'" class="jg" @click.native="colorbian(num = 1)" id="btnone">最热</mt-button>
				</li>
				<li class="faxian-button-view bianxian-right bianxian-left">
					<mt-button size="small" @click.native.prevent="active = 'tab-container2'" class="jg" @click.native="colorbian(num = 2)" id="btntwo">最新</mt-button>
				</li>
				<li class="faxian-button-view bianxian-left">
					<mt-button size="small" @click.native.prevent="active = 'tab-container3'" class="jg" @click.native="colorbian(num = 3)" id="btnthree">关注</mt-button>
				</li>
			</ul>
		</div>
		<div>
			<div class="page-tab-container">  
		      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>  
		        <mt-tab-container-item id="tab-container1">  
		           <div class="faxian-zuire" v-for="zr in ZuiRe">
		           		<img :src="zr.logo" class="faxian-zuire-img"/>
		           		<div class="faxian-zuire-title">
		           			<span class="faxian-zuire-title-one">{{zr.title}}</span>
		           			<span class="faxian-zuire-title-two">{{zr.time}}</span>
		           		</div>
		           		<div class="faxian-zuire-icon">
		           			<p class="faxian-zuire-icon-title">满意度：</p>
		           			<ul>
		           				<li class="faxian-zuire-icon-img">
		           					<i class="icon iconfont icon-daxiao" v-for="n in zr.manyidu"></i>
		           				</li>
		           			</ul>
		           		</div>
		           		<div class="faxian-zuire-text">
		           			<p>{{zr.neirong}}</p>
		           		</div>
		           		<div class="faxian-zuire-pjIMG">
		           			<div class="faxian-zuire-pjIMG-title">{{zr.jiujia}}</div>
		           			<div class="faxian-zuire-pjIMG-img">
		           				<ul>
		           					<li>
		           						<img :src="img"  v-for="img in zr.pjimg" style="margin-right:5px;"/>
		           					</li>
		           				</ul>
		           			</div>
		           		</div>
		           		<div class="faxian-zuire-bottom">消费评价</div>
		           </div>
		        </mt-tab-container-item>  
		        <mt-tab-container-item id="tab-container2">  
		           <div class="faxian-zuire" v-for="zx in ZuiXin">
		           		<img :src="zx.logo" class="faxian-zuire-img"/>
		           		<div class="faxian-zuire-title">
		           			<span class="faxian-zuire-title-one">{{zx.title}}</span>
		           			<span class="faxian-zuire-title-two">{{zx.time}}</span>
		           		</div>
		           		<div class="faxian-zuire-icon">
		           			<p class="faxian-zuire-icon-title">满意度：</p>
		           			<ul>
		           				<li class="faxian-zuire-icon-img">
		           					<i class="icon iconfont icon-daxiao" v-for="n in zx.manyidu"></i>
		           				</li>
		           			</ul>
		           		</div>
		           		<div class="faxian-zuire-text">
		           			<p>{{zx.neirong}}</p>
		           		</div>
		           		<div class="faxian-zuire-pjIMG">
		           			<div class="faxian-zuire-pjIMG-title">{{zx.jiujia}}</div>
		           			<div class="faxian-zuire-pjIMG-img">
		           				<ul>
		           					<li>
		           						<img :src="imgx"  v-for="imgx in zx.pjimg" style="margin-right:5px;"/>
		           					</li>
		           				</ul>
		           			</div>
		           		</div>
		           		<div class="faxian-zuire-bottom">消费评价</div>
		           </div>
		        </mt-tab-container-item>  
		        <mt-tab-container-item id="tab-container3">  
		           <div class="faxian-guanzhu">
		           	<div class="faxian-guanzhu-view" v-for="gz in guanzhu">
		           		<div class="faxian-guanzhu-view-img">
		           			<img :src="gz.img" width="120" height="90" />
		           		</div>
		           		<div class="faxian-guanzhu-view-text">
		           			<div class="faxian-guanzhu-view-text-one">
		           				<span style="font-weight: bold;font-size: 15px;text-align: left;float: left;">{{gz.name}}</span>
		           				<span style="font-size: 12px;float: right;">{{gz.juli}}</span>
		           			</div>
		           			<div class="faxian-guanzhu-view-text-two">
		           				<span>
		           					<i class="icon iconfont icon-daxiao" style="color: #f57f17;font-size:13px;" v-for="n in gz.haoping"/>
		           				</span>
		           				<span style="color: rgba(0,0,0,0.5);font-size:13px;margin-left:2px">
		           					￥{{gz.jiage}}/人
		           				</span>
		           				<span style="color: rgba(0,0,0,0.5);font-size:13px;margin-left:2px">
		           					{{gz.dizhi}}
		           				</span>
		           			</div>
		           			<div>
			           			<div class="faxian-guanzhu-view-text-three" v-for="hd in gz.huodong">
			           				<span style="color:#FFF;background-color:#000000;font-size:10px;">{{hd.icon}}</span>
			           				<span style="color: rgba(0,0,0,0.6);font-size: 13px;font-weight: bolder;">{{hd.wenben}}</span>
			           			</div>
		           			</div>
		           			<div class="faxian-guanzhu-view-text-four">
		           				<span class="faxian-guanzhu-view-text-four-icon" v-for="dp in gz.dianping">{{dp}}</span>
		           			</div>
		           		</div>
		           	</div>
		           </div>
		        </mt-tab-container-item>  
		      </mt-tab-container>  
    		</div>  
		</div>
	</div>
</template>

<script>
	export default {
		name:'faxian',
		data () {
		    return {
		      active: 'tab-container1' ,
		      ZuiRe:[
		      	{
		      		logo:'../../static/images/faxian/zr/logo1.jpg',
		      		title:'古典结局',
		      		time:'2018/3/17,16:37',
		      		manyidu:5,
		      		neirong:'还没来到广州，就一直被人安利的一家店。心心念念的要来拔草，结果到省博物馆参观出来，竟然撞到这家店，据说还是柄胜的旗舰店。',
		      		jiujia:'炳胜品味(珠江新城店) ',
		      		pjimg:[
		      			'../../static/images/faxian/zr/zr-pjimg1.jpg',
		      			'../../static/images/faxian/zr/zr-pjimg2.jpg',
				      	'../../static/images/faxian/zr/zr-pjimg3.jpg',
				      	'../../static/images/faxian/zr/zr-pjimg4.jpg',
				      	'../../static/images/faxian/zr/zr-pjimg5.jpg',
				      	'../../static/images/faxian/zr/zr-pjimg6.jpg'
		      		]
		      	},
		      	{
		      		logo:'../../static/images/faxian/zr/logo2.jpg',
		      		title:'楠哥上海',
		      		time:'2018/3/15,15:29',
		      		manyidu:4,
		      		neirong:'明天就要离开了，还是觉得再要去吃点什么，到了都快20:00了，还在排队。',
		      		jiujia:'麓苑轩酒家',
		      		pjimg:[
			      		'../../static/images/faxian/zr/zr-pjimg7.jpg',
					    '../../static/images/faxian/zr/zr-pjimg8.jpg',
					    '../../static/images/faxian/zr/zr-pjimg9.jpg'
		      		]
		      	},
		      	{
		      		logo:'../../static/images/faxian/zr/logo3.jpg',
		      		title:'杲杲哲学',
		      		time:'2018/3/12,19:58',
		      		manyidu:3,
		      		neirong:'下午四点半才吃上饭，这还是午饭，而且五点晚餐就开餐了。',
		      		jiujia:'點都德·德誉楼',
		      		pjimg:[
			      		'../../static/images/faxian/zr/zr-pjimg10.jpg',
				      	'../../static/images/faxian/zr/zr-pjimg11.jpg'
		      		]
		      	}
		      ],
		      ZuiXin:[
		      	{
		      		logo:'../../static/images/faxian/zx/logo4.jpg',
		      		title:'不忘初心',
		      		time:'2018/3/17,12:37',
		      		manyidu:5,
		      		neirong:'一进门就是大饭店的感觉。不是那种小餐厅的模式。装修很普通。里面没有小桌，最小的都可以坐4位的那种！而且间距很宽，一点都不吵。',
		      		jiujia:'公馆·炳胜集团  ',
		      		pjimg:[
		      			'../../static/images/faxian/zx/zx-pjimg1.jpg',
		      			'../../static/images/faxian/zx/zx-pjimg2.jpg',
		      			'../../static/images/faxian/zx/zx-pjimg3.jpg'
		      		]
		      	},
		      	{
		      		logo:'../../static/images/faxian/zx/logo5.jpg',
		      		title:'biubiubiu~_999',
		      		time:'2018/3/17,21:29',
		      		manyidu:4,
		      		neirong:'提前一个月定了包间，环境装修很不错！包间带厕所喜欢～因为是包间很安静，不过离得太远，很难叫服务员',
		      		jiujia:'阿一鲍鱼(天河北旗舰店)',
		      		pjimg:[
			      		'../../static/images/faxian/zx/zx-pjimg4.jpg',
			      		'../../static/images/faxian/zx/zx-pjimg5.jpg',
			      		'../../static/images/faxian/zx/zx-pjimg6.jpg',
			      		'../../static/images/faxian/zx/zx-pjimg7.jpg',
		      		]
		      	},
		      	{
		      		logo:'../../static/images/faxian/zx/logo6.jpg',
		      		title:'明明如月0918',
		      		time:'2018/3/17,9:58',
		      		manyidu:3,
		      		neirong:'在广州吃的最后一餐，来到被朋友安利了好久的一家店，正好又在广东省博物馆旁边，看完了就可以就餐，非常方便。',
		      		jiujia:'白天鹅宾馆·玉堂春暖餐厅 ',
		      		pjimg:[
			      		'../../static/images/faxian/zx/zx-pjimg8.jpg'
		      		]
		      	}
		      ],
		      guanzhu:[
		      	{
		      		img:'../../static/images/faxian/gz/gu-img1.jpg',
		      		name:'韩国烧烤面天下',
		      		juli:'25.0km',
		      		haoping:5,
		      		jiage:'50',
		      		dizhi:'前山',
		      		huodong:[
		      			{
		      				icon:'团',
		      				wenben:'66元购买韩国烧烤双人套餐'
		      			},
		      			{
		      				icon:'付',
		      				wenben:'9.8折,周一至周三 10:00-13:00可用'
		      			}
		      		],
		      		dianping:[
		      			'性价比高',
		      			'分量足',
		      			'服务态度好',
		      			'味道不错'
		      		]
		      	},
		      	{
		      		img:'../../static/images/faxian/gz/gu-img2.jpg',
		      		name:'宋·川菜',
		      		juli:'12.1km',
		      		haoping:4,
		      		jiage:'68',
		      		dizhi:'花城汇',
		      		huodong:[
		      			
		      			{
		      				icon:'付',
		      				wenben:'8.9折,周一 10:00-22:00可用'
		      			}
		      		],
		      		dianping:[
		      			'服务态度好',
		      			'味道不错'
		      		]
		      	},
		      	{
		      		img:'../../static/images/faxian/gz/gu-img3.jpg',
		      		name:'山海楼',
		      		juli:'6.9km',
		      		haoping:5,
		      		jiage:'118',
		      		dizhi:'南村',
		      		huodong:[
		      			{
		      				icon:'团',
		      				wenben:'228元3人份菜品'
		      			}
		      		],
		      		dianping:[
		      			'性价比高',
		      			'分量足'
		      		]
		      	},
		      	{
		      		img:'../../static/images/faxian/gz/gu-img4.jpg',
		      		name:'榕意',
		      		juli:'14.3km',
		      		haoping:5,
		      		jiage:'78',
		      		dizhi:'天河',
		      		huodong:[
		      			{
		      				icon:'团',
		      				wenben:'168元购买三份金丝虾和一份水煮鱼'
		      			},
		      			{
		      				icon:'付',
		      				wenben:'9.8折,周二至周四 10:00-13:00可用'
		      			}
		      		],
		      		dianping:[
		      			'性价比高',
		      			'分量足',
		      			'服务态度好'
		      		]
		      	},
		      	{
		      		img:'../../static/images/faxian/gz/gu-img5.jpg',
		      		name:'晚1点海鲜',
		      		juli:'32.0km',
		      		haoping:4,
		      		jiage:'148',
		      		dizhi:'天河体育中心旁',
		      		huodong:[
		      			{
		      				icon:'团',
		      				wenben:'268元购买海鲜双人套餐'
		      			},
		      			{
		      				icon:'付',
		      				wenben:'满688送海鲜什锦盘'
		      			}
		      		],
		      		dianping:[
		      			'服务态度好',
		      			'味道不错'
		      		]
		      	},
		      	{
		      		img:'../../static/images/faxian/gz/gu-img6.jpg',
		      		name:'川叙',
		      		juli:'22.0km',
		      		haoping:5,
		      		jiage:'70',
		      		dizhi:'林和中路63号',
		      		huodong:[
		      			{
		      				icon:'团',
		      				wenben:'仅售90元,100元午市代金券1张'
		      			}
		      		],
		      		dianping:[
		      			'性价比高',
		      			'分量足',
		      			'服务态度好'
		      		]
		      	},
		      ]
		    }
		},
		methods:{
			colorbian:function(num){
				if(num == 1){
					document.getElementById("btnone").style.color = "#9e9e9e";
					document.getElementById("btntwo").style.color = "#2c3e50";
					document.getElementById("btnthree").style.color = "#2c3e50";
					document.getElementById("btnone").style.textDecoration = "underline";
					document.getElementById("btntwo").style.textDecoration = "none";
					document.getElementById("btnthree").style.textDecoration = "none";
				}else if(num == 2){
					document.getElementById("btnone").style.color = "#2c3e50";
					document.getElementById("btntwo").style.color = "#9e9e9e";
					document.getElementById("btnthree").style.color = "#2c3e50";
					document.getElementById("btnone").style.textDecoration = "none";
					document.getElementById("btntwo").style.textDecoration = "underline";
					document.getElementById("btnthree").style.textDecoration = "none";
				}else if(num == 3){
					document.getElementById("btnone").style.color = "#2c3e50";
					document.getElementById("btntwo").style.color = "#2c3e50";
					document.getElementById("btnthree").style.color = "#9e9e9e";
					document.getElementById("btnone").style.textDecoration = "none";
					document.getElementById("btntwo").style.textDecoration = "none";
					document.getElementById("btnthree").style.textDecoration = "underline";
				}

			}
		}
	}
</script>

<style>
	.faxian{
		width:375px;
		height:100%;
	}
	.faxian-button{
		width:100%;
		height:40px;
		border: 1px solid #FFF;
		background-color:#fffde7;
	}
	.faxian-button-view{
		width:31%;
		height:25px;
		line-height: 25px;
		text-align: center;
		font-size: 14px;
		float:left;
		display: block;
		position: relative;
		top:-10px;
		left:-10px;
		text-shadow: 1px 2px 1px rgba(0,0,0,0.3);
	}
	.bianxian-left{
		border-left:1px solid rgba(0,0,0,0.3);
	}
	.bianxian-right{
		border-right:1px solid rgba(0,0,0,0.3);
	}	
	.jg{
		text-decoration: none;
		color:#2c3e50;
		background-color: #fffde7;
	}
	.faxian-zuire{
		width:100%;
		border-bottom:1px solid rgba(0,0,0,0.2);
		margin-top:10px;
		background: #FFF;;
	}
	.faxian-zuire-img{
		border:1px solid rgba(0,0,0,0.1);
		width:40px;
		height:40px;
		border-radius: 40px;
		position: relative;
		top:5px;
		left:5px;
	}
	.faxian-zuire-title{
		width:100px;
		height:30px;
		position: relative;
		left:55px;
		top:-40px;
		
	}
	.faxian-zuire-title-one{
		color:rgba(249,168,37,0.7);
		font-size:14px;
		font-weight: bold;
		float:left;
	}
	.faxian-zuire-title-two{
		color:rgba(0,0,0,0.5);
		font-size:10px;
		float:left;
	}
	.faxian-zuire-icon{
		width:150px;
		height:20px;
		position: relative;
		left:215px;
		top:-72px;
		font-size: 12px;
	}
	.faxian-zuire-icon-title{
		position: relative;
		left:5px;
		top:-10px;
	}
	.faxian-zuire-icon-img{
		display: block;
		position: relative;
		left:15px;
		top:-40px;
		color:rgb(249,168,37);
	}
	.faxian-zuire-text{
		width:310px;
		font-size:11px;
		text-indent: 25px;
		position: relative;
		left:55px;
		top:-70px;
	}
	.faxian-zuire-pjIMG{
		width:310px;
		position: relative;
		left:55px;
		top:-70px;
	}
	.faxian-zuire-pjIMG-title{
		font-size:12px;
		color:rgba(0,0,0,0.5);
	}
	.faxian-zuire-pjIMG-img ul{
		position: relative;
		left:-40px;
		top:-10px;
	}
	.faxian-zuire-pjIMG-img li{
		display: block;
	}
	.faxian-zuire-pjIMG-img li img{
		width:70px;
		height:70px;
	}
	.faxian-zuire-bottom{
		font-size:13px;
		color:rgba(0,0,0,0.5);
		position: relative;
		top:-30px;
		text-align: right;
	}
	.faxian-guanzhu{
		width:375px;
	}
	.faxian-guanzhu-view{
		width:100%;
		height:140px;
		border-bottom:1px solid rgba(0,0,0,0.1);
	}
	.faxian-guanzhu-view-img{
		width:120px;
		height:90px;
		position: relative;
		top:10px;
		left:10px;
	}
	.faxian-guanzhu-view-text{
		width:230px;
		height:120px;
		position: relative;
		left:140px;
		top:-80px;
	}
	.faxian-guanzhu-view-text-one{
		width:100%;
		height:20px;
		line-height:20px;
	}
	.faxian-guanzhu-view-text-two{
		width:100%;
		height:20px;
		line-height:20px;
	}
	.faxian-guanzhu-view-text-three{
		width:100%;
		height:20px;
		line-height:20px;
	}
	.faxian-guanzhu-view-text-four{
		width:100%;
		height:30px;
		line-height:30px;
	}
	.faxian-guanzhu-view-text-four-icon{
		background-color:#fbe9e7;
		color:#827717;
		font-size:12px;
		margin-right:2px;
	}
</style>