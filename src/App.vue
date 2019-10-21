<template lang="pug">
  .wrapper
    top-bar(@blur="setBlur")
    router-view(:blur="blur")
</template>

<script>
import TopBar from './components/top-bar/top-bar'
import Banner from './components/banner/banner'

export default {
  components: {
    Banner,
    TopBar
  },
  data () {
    return {
      blur: false
    }
  },
  methods: {
    setBlur (e) {
      this.blur = e
    }
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
