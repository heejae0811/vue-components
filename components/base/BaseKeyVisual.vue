<template>
  <div
    class="base-key-visual"
    :class="{ 'active': kvActive }">
    <picture>
      <source :srcset="kvMoImgSrc" media="(max-width: 720px)">
      <img :src="kvImgSrc" alt="Key visual">
    </picture>
  </div>
</template>

<script>
export default {
  name: 'BaseKeyVisual',

  props: {
    kvImgSrc: {
      type: String
    },
    kvMoImgSrc: {
      type: String
    }
  },

  data() {
    return {
      kvActive: false
    }
  },

  mounted() {
    setTimeout(() => {
      this.kvActive = true
    }, 0)
  }
}
</script>

<style lang="scss">
.base-key-visual {
  overflow: hidden;
  width: 100%;
  background-color: #111;
  border-radius: 16px;

  img {
    width: 100%;
    opacity: 0;
    transform: scale(1.1);
    transition: all 2s;
  }

  &.active {
    img {
      opacity: 1;
      transform: scale(1);
    }
  }
}
</style>
