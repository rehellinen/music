<template>
  <div class="swiper-certify">
    <ul
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
      class="swiper-certif-list"
    >
      <li
        v-for="(item, i) in swiperOption.imgs"
        :key="i"
        :class="classRender[i] || leftHide"
        class="YcenterPosition"
      >
        <img
          :src="item"
          :class="{ blur }"
        >
      </li>
    </ul>
    <div
      @click="slideClick(1)"
      class="arrow left"
    />
    <div
      @click="slideClick(-1)"
      class="arrow right"
    />
  </div>
</template>

<script>
export default {
  props: {
    blur: {
      type: Boolean,
      default: false
    },
    swiperOption: {
      type: Object,
      default: function () {
        return {
          imgs: [
            require('../../assets/images/cover@1.jpg'),
            require('../../assets/images/cover@2.jpg'),
            require('../../assets/images/cover@3.jpg'),
            require('../../assets/images/cover@4.jpg'),
            require('../../assets/images/cover@5.jpg'),
            require('../../assets/images/cover@6.jpg'),
            require('../../assets/images/cover@7.jpg'),
            require('../../assets/images/cover@8.jpg'),
            require('../../assets/images/cover@9.jpg'),
            require('../../assets/images/cover@10.jpg')
          ],
          speed: 999999999,
          startIndex: 1
        }
      }
    }
  },
  data () {
    var me = this
    var imgs = me.swiperOption.imgs || []
    var max = imgs.length
    var speed = me.swiperOption.speed || 3000
    var startIndex = me.swiperOption.startIndex || 0
    var hideNum = Math.floor((max - 5) / 2)

    return {
      max: max,
      speed: speed,
      index: startIndex,
      classCenter: 'p4',
      classLeft: ['p2', 'p3'],
      classRight: ['p5', 'p6'],
      leftHide: 'p0',
      rightHide: 'p7',
      hideNum: hideNum,
      classRender: [],
      timerT: null
    }
  },
  watch: {
    'swiperOption.imgs': {
      handler: function (val) {
        this.max = val.length
        this.hideNum = Math.floor((val.length - 5) / 2)
      },
      deep: true
    }
  },
  created () {

  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      var me = this
      if (me.max <= 5) {
        me.refresh()
      } else if (me.max > 5) {
        me.initLunbo()
      }
    },
    initLunbo () {
      var me = this
      me.refresh()
      me.createTimer()
    },
    createTimer () {
      var me = this

      window.clearInterval(me.timerT)
      me.timerT = setInterval(function () {
        me.change(1)
      }, me.speed)
    },
    change (dir) {
      var me = this
      var index = me.index
      index = index + dir
      if (index < 0) {
        index = me.max - 1
      }
      if (index >= me.max) {
        index = 0
      }
      me.index = index
      // 当前展示第 index 个
      me.refresh()
      me.$emit('change', me.index)
    },
    refresh () {
      var me = this
      var index = me.index
      if (index < 0 || index >= me.max) {
        return
      }
      // 因为只展示五个
      var arr = new Array(me.max)
      var left = index - 1
      var right = index + 1
      arr[index] = me.classCenter

      var count = me.hideNum + 1 // 左右都需要减两次
      var classLeft = me.classLeft.slice(0)
      while (count >= 0) {
        if (left < 0) {
          left = me.max - 1
        }
        if (classLeft.length >= 0) {
          arr[left] = classLeft.pop()
        } else {
          arr[left] = me.leftHide
        }

        left--
        count--
      }
      count = me.hideNum + 1
      var classRight = me.classRight.slice(0)
      while (count >= 0) {
        if (right >= me.max) {
          right = 0
        }
        if (classRight.length) {
          arr[right] = classRight.shift()
        } else {
          arr[right] = me.rightHide
        }
        right++
        count--
      }

      for (var i = 0; i < arr.length; i++) {
        if (!arr[i]) {
          arr[i] = me.rightHide
        }
      }
      me.classRender = arr
    },
    changeTo (index) {
      var me = this
      if (index < 0) {
        index = me.max - 1
      }
      if (index >= me.max) {
        index = 0
      }
      me.index = index
      me.refresh()
      me.$emit('change', me.index)
    },
    slideClick (type) {
      this.change(type)
    },
    onMouseEnter (e) {
      window.clearInterval(this.timerT)
    },
    onMouseLeave () {
      this.createTimer(self)
    }

  }
}
</script>

<style lang="scss" scoped>
  .swiper-certify{
    /*上下左右居中*/
    height: 1px;
    margin: 300px auto 0 auto;
    width: 1366px;
    .centerPosition {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
    }

    /*上下居中*/
    .YcenterPosition {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      -o-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
    }

    /*左右居中*/
    .XcenterPosition {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      -o-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      -moz-transform: translateX(-50%);
      -webkit-transform: translateX(-50%);
    }


    ul.swiper-certif-list {
      width: 1366px;
      height: 1px;
      margin: auto;
      position: relative;
      li {
        width: 50%;
        position: absolute;
        transition: all 0.5s ease-out;
        border-radius: 5px;
        img {
          width: 430px;
          height: 430px;
          display: block;
          &.blur {
            opacity: 0.4;
          }
        }
      }

    }
    .p0, .p1 {
      opacity: 0;
      transform: translate3d(0, -50%, 0) scale(0.5);
      transform-origin: 0 50%;
      z-index: 0;
    }

    .p2 {
      opacity: 0.7;
      transform: translate3d(130px, -50%, 0) scale(0.5);
      transform-origin: -66% 50%;
      z-index: 1;
    }

    .p3 {
      transform: translate3d(230px, -50%, 0) scale(0.7);
      transform-origin: -43% 50%;
      opacity: 0.6;
      z-index: 2;
    }

    .p4 {
      transform: translate3d(470px, -50%, 0) scale(1);
      transform-origin: 0 50%;
      z-index: 3;
      opacity: 1;
    }

    .p5 {
      transform: translate3d(710px, -50%, 0) scale(0.7);
      transform-origin: 105% 50%;
      opacity: 0.7;
      z-index: 2;
    }

    .p6 {
      opacity: 0.7;
      transform: translate3d(810px, -50%, 0) scale(0.5);
      transform-origin: 128% 50%;
      z-index: 1;
    }
    .p7, .p8, .p9 {
      opacity: 0;
      transform: translate3d(100%, -50%, 0) scale(0.5);
      transform-origin: 100% 50%;
      z-index: 0;
    }
  }

  .arrow {
    position: absolute;
    z-index: 50;
    width: 25px;
    height: 25px;
    border-bottom: 2px solid white;
    border-left: 2px solid white;
    cursor: pointer;
    &.left {
      transform: rotate(45deg);
      margin-left: 350px;
    }
    &.right {
      transform: rotate(225deg);
      margin-left: 980px;
    }
  }
</style>
