<template>
  <div
    class="base-modal"
    @click.self="$emit('close')">
    <div class="wrap">
      <BaseButton @click="$emit('close')">X</BaseButton>

      <div class="title">
        <slot name="title"/>
      </div>

      <div class="content">
        <slot name="content"/>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/base/BaseButton'

export default {
  name: 'BaseModal',

  components: {
    BaseButton
  }
}
</script>

<style lang="scss" scoped>
.base-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);

  .wrap {
    position: relative;
    width: 90%;
    max-width: 500px;
    min-height: 300px;
    background-color: #fff;
    border-radius: 16px;

    .base-button {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 20px;
      font-weight: 700;
    }

    .title {
      margin: 20px auto;

      h3 {
        font-size: 26px;
        font-weight: 700;
        text-align: center;
      }
    }

    .content {
      p {
        font-size: 16px;
      }
    }
  }
}
</style>
