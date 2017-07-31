<template>
    <div id="app">
        <h3>\{{title}}</h3>
        <hello />
        <p class="doc">
            Documentation can be found at:
            <a href="https://github.com/dwqs/vue-startup" target="_blank">vue-startup</a>
        </p>
        <router-link to="/info">查看项目信息</router-link>
        <div class="time">
            <span> 当前时间: \{{new Date(curTime)}}</span>
            <span @click="changeTime"> 点击更新当前时间</span>
        </div>
    </div>
</template>

<script>
    import './index.less';
    import Hello from '@components/hello/';

    {{#if_eq state 'vuex'}}
    import {mapActions, mapGetters} from 'vuex';
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
        }
    };
    {{/if_eq}}
    {{#if_eq state 'mobx'}}
    import {connect} from 'vue-mobx';
    import timeModel from '@src/mobx/time';

    const indexComponent = {
        data () {
            return {
                title: 'vuejs 2 + webpack 3'
            };
        },
        components: {
            Hello
        }
    }
    export default connect({timeModel})(indexComponent)
    {{/if_eq}}
</script>

<style></style>
