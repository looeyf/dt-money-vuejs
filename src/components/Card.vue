<script setup lang="ts">
import IncomesImg from '@/assets/incomes.svg?component';
import OutcomesImg from '@/assets/incomes.svg?component';
import TotalImg from '@/assets/incomes.svg?component';

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
      <IncomesImg v-if="props.type === 'Entradas'" aria-label="Entradas" />
      <OutcomesImg v-else-if="props.type === 'Saídas'" aria-label="Saídas" />
      <TotalImg v-else aria-label="Total" />
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
