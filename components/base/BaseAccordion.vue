<template>
  <div class="base-accordion">
    <div
      class="title"
      @click="toggle">
      <slot name="title"/>
    </div>

    <transition
      name="accordion" appear
      @before-enter="beforeEnter" @enter="enter"
      @before-leave="beforeLeave" @leave="leave">
      <div
        v-show="currentAccordion"
        class="content">
        <slot name="content"/>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'BaseAccordion',

  data() {
    return {
      currentAccordion: false
    }
  },

  methods: {
    toggle() {
      this.currentAccordion = !this.currentAccordion
    },
    beforeEnter(el) {
      el.style.height = '0'
    },
    enter(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    leave(el) {
      el.style.height = '0'
    }
  }
}
</script>

<style lang="scss" scoped>
.base-accordion {
  .title {
    padding: 20px;
    border-bottom: 1px solid #ddd;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
  }

  .content {
    overflow: hidden;
    padding: 20px;
    background-color: #f5f5f5;
    transition: all 0.3s;
  }
}
</style>
