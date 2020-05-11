import Vue from 'vue'
import App from './components/App.vue'
import router from './router'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'

let store = createStore();

// sync so that route state is available as part of the store
sync(store, router)

export default new Vue({
  router,
  store,
  render: h => h(App)
});