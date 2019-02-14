import Vue from 'vue'
import Router from 'vue-router'

// 引入axios
import axios from 'axios'
Vue.prototype.$axios = axios;
//全局修改axios默认配置
axios.defaults.baseURL = 'http://b.bozhouit.cn/public/index.php/index/';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';




import HelloWorld from '@/components/HelloWorld'
import home from "@/components/home";
import deal from "@/components/deal";
import mymessage from "@/components/mymessage";
import informat from "@/components/informat";
import customer from "@/components/customer";
import login from "@/components/login";
import forget from "@/components/forget";
import student from "@/components/student";
import haveto from "@/components/haveto";
import haobao from "@/components/haobao";


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'index', component: login},
    { path:'/home', name: 'home', component: home },
    { path:'/deal', name: 'deal', component: deal },
    { path:'/mymessage', name: 'mymessage', component: mymessage },
    { path:'/informat', name: 'informat', component: informat },
    { path:'/customer', name: 'customer', component: customer },
    { path:'/login', name: 'login', component: login },
    { path:'/forget', name: 'forget', component: forget },
    { path:'/student', name: 'student', component: student },
    { path:'/haveto', name: 'haveto', component: haveto },
    { path:'/haobao', name: 'haobao', component: haobao }
  ]
})
