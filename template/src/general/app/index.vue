<template>
    <div id="app">
        <h3>\{{title}}</h3>
        <hello />
        <p class="doc">
            Documentation can be found at:
            <a href="https://github.com/dwqs/vue-startup" target="_blank">vue-startup</a>
        </p>
        <router-link to="{{publicPath}}info">查看项目信息</router-link>
    </div>
</template>

<script>
    import './index.css';
    import Hello from '@components/hello/';

    export default{
        data () {
            return {
                title: 'vuejs 2 + webpack 2'
            };
        },

        components: {
            Hello
        }
    };
</script>

<style></style>
