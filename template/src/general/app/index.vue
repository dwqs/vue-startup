<template>
    <div id="app">
        <h3>\{{title}}</h3>
        <hello />
        <p class="doc">
            Documentation can be found at:
            <a href="https://github.com/dwqs/vue-startup" target="_blank">vue-startup</a>
        </p>
        <router-link to="/info">查看项目信息</router-link>
        <router-link to="/test">Test</router-link>
        <div class="time">
            <span> 当前时间: \{{new Date(curTime)}}</span>
            <span @click="changeTime"> 点击更新当前时间</span>
        </div>
    </div>
</template>

<script>
    import './index.less';
    import Hello from '@components/hello/';
    import test from '@src/lib/test';

    {{#if_eq state 'vuex'}}
    import { mapActions, mapGetters } from 'vuex';
    export default{
        data () {
            return {
                title: 'vuejs 2 + webpack 3'
            };
        },

        computed: {
            ...mapGetters({
                curTime: 'getCurTime'
            })
        },

        methods: {
            ...mapActions(['changeTime'])
        },

        components: {
            Hello
        },

        mounted () {
            test();
        }
    };
    {{/if_eq}}
    {{#if_eq state 'revue'}}
    import { mergeActions, mergeProps } from 'revuejs';

    export default{
        data () {
            return {
                title: 'vuejs 2 + webpack 3'
            };
        },

        computed: {
            ...mergeProps(['time.curTime'])
        },

        methods: {
            ...mergeActions(['time.changeTime'])
        },

        components: {
            Hello
        },

        mounted () {
            test();
        }
    };
    {{/if_eq}}
    {{#if_eq state 'mobx'}}
    import timeModel from '@src/mobx/time';

    export default{
        data () {
            return {
                title: 'vuejs 2 + webpack 3'
            };
        },

        fromMobx: {
            timeModel
        },

        components: {
            Hello
        },

        mounted () {
            test();
        }
    };
    {{/if_eq}}
</script>
