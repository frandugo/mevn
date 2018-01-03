import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import CreateItem from './components/Item/CreateItem.vue';
import DisplayItem from './components/Item/DisplayItem.vue';
import EditItem from './components/Item/EditItem.vue';

import CreateArticle from './components/Article/CreateArticle.vue';
import DisplayArticle from './components/Article/DisplayArticle.vue';
import EditArticle from './components/Article/EditArticle.vue';

const routes = [
  {
    name: 'DisplayItem',
    path: '/items',
    component: DisplayItem
  },
  {
    name: 'CreateItem',
    path: '/items/create',
    component: CreateItem
  },
  {
    name: 'EditItem',
    path: '/items/edit/:id',
    component: EditItem
  },
  {
    name: 'DisplayArticle',
    path: '/articles',
    component: DisplayArticle
  },
  {
    name: 'CreateArticle',
    path: '/articles/create',
    component: CreateArticle
  },
  {
    name: 'EditArticle',
    path: '/articles/edit/:id',
    component: EditArticle
  },
];

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');