import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import "iview/dist/styles/iview.css";
import './assets/less/index.less';
import './assets/animate.css';
import iView from "iview";
Vue.use(iView);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
