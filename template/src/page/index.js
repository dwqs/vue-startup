import './reset.css';
import 'babel-polyfill';

import Vue from 'vue';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';

const env = process.env.NODE_ENV || 'development';

if(env !== 'development'){
    Vue.config.devtools = false;
    Vue.config.productionTip = false;
}

import store from '../store/index';

Vue.use(VueRouter);

// dynamic import for on-demand loaded chunk
const Info = () => import(/* webpackChunkName: "info" */ '@components/info/');
const App = () => import(/* webpackChunkName: "app1" */ '../general/app/index');

const Outer = { template: '<router-view></router-view>' };

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '{{publicPath}}',
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

app.$mount('#app');
