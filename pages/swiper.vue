<template>
  <TheLayout>
    <section class="kv-swiper">
      <Swiper :options="kvSwiperOptions">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>

      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <div class="swiper-pagination"></div>
    </section>

    <section class="kv-swiper1">
      <Swiper
        :options="kvSwiperOptions1"
        ref="kvSwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>

      <div class="kv-function">
        <div
          class="swiper-autoplay"
          :class="{ stop: kvAutoplay }"
          @click="kvSwiperAutoplay">
          <span/>
        </div>
        <div
          class="swiper-pagination1"
          :class="{ stop: kvPagination }"
          slot="pagination"/>
      </div>
    </section>

    <section class="kv-swiper2">
      <div
        v-once
        v-swiper:swiper="kvSwiperOption2"
        class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide">Slide 1</li>
          <li class="swiper-slide">Slide 2</li>
          <li class="swiper-slide">Slide 3</li>
        </ul>
      </div>

      <div class="swiper-function">
        <div
          class="swiper-autoplay"
          :class="{ stop: kvAutoplay2 }"
          @click="kvSwiperAutoplay2">
          <span/>
        </div>

        <div
          class="swiper-progress"
          :class="{ start: kvProgress2 }">
          <span class="bar"/>
        </div>

        <div class="swiper-pagination2"/>
      </div>
    </section>
  </TheLayout>
</template>

<script>
import TheLayout from '@/components/layout/TheLayout'
import Vue from 'vue'
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
      kvSwiperOptions: {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },

      // kv autoplay, pagination 1
      kvAutoplay: false,
      kvPagination: false,

      // kv swiper options 1
      kvSwiperOptions1: {
        effect: 'fade',
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 3800,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination1',
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

      // Kv autoplay, progress 2
      kvAutoplay2: false,
      kvProgress2: false,

      // Kv swiper option 2
      kvSwiperOption2: {
        effect: 'fade',
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: '.swiper-pagination2',
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
    kvSwiper() {
      return this.$refs.kvSwiper.$swiper
    }
  },

  methods: {
    // kv swiper options 1
    kvSwiperAutoplay() {
      this.kvAutoplay = !this.kvAutoplay
      this.kvPagination = !this.kvPagination

      if (this.kvAutoplay) {
        this.kvSwiper.autoplay.stop()
      } else {
        this.kvSwiper.autoplay.start()
      }
    },

    // kv swiper options 2
    init() {
      this.kvProgress2 = true
    },

    kvSwiperAutoplay2() {
      this.kvAutoplay2 = !this.kvAutoplay2

      if (this.kvProgress2) {
        this.stopAutoplay()
      } else {
        this.startAutoplay()
      }
    },

    stopAutoplay() {
      try {
        this.swiper.autoplay.stop()
        this.kvProgress2 = false
      } catch (err) {
        console.error(err)
      }
    },

    startAutoplay() {
      try {
        this.swiper.autoplay.start()
        this.kvProgress2 = true
        this.kvAutoplay2 = false
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.kv-swiper {
  position: relative;
  height: 300px;
  margin-bottom: 50px;

  .swiper-container {
    height: 100%;

    .swiper-slide {
      padding: 20px;

      &:nth-child(odd) {
        background-color: darksalmon;
      }

      &:nth-child(even) {
        background-color: darkseagreen;
      }
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    &::after {
      color: #333;
    }
  }

  .swiper-pagination::v-deep {
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

@keyframes loading {
  0% {
    stroke-dashoffset: 192;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

.kv-swiper1 {
  position: relative;
  height: 300px;
  margin-bottom: 50px;

  .swiper-container {
    height: 100%;

    .swiper-slide {
      padding: 20px;

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
    bottom: 30px;
    z-index: 1;
    transform: translateX(-50%);

    .swiper-autoplay {
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
          border-left: 7px solid #fff;

          &::before,
          &::after {
            width: auto;
            height: auto;
            background: none;
          }
        }
      }
    }

    .swiper-pagination1::v-deep {
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

@keyframes kvProgress {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.kv-swiper2 {
  position: relative;
  height: 300px;

  .swiper-container {
    height: 100%;

    .swiper-slide {
      padding: 20px;

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
    align-items: center;
    gap: 20px;
    position: absolute;
    left: 50%;
    bottom: 30px;
    z-index: 10;
    transform: translateX(-50%);
    width: fit-content;

    .swiper-autoplay {
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

    .swiper-pagination2 {
      position: initial;
      width: fit-content;
      color: #fff;
    }
  }
}
</style>
