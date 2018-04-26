import Vue from 'vue'
import Router from 'vue-router'
import ShouYe from '@/components/ShouYe'
import XiaoXi from '@/components/XiaoXi'
import TuiSong from '@/components/xiaoxi/tuisong'
import GuanZhu from '@/components/xiaoxi/guanzhu'
import FaXian from '@/components/FaXian'
import Zuire from '@/components/faxian/zuire'
import Zuixin from '@/components/faxian/zuixin'
import Guanzhu from '@/components/faxian/guanzhu'
import User from '@/components/User'
import { Header } from 'mint-ui';
import { Tabbar, TabItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
import { Cell } from 'mint-ui';
import { MessageBox } from 'mint-ui';


Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Cell.name, Cell);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShouYe',
      component: ShouYe
    },{
    	path: '/xiaoxi',
      name: 'XiaoXi',
      component:XiaoXi,
      children:[
      	{
      		path:"/",component:TuiSong
      	},
      	{
      		path:"guanzhu",component:GuanZhu
      	},
      ]
    },{
    	path: '/faxian',
      name: 'FaXian',
      component: FaXian
    },{
    	path: '/user',
      name: 'User',
      component: User
    }
  ]
})
