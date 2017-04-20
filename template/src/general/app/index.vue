<template>
    <div id="app">
        <h3>{{title}}</h3>
        <hello />
        <router-link to="/social/info">查看项目信息</router-link>
    </div>
</template>

<script>
    import './index.css';
    import Hello from '@components/hello/';

    export default{
        data () {
            return {
                title: 'vue-webpack'
            };
        },

        components: {
            Hello
        }
    };
</script>

<style></style>
