<template>
  <TheLayout>
    <!-- kv-swiper1[s] -->
    <section class="kv-swiper1">
      <Swiper :options="kvSwiperOption1">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>

      <div class="swiper-button-prev swiper-button-prev1"></div>
      <div class="swiper-button-next swiper-button-next1"></div>

      <div class="swiper-pagination swiper-pagination1"></div>
    </section>
    <!-- kv-swiper1[e] -->

    <!-- kv-swiper2[s] -->
    <section class="kv-swiper2">
      <Swiper
        :options="kvSwiperOption2"
        ref="kvSwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>

      <div class="kv-function">
        <div
          class="swiper-autoplay2"
          :class="{ stop: kvAutoplay2 }"
          @click="kvSwiperAutoplay2">
          <span/>
        </div>
        <div
          class="swiper-pagination2"
          :class="{ stop: kvPagination2 }"
          slot="pagination"/>
      </div>
    </section>
    <!-- kv-swiper2[e] -->

    <!-- kv-swiper3[s] -->
    <section class="kv-swiper3">
      <div
        v-once
        v-swiper:swiper="kvSwiperOption3"
        class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide">Slide 1</li>
          <li class="swiper-slide">Slide 2</li>
          <li class="swiper-slide">Slide 3</li>
        </ul>
      </div>

      <div class="swiper-function">
        <div
          class="swiper-autoplay3"
          :class="{ stop: kvAutoplay3 }"
          @click="kvSwiperAutoplay3">
          <span/>
        </div>

        <div
          class="swiper-progress"
          :class="{ start: kvProgress3 }">
          <span class="bar"/>
        </div>

        <div class="swiper-pagination3"/>
      </div>
    </section>
    <!-- kv-swiper3[e] -->
  </TheLayout>
</template>

<script>
import Vue from 'vue'
import TheLayout from '@/components/layout/TheLayout'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)

