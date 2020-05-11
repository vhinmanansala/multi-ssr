import app from './app'
import { createStore } from './store'

let store = createStore();

if (window.__INITIAL_STATE__) {
  // We initialize the store state with the data injected from the server
  store.replaceState(window.__INITIAL_STATE__)
}

app.$mount('#app', true);