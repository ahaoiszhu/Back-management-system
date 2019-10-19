import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Tixianjl from '@/components/Tixianjl'
import Home from '@/components/Home'
import Exhibition from '@/components/Exhibition'
Vue.use(Router)
//首次登录 输入账号密码，调接口判断，进入把kin存起来 再次登录判断kin是否有 然后是角色这如果是1就看1的页面如果是2就看2的页面
export default new Router({
  mode:"history",
  routes: [
    {
      path:"*",
      redirect:"/"
    },
    {
      path: '/',
      name:"login",
      redirect: "Index/home"
    },
    {
      path: '/login',
      name:"login",
      component: Login,
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children:[
        {
          path: 'Home',
          name: 'Home',
          component: Home,
        },
        {
          path: 'Exhibition',
          name: 'Exhibition',
          component: Exhibition,
      },
        {
          path: 'Tixianjl',
          name: 'Tixianjl',
          component: Tixianjl
        }
      ]
    },


  ]
})
