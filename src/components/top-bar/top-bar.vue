<template lang="pug">
  div.transition
    .top-bar
      .mask(v-show="type")
      .main
        .menu
          img(src='../../assets/images/logo.png')
          .menu-items
            p Add
            p Hot
            p Type
        .avatar
          img(@click="showType" src='../../assets/images/avatar.jpg')
          p Welcome, Suzy.
    .type-container(v-show="type")
      .mask
      .main
        p.title Sign up
        p To sign in to your account, enter your email address and password, or login using your social media account below.
        p Don't have an account yet?
          span Sign Up
        .input-container
          .input
            label Email address
            input
          .input
            label Password
            input
          .input
            label Name
            input
        .button
          p Sign in
    .mask.outer(v-show="type")
</template>

<script>
export default {
  data () {
    return {
      type: true
    }
  },
  methods: {
    showType () {
      this.type = !this.type
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "~assets/base"
  .transition
    transition: all 0.5s ease-in-out
  .mask
    position: absolute
    background-color: white
    top: 0
    bottom: 0
    left: 0
    right: 0
    z-index: 0
    opacity: 0.4
    &.outer
      top: 115px
  .top-bar
    height: 115px
    .mask
      height: 115px
      opacity: 0.7
    .main
      width: 100%
      position: absolute
      z-index: 1
    .menu
      float: left
      padding-top: 45px
      padding-left: 40px
      img
        position: absolute
        width: 55px
        height: 55px
      .menu-items
        padding-left: 130px
        padding-top: 20px
        p
          cursor: pointer
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
        cursor: pointer
        width: 60px
        height: 60px
        border-radius: 50%
      p
        font-size: $font-19
        margin-top: 5px
        color: white
  .type-container
    position: absolute
    margin-left: 460px
    width: 445px
    height: 545px
    .mask
      opacity: 0.5
    .main
      padding: 0 5px
      position: absolute
      z-index: 1
    p
      font-size: $font-18
      margin-bottom: 15px
    span
      text-decoration: underline
      margin-left: 5px
    .title
      font-size: $font-48
      margin-bottom: 25px
    .input-container
      .input
        &:first-child
          margin-top: 50px
        margin-top: 40px
        padding-bottom: 10px
        border-bottom: 1px solid $base-font-color
        label
          font-size: $font-18
          line-height: 30px
          vertical-align: middle
        input
          width: 300px
          height: 30px
          vertical-align: middle
          border: 0
          margin-left: 15px
          background-color: rgba(0, 0, 0, 0)
    .button
      margin: 50px auto 0 auto
      width: 380px
      height: 50px
      background-color: $base-font-color
      p
        text-align: center
        line-height: 50px
        vertical-align: middle
        color: white
  .de
</style>
