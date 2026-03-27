<script setup lang="ts">
import { RouterView } from 'vue-router'
import MenuHeader from './components/MenuHeader.vue'
import MenuFooter from './components/Footer.vue'
</script>

<template>
  <div class="app">
    <header>
      <MenuHeader />
    </header>
    <section>
      <RouterView />
    </section>
    <footer>
      <MenuFooter />
    </footer>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
