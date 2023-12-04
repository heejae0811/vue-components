<template>
  <div
    class="base-select"
    :class="[
      shape,
      { 'open': isOpen }
    ]">

    <div
      class="form-select"
      @click="isOpen = !isOpen">
      <p :class="[{ 'selected': isSelect }]">{{ selected }}</p>
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 1.17C10.8126 0.983753 10.5592 0.879211 10.295 0.879211C10.0308 0.879211 9.77737 0.983753 9.59001 1.17L6.00001 4.71L2.46001 1.17C2.27265 0.983753 2.0192 0.879211 1.75501 0.879211C1.49082 0.879211 1.23737 0.983753 1.05001 1.17C0.956281 1.26297 0.881887 1.37357 0.831118 1.49543C0.780349 1.61729 0.754211 1.74799 0.754211 1.88C0.754211 2.01202 0.780349 2.14272 0.831118 2.26458C0.881887 2.38644 0.956281 2.49704 1.05001 2.59L5.29001 6.83C5.38297 6.92373 5.49357 6.99813 5.61543 7.04889C5.73729 7.09966 5.868 7.1258 6.00001 7.1258C6.13202 7.1258 6.26273 7.09966 6.38459 7.04889C6.50645 6.99813 6.61705 6.92373 6.71001 6.83L11 2.59C11.0937 2.49704 11.1681 2.38644 11.2189 2.26458C11.2697 2.14272 11.2958 2.01202 11.2958 1.88C11.2958 1.74799 11.2697 1.61729 11.2189 1.49543C11.1681 1.37357 11.0937 1.26297 11 1.17Z" fill="#111111"/>
      </svg>
    </div>

    <div
      v-if="isOpen"
      class="form-select-list">
      <div :class="{ 'scroll': options.length > 3 }">
        <ul>
          <li
            v-for="(option, key) in options"
            :key="`option-${key}`"
            @click="selectOption(option)">
            {{ option.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseSelect',

  props: {
    shape: {
      type: String
    },
    isSelect: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array
    },
    defaultValue: {
      type: String
    }
  },

  data() {
    return {
      isOpen: false
    }
  },

  computed: {
    selected: {
      get() {
        return this.options.find(item => item.name === this.defaultValue)?.name || this.defaultValue || '옵션을 선택해 주세요.'
      }
    }
  },

  methods: {
    selectOption(option) {
      this.selected = option.name
      this.isOpen = false
      this.isSelect = true
      this.$emit('input', option.name)
    }
  }
}
</script>

<style lang="scss" scoped>
.base-select {
  position: relative;

  .form-select {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 0 15px;
    background-color: #fff;
    border: 1px solid #ddd;
    cursor: pointer;

    svg {
      transition: all 0.3s;
    }
  }

  .form-select-list {
    position: absolute;
    top: 65px;
    left: 0;
    right: 0;
    z-index: 10;

    & > div {
      &.scroll {
        height: 240px;

        ul {
          overflow-y: auto;
          height: 100%;
          padding-right: 5px;

          &::-webkit-scrollbar {
            width: 5px;
          }

          &::-webkit-scrollbar-thumb {
            background-color: #f5f5f5;
          }
        }
      }
    }

    ul {
      background-color: #fff;
      border: 1px solid #333;

      li {
        height: 60px;
        padding: 0 15px;
        line-height: 60px;
        transition: all .3s;
        cursor: pointer;

        &:hover {
          background-color: #f5f5f5;
        }
      }
    }
  }

  &.open {
    .form-select {
      border: 1px solid #333;

      svg {
        transform: rotate(180deg);
      }
    }
  }

  &.black {
    &.open {
      .form-select {
        svg {
          transform: rotate(0);
        }
      }
    }

    .form-select {
      background-color: #111;
      border: 1px solid #111;
      color: #fff;

      svg {
        transform: rotate(180deg);

        path {
          fill: #fff;
        }
      }
    }

    .form-select-list {
      top: -245px;

      ul {
        background-color: #111;
        border: 1px solid #111;

        li {
          color: #fff;

          &:hover {
            background-color: #333;
          }
        }
      }
    }
  }
}
</style>
