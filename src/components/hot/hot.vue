<template lang="pug">
  div.hot
    p.title TOP 10
    .song
      .left
        img(src="../../assets/images/cover@1.jpg" :class="{ blur }")
        img(src="../../assets/images/cover@2.jpg" :class="{ blur }")
        img(src="../../assets/images/cover@6.jpg" :class="{ blur }")
        img(src="../../assets/images/cover@4.jpg" :class="{ blur }")
        img(src="../../assets/images/cover@5.jpg" :class="{ blur }")
        img(src="../../assets/images/cover@7.jpg" :class="{ blur }")
        img(src="../../assets/images/cover@9.jpg" :class="{ blur }")
        img(src="../../assets/images/cover@10.jpg" :class="{ blur }")
      .center
        .mask
        .main
          p.title(:class="{ blur }") Sami mini
          p(:class="{ blur }") Foshan,China
          p(:class="{ blur }") Writer
          .list(:class="{ blur }")
            img(src="../../assets/images/hot@music.png")
            p #1
              span SHAKESHAKE
            p #2
              span The Knife
            p #3
              span Would you like sone tea?
            p #4
              span It's pizza!
            p #5
              span Hungry~.~
            p #6
              span Ice cream machine
            p.wood #7
              span Wood
          img(src="../../assets/images/cover@3.jpg" :class="{ blur }")
          img(src="../../assets/images/cover@8.jpg" :class="{ blur }")
          img(src="../../assets/images/cover@9.jpg" :class="{ blur }")
          img(src="../../assets/images/cover@10.jpg" :class="{ blur }")
          img(src="../../assets/images/cover@6.jpg" :class="{ blur }")
          img(src="../../assets/images/cover@5.jpg" :class="{ blur }")
          img(src="../../assets/images/cover@2.jpg" :class="{ blur }")
          img(src="../../assets/images/cover@7.jpg" :class="{ blur }")
      img.right(src="../../assets/images/cover@6.jpg" :class="{ blur }")

</template>

<script>
export default {
  props: {
    blur: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="sass" scoped>
  .wood
    margin-bottom: 5px
  .blur
    opacity: 0.4
  @import "~assets/base"
  .hot
    margin: 0 auto
    width: 1366px
    padding-bottom: 25px
    padding-left: 10px
    p
      font-size: $font-14
      color: white
    .title
      font-size: 66px
      margin-bottom: 30px
  .song
    display: flex
    .left
      width: 450px
      img
        width: 205px
        height: 205px
        margin-right: 20px
        margin-bottom: 19px
        &:nth-child(2n)
          margin-right: 0
    .center
      width: 450px
      height: 432px
      margin-right: 5px
      .mask
        position: absolute
        width: 450px
        height: 432px
        background-color: white
        opacity: 0.3
      .main
        padding: 1px 0 0 5px
        position: absolute
      .title
        font-size: $font-53
      .list
        margin-top: 105px
        img
          position: absolute
          width: 17px
          height: 22px
          margin-left: 385px
          margin-top: 0
        p
          font-size: $font-18
          margin-top: 15px
          span
            color: white
            margin-left: 40px
      img
        margin-top: 20px
        width: 205px
        height: 205px
        margin-right: 23px
        &:last-child
          margin-right: 0
    .right
      width: 450px
      height: 430px
  .de
</style>
