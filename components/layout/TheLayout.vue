<template>
  <div>
    <TheHeader/>

    <main class="wrap">
      <slot/>
    </main>

    <footer class="wrap">
      <p>Copyright 2023. LeeHeejae All pictures cannot be copied without permission.</p>
    </footer>
  </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader'

export default {
  name: 'TheLayout',

  components: {
    TheHeader
  }
}
</script>

<style lang="scss" scoped>
main {
  min-height: 100vh;
}

footer {
  p {
    text-align: center;
  }
}
</style>
