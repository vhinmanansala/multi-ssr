import { createApp } from './app'
import Vue from 'vue'

const { app, router } = createApp();

router.onReady(function() {
  app.$mount('#app');
});