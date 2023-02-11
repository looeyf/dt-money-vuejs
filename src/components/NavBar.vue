<script setup lang="ts">
import Button from './Button.vue';
</script>

<template>
  <div class="navbar-container">
    <div class="navbar container">
      <img src="@/assets/logo.svg" alt="Dt money logo" />
      <Button>Nova transação</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar-container {
  background-color: var(--blue);
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 12rem;
}
</style>
