<template>
  <div class="info">
    <h2>\{{ info }}</h2>
    <h3>Project Name: vue-test</h3>
    <h3>Project Version: 0.0.1</h3>
    <h3>Author: dwqs</h3>
    <h3>Desc: A new Vue.js project</h3>
  </div>
</template>

<script>
import test from '@src/lib/test'
import './index.less'

export default {
  name: 'Info',
  data () {
    return {
      info: 'project info:'
    }
  },

  mounted () {
    test()
  }
}
</script>
