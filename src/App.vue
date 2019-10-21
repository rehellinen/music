<template lang="pug">
  .wrapper
    top-bar
    router-view
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
  @font-face
    font-family: 'lineto'
    src: url(./assets/lineto-brown-regular.ttf) format("truetype")
  body
    background-color: $purple
  .wrapper
    overflow: hidden
    width: 100%
    min-height: 100vh
    p
      color: $base-font-color
      font-family: 'lineto', sans-serif
    span
      color: $base-font-color
      font-family: 'lineto', sans-serif
    label
      color: $base-font-color
      font-family: 'lineto', sans-serif
  .de
</style>
