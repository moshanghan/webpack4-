import Vue from 'vue';
import App from './app.vue';
import '@babel/polyfill'
import './component'
// import store from './store/'
import router from './routes'
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')