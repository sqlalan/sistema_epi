<script setup lang="ts">
import { RouterView } from 'vue-router'
import MenuHeader from './components/MenuHeader.vue'
</script>

<template>
  <header>
    <MenuHeader />
  </header>

  <RouterView />
</template>

<style scoped></style>
