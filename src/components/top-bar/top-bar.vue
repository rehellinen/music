<template lang="pug">
  .top-bar
    .menu
      img(src='../../assets/images/logo.png')
      .menu-items
        p Add
        p Hot
        p(@click="showType") Type
    .avatar
      img(src='../../assets/images/avatar.jpg')
      p Welcome, Suzy.
</template>

<script>
export default {
  data () {
    return {
      type: false
    }
  },
  methods: {
    showType () {
      this.type = true
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "~assets/base"
  .top-bar
    height: 115px
    background-color: lightblue
    .menu
      float: left
      padding-top: 45px
      padding-left: 30px
      img
        position: absolute
        width: 55px
        height: 55px
      .menu-items
        padding-left: 130px
        padding-top: 20px
        p
          color: white
          font-size: $font-24
          margin-right: 145px
          display: inline-block
    .avatar
      padding-top: 25px
      padding-right: 20px
      float: right
      text-align: right
      img
        width: 60px
        height: 60px
        border-radius: 50%
      p
        font-size: $font-19
        margin-top: 5px
        color: white
  .de
</style>
