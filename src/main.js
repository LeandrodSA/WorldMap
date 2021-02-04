import Vue from 'vue'
import axios from './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import vuelidate from 'vuelidate'

Vue.config.productionTip = false

Vue.use(vuelidate)

new Vue({
  vuetify,
  router,
  axios,
  render: h => h(App)
}).$mount('#app')
