<template>
  <header class="wrap">
    <nav>
      <NuxtLink
        v-for="(nav, key) in navigation"
        :key="`nav-${key}`"
        :to="{ path: `${nav.to}`}">
        {{ nav.name }}
      </NuxtLink>
    </nav>
  </header>
</template>

<script>
import { RouterName } from '@/configs/router'

export default {
  name: 'TheHeader',

  data() {
    return {
      navigation: [
        {
          name: '메인',
          to: RouterName.MAIN
        },
        {
          name: '컴포넌트',
          to: RouterName.COMPONENTS
        },
        {
          name: '스와이퍼',
          to: RouterName.SWIPER
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  border-bottom: 1px solid #ddd;

  nav {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;

    a {
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
