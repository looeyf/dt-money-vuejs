<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  type: 'Entradas' | 'Saídas' | 'Total';
  value: number;
}

const props = defineProps<Props>();
</script>

<template>
  <div :class="['card', { 'card-green': props.type === 'Total' }]">
    <header class="card-header">
      <span>{{ props.type }}</span>
      <img v-if="props.type === 'Entradas'" src="@/assets/incomes.svg" alt="Entradas" />
      <img v-else-if="props.type === 'Saídas'" src="@/assets/outcomes.svg" alt="Saídas" />
      <img v-else src="@/assets/total.svg" alt="Total" />
    </header>

    <p class="card-content">R$ <b>17.400</b>,00</p>
  </div>
</template>

<style lang="scss" scoped>
.card {
  color: var(--text-title);
  background-color: var(--shape);
  border-radius: 4px;
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  &-header {
    display: flex;
    justify-content: space-between;

    > span {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  &-content {
    font-size: 2.25rem;
    line-height: 3.375rem;
  }

  &-green {
    background-color: var(--green);
    color: var(--shape);
  }
}
</style>
