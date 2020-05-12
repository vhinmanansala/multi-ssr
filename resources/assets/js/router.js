import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router); 

function PageComponent(name) {
 return {
   render: h => h('h3', `Hello from the ${name} page`)
 };
}

export function createRouter () {
	return new Router({
	  mode: 'history',
	  routes: [
	    { path: '/', component: () => System.import('./components/Page.vue'), name: 'home' },
	    { path: '/about', component: () => System.import('./components/Page.vue'), name: 'about' },
	    { path: '/contact', component: () => System.import('./components/Page.vue'), name: 'contact' }
	  ]
	});
}