import Vue from 'vue'
import App from './App.vue'
import Tui from './T-ui'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('@/index.vue')
    }
  ],
  mode: 'history'
})


Vue.use(Tui)
Vue.config.productionTip = false
new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
