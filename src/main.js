import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
// import { routes } from './routes.js'
import {routes} from './routes.js'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

console.log(routes);

Vue.use(VueMaterial);
Vue.use(VueRouter);

const router = new VueRouter({
 routes,
 mode:'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
