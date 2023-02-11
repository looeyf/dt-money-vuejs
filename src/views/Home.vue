<script setup lang="ts">
import Card from '@/components/Card.vue';
</script>

<template>
  <div class="container">
    <div class="summary">
      <Card type="Entradas" :value="17400.0" />
      <Card type="Saídas" :value="1259.0" />
      <Card type="Total" :value="16141.0" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;

  :deep(.card) {
    transform: translateY(-50%);
  }
}
</style>
