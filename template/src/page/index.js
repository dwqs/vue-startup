import './reset.css';
import 'babel-polyfill';

import Vue from 'vue';
import VueRouter from 'vue-router';
{{#if_eq state 'vuex'}}
import { sync } from 'vuex-router-sync';
{{/if_eq}}
{{#if_eq state 'mobx'}}
import VueMobx from 'vue-mobx';
import { toJS, useStrict, isObservable } from 'mobx';

Vue.use(VueMobx, {
    toJS,
    isObservable
});
useStrict(true);
{{/if_eq}}

const env = process.env.NODE_ENV || 'development';

if(env !== 'development'){
    Vue.config.devtools = false;
    Vue.config.productionTip = false;
}

{{#if_eq state 'vuex'}}
import store from '../vuex/index';
{{/if_eq}}

Vue.use(VueRouter);

// dynamic import for on-demand loaded chunk
const Info = () => import(/* webpackChunkName: "info" */ '@components/info/');
const App = () => import(/* webpackChunkName: "main" */ '../general/app/index');

const Outer = { template: '<router-view></router-view>' };

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Outer,
            children: [
                // 嵌套路由 https://github.com/vuejs/vue-router/blob/next-doc/docs/en/advanced-routing/nested.md
                { path: '', component: App },
                { path: 'info', component: Info }
            ]
        }
    ]
});

{{#if_eq state 'vuex'}}
sync(store, router);
{{/if_eq}}

const app = new Vue({
    router,
    {{#if_eq state 'vuex'}}
    store,
    {{/if_eq}}
    ...Outer
});

app.$mount('#app');
