import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      component: ()=>import('@/pages/home'),
      children: [
        {
          path: '/home/index',
          component: ()=>import('@/pages/index')
        },
        {
          path: '/home/table',
          component: ()=>import('@/pages/table')
        },
        {
          path: '/home/button',
          component: ()=>import('@/pages/userButton')
        },
        {
          path: '/home/form',
          component: ()=>import('@/pages/userForm')
        },
        {
          path: '/home/setting',
          component: ()=>import('@/pages/setting')
        },
        {
          path: '/home',
          redirect: '/home/index'
        }
      ]
    },
    {
      path: '/login',
      component: ()=>import('@/pages/login')
    },
    {
      path: '/register',
      component: ()=>import('@/pages/register')
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})

router.beforeEach((to, from, next)=>{
  var user_id = localStorage.getItem('user_id');

  if(user_id){
    next();
  }else {
    if(to.path == '/login' || to.path == '/register'){
      next();
    }else {
      next('/login')
    }
  }

})

export default router;