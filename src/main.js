import Vue from 'vue'
import App from './App.vue'
import Tui from './components'

Vue.use(Tui)
Vue.config.productionTip = false
new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
