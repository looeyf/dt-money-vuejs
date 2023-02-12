<script setup lang="ts">
import IncomesImg from '@/assets/incomes.svg?component';
import OutcomesImg from '@/assets/outcomes.svg?component';
import TotalImg from '@/assets/total.svg?component';
import formatMoneyToPTBR from '@/helpers/formatMoneyToPTBR';
import { computed } from 'vue';

interface Props {
  type: 'Entradas' | 'Saídas' | 'Total';
  amount: number;
}

const props = defineProps<Props>();

const formattedMoney = computed(() => formatMoneyToPTBR(props.amount).split(','));
</script>

<template>
  <div :class="['card', { 'card-green': props.type === 'Total' }]">
    <header class="card-header">
      <span>{{ props.type }}</span>
      <IncomesImg v-if="props.type === 'Entradas'" aria-label="Entradas" />
      <OutcomesImg v-else-if="props.type === 'Saídas'" aria-label="Saídas" />
      <TotalImg v-else aria-label="Total" />
    </header>

    <p class="card-content">
      R$ <b>{{ formattedMoney[0] }}</b
      >,{{ formattedMoney[1] }}
    </p>
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

    > b {
      font-weight: 500;
    }
  }

  &-green {
    background-color: var(--green);
    color: var(--shape);
  }
}
</style>
