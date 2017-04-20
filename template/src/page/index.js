import 'babel-polyfill';

import Vue from 'vue';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';

import store from '../store/index';

Vue.use(VueRouter);

// on-demand loaded chunk
const Info = r => require.ensure([], () => r(require('@components/info/')), 'info');
const App = r => require.ensure([], () => r(require('../general/app/index')), 'app');

const Outer = { template: '<router-view></router-view>' };

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/social',
            component: Outer,
            children: [
                // 嵌套路由 https://github.com/vuejs/vue-router/blob/next-doc/docs/en/advanced-routing/nested.md
                { path: '', component: App },
                { path: 'info', component: Info }
            ]
        }
    ]
});

sync(store, router);

const app = new Vue({
    router,
    store,
    ...Outer
});

app.$mount('#social');