export default {
  name: 'SwiperPage',

  components: {
    TheLayout,
    Swiper,
    SwiperSlide
  },

  data() {
    return {
      // kv1 swiper options
      kvSwiperOption1: {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        navigation: {
          prevEl: '.swiper-button-prev1',
          nextEl: '.swiper-button-next1'
        },
        pagination: {
          el: '.swiper-pagination1',
          clickable: true
        }
      },

      // kv2 autoplay, pagination
      kvAutoplay2: false,
      kvPagination2: false,

      // kv2 swiper options
      kvSwiperOption2: {
        effect: 'fade',
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 3800,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination2',
          clickable: true,
          paginationType: 'custom',
          renderBullet: function () {
            return `<div class="swiper-pagination-bullet">
              <svg viewBox="0 0 48 48" width="24" height="24" xml:space="preserve" id="svg">
                <circle class="pagination-loader" cx="24" cy="24" r="23" stroke="#da291c" fill="none" stroke-width="4" stroke-linecap="round"></circle>
                <circle class="pagination-circle" cx="24" cy="24" r="23" stroke="#fff" fill="none" stroke-width="4" stroke-linecap="round"></circle>
              </svg>
            </div>`
          }
        }
      },

      // kv3 autoplay, progress
      kvAutoplay3: false,
      kvProgress3: false,

      // kv3 swiper option
      kvSwiperOption3: {
        effect: 'fade',
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: '.swiper-pagination3',
          type: 'fraction'
        },
        on: {
          init: this.init,
          sliderMove: this.stopAutoplay,
          slideChangeTransitionStart: this.stopAutoplay,
          transitionEnd: this.startAutoplay
        }
      }
    }
  },

  computed: {
    // kv2
    kvSwiper() {
      return this.$refs.kvSwiper.$swiper
    }
  },

  methods: {
    // kv2
    kvSwiperAutoplay2() {
      this.kvAutoplay2 = !this.kvAutoplay2
      this.kvPagination2 = !this.kvPagination2

      if (this.kvAutoplay2) {
        this.kvSwiper.autoplay.stop()
      } else {
        this.kvSwiper.autoplay.start()
      }
    },

    // kv3
    init() {
      this.kvProgress3 = true
    },

    kvSwiperAutoplay3() {
      this.kvAutoplay3 = !this.kvAutoplay3

      if (this.kvProgress3) {
        this.stopAutoplay()
      } else {
        this.startAutoplay()
      }
    },

    stopAutoplay() {
      try {
        this.swiper.autoplay.stop()
        this.kvProgress3 = false
      } catch (err) {
        console.error(err)
      }
    },

    startAutoplay() {
      try {
        this.swiper.autoplay.start()
        this.kvProgress3 = true
        this.kvAutoplay3 = false
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// kv1
.kv-swiper1 {
  position: relative;
  height: 300px;
  margin-bottom: 50px;

  .swiper-container {
    height: 100%;

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      font-size: 20px;

      &:nth-child(odd) {
        background-color: darksalmon;
      }

      &:nth-child(even) {
        background-color: darkseagreen;
      }
    }
  }

  .swiper-button-prev1,
  .swiper-button-next1 {
    &::after {
      color: #333;
    }
  }

  .swiper-pagination1::v-deep {
    bottom: -30px;
    width: 100%;

    .swiper-pagination-bullet {
      margin: 0 5px;
      cursor: pointer;
    }

    .swiper-pagination-bullet-active {
      background-color: #333;
    }
  }
}

// kv2
@keyframes loading {
  0% {
    stroke-dashoffset: 192;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

.kv-swiper2 {
  position: relative;
  height: 300px;
  margin-bottom: 50px;

  .swiper-container {
    height: 100%;

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      font-size: 20px;

      &:nth-child(odd) {
        background-color: darksalmon;
      }

      &:nth-child(even) {
        background-color: darkseagreen;
      }
    }
  }

  .kv-function {
    display: flex;
    gap: 5px;
    position: absolute;
    left: 50%;
    bottom: 20px;
    z-index: 1;
    transform: translateX(-50%);

    .swiper-autoplay2 {
      position: relative;
      width: 24px;
      height: 24px;
      border: 2px solid #fff;
      border-radius: 50%;
      cursor: pointer;

      span {
        &::before,
        &::after {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 2px;
          height: 10px;
          background-color: #fff;
          content: '';
        }

        &::before {
          left: calc(50% - 4px);
        }

        &::after {
          left: calc(50% + 2px);
        }
      }

      &.stop {
        span {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-left: 8px solid #fff;

          &::before,
          &::after {
            display: none;
          }
        }
      }
    }

    .swiper-pagination2::v-deep {
      display: flex;
      align-items: center;
      position: relative;

      .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        margin: 0 5px;
        background-color: #fff;
        opacity: 1;
        cursor: pointer;

        svg {
          display: none;
          transform: rotate(-90deg);

          .pagination-loader {
            stroke-dasharray: 192;
            stroke-dashoffset: 192;
            animation: loading 5s linear infinite;
          }

          .pagination-circle {
            stroke-opacity: 0.2;
          }
        }
      }

      .swiper-pagination-bullet-active {
        width: 24px;
        height: 24px;
        background-color: transparent;

        svg {
          display: block;
        }
      }

      &.stop {
        .swiper-pagination-bullet {
          svg {
            .pagination-loader {
              stroke: none;
              animation-play-state: paused;
            }
          }
        }
      }
    }
  }
}

// kv3
@keyframes kvProgress {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.kv-swiper3 {
  position: relative;
  height: 300px;

  .swiper-container {
    height: 100%;

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      font-size: 20px;

      &:nth-child(odd) {
        background-color: darksalmon;
      }

      &:nth-child(even) {
        background-color: darkseagreen;
      }
    }
  }

  .swiper-function {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: absolute;
    left: 50%;
    bottom: 20px;
    z-index: 10;
    transform: translateX(-50%);

    .swiper-autoplay3 {
      position: relative;
      cursor: pointer;

      span {
        &::after {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 4px;
          height: 12px;
          border-left: 2px solid #fff;
          border-right: 2px solid #fff;
          content: '';
        }
      }

      &.stop {
        span {
          &::after {
            width: 0;
            height: 0;
            border-right: 0;
            border-left: 10px solid #fff;
            border-top: 6px solid transparent;
            border-bottom: 6px solid transparent;
          }
        }
      }
    }

    .swiper-progress {
      overflow: hidden;
      width: 300px;
      height: 4px;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 4px;

      &.start {
        .bar {
          animation: kvProgress 5s linear infinite;
        }
      }

      .bar {
        display: block;
        width: 100%;
        height: 4px;
        transform: translateX(-100%);
        background-color: #fff;
      }
    }

    .swiper-pagination3 {
      width: fit-content;
      color: #fff;
    }
  }
}
</style>
