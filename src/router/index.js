import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: ()=>import('@/pages/home')
    },
    {
      path: '/login',
      component: ()=>import('@/pages/login')
    },
    {
      path: '/register',
      component: ()=>import('@/pages/register')
    },
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