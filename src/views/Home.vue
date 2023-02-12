<script setup lang="ts">
import Card from '@/components/Card.vue';
import type { Transaction } from '@/types/common';
import { computed } from 'vue';
import { useTransactionsStore } from '@/stores/transactions';
import formatDateToPTBR from '@/helpers/formatDateToPTBR';
import formatMoneyToPTBR from '@/helpers/formatMoneyToPTBR';

const transactionsStore = useTransactionsStore();

const transactions = computed(() => transactionsStore.transactions);

const isOutcome = (transaction: Transaction) => transaction.type === 'outcome';
</script>

<template>
  <div class="container pt-0">
    <div class="summary">
      <Card type="Entradas" :amount="transactionsStore.incomes" />
      <Card type="Saídas" :amount="transactionsStore.outcomes" />
      <Card type="Total" :amount="transactionsStore.total" />
    </div>

    <div class="table">
      <div class="table-row table-header">
        <span class="column-title">Título</span>
        <span class="column-value">Preço</span>
        <span class="column-category">Categoria</span>
        <span class="column-date">Data</span>
      </div>

      <div class="table-body" v-if="transactions.length">
        <div class="table-row" v-for="transaction in transactions" :key="transaction.id">
          <span class="column-title">{{ transaction.title }}</span>
          <span :class="['column-value', { 'column-value--outcome': isOutcome(transaction) }]">{{
            formatMoneyToPTBR(transaction.amount)
          }}</span>
          <span class="column-category">{{ transaction.category }}</span>
          <span class="column-date">{{ formatDateToPTBR(transaction.date) }}</span>
        </div>
      </div>
      <div class="table-empty" v-else>
        <h4>Nenhuma transação realizada até o momento.</h4>
      </div>
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

.table {
  display: flex;
  flex-direction: column;
  color: var(--text-body);

  &-row {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 0.5rem;
    padding: 1.25rem 2rem;

    > span {
      &.column {
        &-title {
          grid-column: span 5;
        }
        &-value {
          grid-column: span 3;
        }
        &-category {
          grid-column: span 3;
        }
        &-date {
          grid-column: span 1;
        }
      }
    }
  }

  &-header {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  &-body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .table-row {
      background-color: var(--shape);
      border-radius: 4px;

      .column {
        &-title {
          color: var(--text-title);
        }
        &-value {
          color: var(--green);

          &--outcome {
            color: var(--red);
          }
        }
      }
    }
  }

  &-empty {
    display: flex;
    justify-content: center;
  }
}
</style>
