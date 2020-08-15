import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { ModalPlugin } from 'bootstrap-vue';



import MainConfig from './components/MainConfig.vue';
import ResultCustomer from './components/ResultCustomer.vue'
import ResultTab from './components/ResultTab.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(ModalPlugin);

const routes = [
  {path:'/mainConfig', component: MainConfig},
  {path:'/ResultCustomer',component: ResultCustomer},
  {path:'/Result',component: ResultTab},
  {path:'/', component: MainConfig},
]

const router = new VueRouter({
  routes,
  mode:'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
