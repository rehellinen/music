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
  @font-face
    font-family: 'lineto'
    src: url(./assets/lineto-brown-regular.ttf) format("truetype")
  .wrapper
    width: 100%
    min-height: 100vh
    background-color: $blue
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
