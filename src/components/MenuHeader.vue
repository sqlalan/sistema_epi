<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
    <RouterLink to="/cadastro">Cadastro</RouterLink>
    <RouterLink to="/movimentacao">Movimentação</RouterLink>
    <RouterLink to="/relatorios">Relatórios</RouterLink>
  </nav>
</template>
