<template>
  <TheLayout>
    <ul>
      <li
        v-for="(list, key) in dataList"
        :key="`list-${key}`">
        <h2>{{ list.title }}</h2>
        <p>{{ list.content }}</p>
        <span>{{ list.date }}</span>
      </li>
    </ul>
  </TheLayout>
</template>

<script>
import TheLayout from '@/components/layout/TheLayout'

export default {
  name: 'Main',

  components: {
    TheLayout
  },

  data() {
    return {
      dataList: [
        {
          title: 'Nuxt.js',
          content: 'Nuxt.js란, Vue.js 애플리케이션을 구축할 수 있는 오픈 소스 프레임워크이다.',
          date: '2023-10-01'
        },
        {
          title: 'Slot',
          content: '컴포넌트를 랜더링 할 때 html로 작성한 코드가 컴포넌트의 slot 부분으로 교체된다.',
          date: '2023-10-02'
        },
        {
          title: '뷰 SASS/SCSS 적용하기',
          content: 'sass/scss를 적용하고 싶은 .vue 파일에서 script 태그 아래에 style 태그를 작성한다.',
          date: '2023-10-03'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  li {
    margin-bottom: 10px;

    h2 {
      margin-bottom: 5px;
      font-weight: 700;
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

.kv-swiper {
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
      font-weight: 700;

      &:nth-child(odd) {
        background-color: darkseagreen;
      }

      &:nth-child(even) {
        background-color: darksalmon;
      }
    }
  }

  .kv-function {
    position: absolute;
    left: 50%;
    bottom: 30px;
    z-index: 1;
    transform: translateX(-50%);

    .swiper-autoplay {
      position: absolute;
      top: 2px;
      left: -30px;
      width: 24px;
      height: 24px;
      border: 2px solid #fff;
      border-radius: 50%;
      cursor: pointer;

      span {
        &::before,
        &::after {
          display: block;
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
          left: calc(50% + 1px);
        }
      }

      &.stop {
        span {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-left: 8px solid #fff;
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;

          &::before,
          &::after {
            display: none;
          }
        }
      }
    }

    .swiper-pagination::v-deep {
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
        height: 15px;
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
</style>
