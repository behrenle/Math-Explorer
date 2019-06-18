import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import math from 'mathjs';

Vue.config.productionTip = false;
Vue.prototype.$eventBus = new Vue();

new Vue({
  router,
  math,
  render: h => h(App)
}).$mount("#app");
