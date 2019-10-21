<template lang="pug">
  div.transition
    .top-bar
      .mask(v-show="type || login || logo" :class="{ login }")
      .main
        .menu
          router-link(to="/" tag="div")
            img(
              @mouseenter="changeLogo(true)"
              @mouseleave="changeLogo(false)"
              src='../../assets/images/logo.png'
              )
          .menu-items
            p Add
            router-link(to="/hot" tag="p") Hot
            p(@click="changeType") Type
        .avatar
          img(@click="changeLogin" src='../../assets/images/avatar.jpg')
          p Welcome, Suzy.
    .login-container.window(v-show="login")
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
    .type-container.window(v-show="type")
      .mask
      .main
        p.title Daily
        router-link.cursor(to="/hot" tag="div")
          p(@click="changeType") Cooking
        router-link.cursor(to="/hot" tag="div")
          p(@click="changeType") Do housework
        router-link.cursor(to="/hot" tag="div")
          p(@click="changeType") Public
        router-link.cursor(to="/hot" tag="div")
          p(@click="changeType") Others
        p.title.sport Sport
        router-link.cursor(to="/hot" tag="div")
          p(@click="changeType") Indoor activities
        router-link.cursor(to="/hot" tag="div")
          p(@click="changeType") Outdoor sports
        router-link.cursor(to="/hot" tag="div")
          p(@click="changeType") water sports
        p.title Nature
        router-link.cursor(to="/hot" tag="div")
          p(@click="changeType") Forest
        router-link.cursor(to="/hot" tag="div")
          p(@click="changeType") Desert
        p.title Emotion
        router-link.cursor(to="/hot" tag="div")
          p(@click="changeType") Happy
        router-link.cursor(to="/hot" tag="div")
          p(@click="changeType") Sadness
        router-link.cursor(to="/hot" tag="div")
          p(@click="changeType") Complex
    .logo-container(v-show="logo")
      .mask
      .main
        .top
          img(src='../../assets/images/avatar.jpg')
          .text
            p.title Suzy
            p GuangZhou, China
        .menu
          p.title About You
          p Information
          p Private setting
          p.title.margin-top Your Work
          p.title Collection
          p Feature
        .imgs
          img(src='../../assets/images/personal@1.jpg')
          img(src='../../assets/images/personal@2.jpg')
          img(src='../../assets/images/personal@3.jpg')
    .mask.outer(v-show="login")
</template>

<script>
export default {
  data () {
    return {
      login: false,
      type: false,
      logo: false
    }
  },
  methods: {
    changeLogin () {
      this.login = !this.login
      this.type = false
      this.logo = false
      this.$emit('blur', this.login)
    },
    changeType () {
      this.type = !this.type
      this.login = false
      this.logo = false
      this.$emit('blur', this.type)
    },
    changeLogo (e) {
      this.logo = e
      this.login = false
      this.type = false
      this.$emit('blur', this.logo)
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "~assets/base"
  .cursor
    cursor: pointer
  .transition
    transition: all 0.5s ease-in-out
  .mask
    position: absolute
    background-color: white
    top: 0
    bottom: 0
    left: 0
    right: 0
    z-index: 100
    opacity: 0.6
    &.outer
      top: 115px
  .top-bar
    height: 115px
    .mask
      z-index: 101
      height: 115px
      opacity: 0.6
      &.login
        opacity: 0.85
    .main
      width: 100%
      position: absolute
      z-index: 101
    .menu
      float: left
      padding-top: 45px
      padding-left: 40px
      img
        position: absolute
        width: 55px
        height: 55px
        cursor: pointer
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
        /*position: absolute*/
        cursor: pointer
        width: 60px
        height: 60px
        border-radius: 50%
      p
        font-size: $font-19
        margin-top: 5px
        color: white
  .window
    position: absolute
    margin-left: 460px
    width: 445px
    height: 545px
    .main
      padding: 0 5px
      position: absolute
      z-index: 101
  .login-container
    .mask
      opacity: 0.6
      z-index: 101
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
  .type-container
    .title
      font-size: $font-77
      margin-bottom: 2px
      margin-left: 0
    .sport
      margin-bottom: 11px
    p
      font-size: $font-19
      margin-left: 50px
      color: white
  .logo-container
    position: absolute
    top: 115px
    bottom: 0
    width: 460px
    p
      color: white
      font-size: $font-20
    .main
      position: absolute
      width: 100%
      z-index: 101
    .top
      width: 100%
      height: 205px
      img
        margin-left: 10px
        width: 205px
        height: 205px
      .text
        margin-top: 130px
        margin-right: 20px
        float: right
        height: 100%
        text-align: right
        p
          font-size: $font-14
          &:last-child
            margin-top: 9px
        .title
          font-size: $font-53
    .menu
      margin-left: 10px
      .title
        font-size: $font-60
        margin-left: 0
        &.margin-top
          margin-top: 30px
      p
        margin-left: 45px
    .imgs
      margin-top: 10px
      margin-left: 60px
      img
        width: 100px
        height: 100px
        margin-right: 20px
  .de
</style>
