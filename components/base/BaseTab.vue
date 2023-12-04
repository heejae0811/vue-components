<template>
  <div class="base-tab">
    <ul>
      <li
        v-for="(item, key) in tab"
        :key="`tab-${key}`"
        :class="{ 'on': key === currentTab }"
        @click="$emit('click', key)">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BaseTab',

  props: {
    tab: {
      type: Array,
      required: true
    },
    currentTab: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.base-tab {
  margin-bottom: 30px;

  ul {
    display: flex;
    justify-content: start;
    align: center;
    gap:  20px;

    li {
      padding: 0 5px;
      border-bottom: 2px solid transparent;
      color: #888;
      font-size: 20px;
      font-weight: 700;
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        color: #333;
      }

      &.on {
        color: #333;
        border-bottom: 2px solid #333;
      }
    }
  }
}
</style>
