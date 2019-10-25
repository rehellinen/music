<template lang="pug">
  div.res
    img.pic(src="../../assets/images/cover@1.jpg")
    .right
      .item
        p.title(@click="changeShape") Shape
          span(v-show="shape") Choose a shape
        img.shape(src="../../assets/images/shape.png" v-show="shape")
      .item
        p.title(@click="changeText") Text
        .text(v-show="text")
          .fonts
            .single
              p.big ABC
              p.small Brown
            .single
              p.big.barlow ABC
              p.small.barlow Barlow
            .single
              p.big.teko ABC
              p.small.teko Toko
            .single
              p.big.helvetica ABC
              p.small.helvetica helvetica
            .single
              p.big.quantify ABC
              p.small.quantify Quantify
          el-slider(v-model="text1" :show-tooltip="false")
          p.font-size {{text1}} pt
      .item
        p.title(@click="changeColour") Colour
        img.colour(src="../../assets/images/color.jpg" v-show="colour")
      .item
        p.title(@click="changeAdjustment") Adjustment
        .adjustment(v-show="adjustment")
          .operate
            img(src="../../assets/images/adjustment@1.png")
            el-slider(v-model="ad1" :show-tooltip="false")
            p {{ad1}}
          .operate
            img(src="../../assets/images/adjustment@2.png")
            el-slider(v-model="ad2" :show-tooltip="false")
            p {{ad2}}
          .operate
            img(src="../../assets/images/adjustment@3.png")
            el-slider(v-model="ad3" :show-tooltip="false")
            p {{ad3}}
</template>

<script>
export default {
  data () {
    return {
      shape: false,
      text: false,
      colour: false,
      adjustment: false,
      ad1: 0,
      ad2: 0,
      ad3: 0,
      text1: 0
    }
  },
  methods: {
    changeShape () {
      this.shape = !this.shape
      this.text = false
      this.colour = false
      this.adjustment = false
    },
    changeText () {
      this.text = !this.text
      this.shape = false
      this.colour = false
      this.adjustment = false
    },
    changeColour (e) {
      this.colour = !this.colour
      this.text = false
      this.shape = false
      this.adjustment = false
    },
    changeAdjustment (e) {
      this.adjustment = !this.adjustment
      this.text = false
      this.shape = false
      this.colour = false
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "~assets/base"
  .el-slider
    width: 280px
    margin-left: 20px
    /deep/ .el-slider__bar
      background-color: white
      height: 3px
    /deep/  .el-slider__runway
      background-color: white
      height: 3px
    /deep/ .el-slider__button
      border: 0
      border-radius: 0
      width: 5px
      margin-bottom: 3px
  .res
    display: flex
    margin-top: 70px
    .pic
      width: 530px
      height: 530px
      margin-left: 250px
      margin-right: 120px
    .right
      display: flex
      flex-direction: column
      padding-top: 20px
      padding-left: 30px
      .item
        .title
          cursor: pointer
          color: white
          margin-bottom: 20px
          font-size: $font-60
          span
            color: white
            font-size: $font-15
            margin-left: 25px
            margin-bottom: 3px
      .shape
        width: 395px
        margin-left: 20px
        margin-bottom: 50px
      .text
        .fonts
          margin-top: 30px
          margin-bottom: 40px
          display: flex
          width: 320px
          justify-content: space-between
          p
            color: white
            &.big
              font-size: $font-24
              &.teko
                margin-top: 1px
            &.small
              font-size: 12px
              &.teko
                font-size: 12px
                margin-top: 3px
        .el-slider
          margin-left: 0
          margin-bottom: 100px
        .font-size
          margin-left: 300px
          margin-top: -125px
          font-size: $font-18
          color: white
          position: absolute
      .colour
        margin-top: 15px
        margin-bottom: 30px
        height: 170px
      .adjustment
        margin-top: 40px
        .operate
          display: flex
          margin-top: 20px
          align-items: center
          img
            width: 38px
            height: 38px
          p
            font-size: $font-18
            margin-bottom: 0
            margin-left: 7px
            color: white
  .de
</style>
