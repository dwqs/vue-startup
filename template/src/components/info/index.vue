<template lang="html">
    <div class="info">
        <h2>\{{info}}</h2>
        <h3>Project Name: {{name}}</h3>
        <h3>Project Version: {{version}}</h3>
        <h3>Author: {{author}}</h3>
        <h3>Desc: {{description}}</h3>
    </div>
</template>

<script>
export default {
    name: 'info',
    data () {
        return {
            info: 'project info:'
        };
    }
};
</script>

<style>
    h2{
        margin: 10px;
        font-size: 20px;
    }
</style>
