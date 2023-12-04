<template>
  <button
    type="button"
    class="base-button"
    :class="[color]"
    @click="$emit('click')">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    color: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.base-button {
  padding: 10px 20px;
  border-radius: 24px;
  font-size: 16px;
  transition: all 0.3s;

  &.black {
    background-color: #000;
    color: #fff;

    &:hover {
      background-color: #333;
    }
  }
}
</style>
