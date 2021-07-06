import Vue from 'vue'
import App from './App.vue'
import Tui from './components'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/homoe',
      component: () => import('@/App')
    }
  ]
})


Vue.use(Tui)
Vue.config.productionTip = false
new Vue({
  routes,
  render: function (h) { return h(App) },
}).$mount('#app')
