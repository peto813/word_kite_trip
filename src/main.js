import Vue from 'vue'
import App from './App.vue'

import './ml';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';
import 'animate.css/animate.css'

Vue.use(BootstrapVue);
Vue.use(VueRouter)
Vue.config.productionTip = false
//Vue.component('nav-bar', navBar);
import VueYouTubeEmbed from 'vue-youtube-embed'
// if you don't want install the component globally
Vue.use(VueYouTubeEmbed, { global: true })

//pages
import landingPage from '@/pages/landing_page/landing_page.vue';
import contactPage from '@/pages/contact/contact.vue';
import reservations from '@/pages/reservations/reservations.vue';
import faq from '@/pages/faq/faq.vue';
var SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing);
import Icon from 'vue-awesome/components/Icon';

Vue.component('v-icon', Icon)
const routes = [
  { path: '/', component: landingPage },
  { path: '/contact', component: contactPage },
  { path: '/reservations', component: reservations },
  { path: '/faq', component: faq },
  // { path: '/invoices', component: invoices },
  // { path: '/login', component: login },
  // { path: '/payments', component: payments },
  // { path: '/profile', component: profile },
  // { path: '/properties', component: properties },
  // //{ path: '/register/:email', component: register },
  // {path: "/register", name:"register", component: register,  props: true},
  // { path: '/forgot', component: forgot },
  { path: '*', redirect: '/' }
]


const router = new VueRouter({
  routes:routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
  
})
new Vue({
	router, 
	render: h => h(App),

}).$mount('#app')

