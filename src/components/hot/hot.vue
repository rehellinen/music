<template lang="pug">
  div.hot
    p.title TOP 10
    .song
      .left
        img(src="../../assets/images/cover@1.jpg")
        img(src="../../assets/images/cover@2.jpg")
        img(src="../../assets/images/cover@3.jpg")
        img(src="../../assets/images/cover@4.jpg")
        img(src="../../assets/images/cover@5.jpg")
        img(src="../../assets/images/cover@6.jpg")
      .center
        .mask
        .main
          p.title Sami mini
          p Foshan,China
          p Writer
          .list
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
            p #7
              span Wood
          img(src="../../assets/images/cover@7.jpg")
          img(src="../../assets/images/cover@8.jpg")
          img(src="../../assets/images/cover@9.jpg")
          img(src="../../assets/images/cover@10.jpg")
      img.right(src="../../assets/images/cover@6.jpg")

</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
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
      font-size: $font-77
      margin-bottom: 30px
  .song
    display: flex
    .left
      width: 450px
      img
        width: 205px
        height: 205px
        margin-right: 20px
        margin-bottom: 15px
        &:nth-child(2n)
          margin-right: 0
    .center
      width: 450px
      height: 445px
      margin-right: 5px
      .mask
        position: absolute
        width: 450px
        height: 445px
        background-color: white
        opacity: 0.3
      .main
        padding: 15px 0 0 5px
        position: absolute
      .title
        font-size: $font-53
      .list
        margin-top: 105px
        p
          font-size: $font-18
          margin-top: 15px
          span
            color: white
            margin-left: 40px
      img
        margin-top: 20px
        width: 210px
        height: 210px
        margin-right: 20px
        &:last-child
          margin-right: 0
    .right
      width: 450px
      height: 445px
  .de
</style>
