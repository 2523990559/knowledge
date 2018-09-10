import Vue from 'vue';
import Router from 'vue-router';
import FirstPage from '@/page/FirstPage/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: FirstPage
    }
  ]
});
