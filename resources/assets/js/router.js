import Vue from 'vue'
import Router from 'vue-router'
import Page from './components/Page'

Vue.use(Router);

function PageComponent(name) {
 return {
   render: h => h('h3', `Hello from the ${name} page`)
 };
}

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Page, name: 'home' },
    { path: '/about', component: Page, name: 'about' },
    { path: '/contact', component: Page, name: 'contact' }
  ]
});