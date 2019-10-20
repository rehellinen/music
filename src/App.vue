<template lang="pug">
  .wrapper
    top-bar
</template>

<script>
import TopBar from './components/top-bar/top-bar'

export default {
  components: {
    TopBar
  }
}
</script>

<style lang="sass" rel="stylesheet/sass">
  @import "~assets/base"
  .wrapper
    width: 100%
    min-height: 100vh
    background-color: $purple
  .de
</style>
