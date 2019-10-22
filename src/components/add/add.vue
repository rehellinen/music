<template lang="pug">
  div.add
    .box
      span
      span
      span
      span
      span
      span
      span
      span
      span
      span
      span
      span
      span
      span
      span
      span
      span
      span
      span
      span
      span
    .line
    .operate
      p.time 4'33''
      .last-pause-next
        img.last(src="../../assets/images/add@last.png")
        img.pause(src="../../assets/images/add@pause.png")
        img.next(src="../../assets/images/add@next.png")
      img.stop(src="../../assets/images/add@stop.png")
    .menu-container()
      .menu
        span(@click="changeIndex(0)" :class="{ white: index === 0 }") Choose a colour type
        span(@click="changeIndex(1)" :class="{ white: index === 1 }") Editing a time value
        span(@click="changeIndex(2)" :class="{ white: index === 2 }") Add effect
      .images(v-show="index === 0")
        img(src="../../assets/images/gradient@1.jpg")
        img(src="../../assets/images/gradient@2.jpg")
        img(src="../../assets/images/gradient@3.jpg")
        img(src="../../assets/images/gradient@4.jpg")
        img(src="../../assets/images/gradient@5.jpg")
        img(src="../../assets/images/gradient@6.jpg")
        img(src="../../assets/images/gradient@7.jpg")
        img(src="../../assets/images/gradient@8.jpg")
      .text(v-show="index === 2")
        span Change the speed
        span Repeat
      //p.tiny Choose the part you want
      .report(v-show="index === 2")
        span Report
        img.last(src="../../assets/images/add@last.png")
        span 2
        img.next(src="../../assets/images/add@next.png")
        span times
    .progress-container(
      v-show="index === 1 || index === 2"
      :class="{ margin: index === 1 }"
    )
      img.play(src="../../assets/images/add@next.png")
      img.border(src="../../assets/images/border.png")
      img.progress(src="../../assets/images/progress.png")
</template>

<script>
export default {
  data () {
    return {
      index: 0
    }
  },
  methods: {
    changeIndex (i) {
      this.index = i
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/base";
  .white {
    color: white;
  }
  .add {
    width: 820px;
    margin: 55px auto 0 auto;
    .box {
      width: 720px;
      height:300px;
      position:relative;
      margin:0 auto;
      transform:rotate(180deg);
    }
    .box span{
      position:absolute;
      background:lightblue;
      width:15px;
    }

    @for $i from 1 through 5 {
      .box span:nth-child(#{$i}){
        height:50px;
        left: ($i - 1) * 35px;
        animation: run $i/3 + s linear 0s infinite alternate;
      }
    }

    @for $i from 6 through 15 {
      .box span:nth-child(#{$i}){
        height:50px;
        left: ($i - 1) * 35px;
        animation: run $i/4 + s linear 0s infinite alternate;
      }
    }

    @for $i from 16 through 25 {
      .box span:nth-child(#{$i}){
        height:50px;
        left: ($i - 1) * 35px;
        animation: run $i/10 + s linear 0s infinite alternate;
      }
    }
    @keyframes run{
      10%{
        height:20%;
      }
      20%{
        height:40%;
      }
      40%{
        height:60%;
      }
      70%{
        height:70%
      }
      100%{
        height:100%
      }
    }
    .line {
      background-color: white;
      width: 100%;
      height: 3px;
    }
    .operate {
      margin-top: 10px;
      p {
        vertical-align: middle;
        display: inline-block;
        color: white;
        font-size: $font-20;
        margin-left: 140px;
      }
      .last-pause-next {
        display: inline-block;
        margin-left: 185px;
        margin-right: 170px;
        .last {
          vertical-align: middle;
          width: 20px;
        }
        .pause {
          vertical-align: middle;
          margin: 0 25px;
          width: 23px;
        }
        .next {
          vertical-align: middle;
          width: 20px;
        }
      }
      .stop {
        vertical-align: middle;
        width: 23px;
      }
    }
    .menu-container {
      margin-top: 40px;
      margin-left: 90px;
      .menu {
        span {
          cursor: pointer;
          margin-right: 40px;
          font-size: $font-24;
        }
      }
      .text {
        margin-top: 10px;
        span {
          font-size: $font-15;
          &:nth-child(2) {
            color: white;
            margin-left: 10px;
          }
        }
      }
      .tiny {
        font-size: 1px;
      }
      .report {
        margin-top: 5px;
        span {
          color: white;
          vertical-align: middle;
          font-size: $font-12;
        }
        img {
          vertical-align: middle;
          width: 15px;
          margin: 0 10px;
        }
      }
      .images {
        position: absolute;
        width: 1070px;
        margin-left: -210px;
        margin-top: 30px;
        img {
          width: 90px;
          margin-right: 50px;
          &:last-child {
             margin-right: 0;
          }
        }
      }
    }
    .progress-container {
      &.margin {
        margin-top: 49px;
      }
      .play {
        margin-top: 41px;
        margin-left: -65px;
        position: absolute;
        width: 20px;
      }
      .border {
        position: absolute;
        height: 40px;
        margin-top: 30px;
      }
      .progress {
        position: absolute;
        margin-left: -30px;
        width: 950px;
        height: 40px;
        margin-top: 30px;
      }
    }
  }
</style>
