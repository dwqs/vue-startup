<template>
  <div class="test">test page</div>
</template>

<script>
import './index.less'
import test from '@src/lib/test'

export default {
  mounted () {
    test()
  }
}
</script>