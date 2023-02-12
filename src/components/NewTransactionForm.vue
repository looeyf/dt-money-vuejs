<script setup lang="ts">
import { useTransactionsStore } from '@/stores/transactions';
import type { Transaction } from '@/types/common';
import Button from './Button.vue';
import IncomeIcon from '@/assets/incomes.svg?component';
import OutcomeIcon from '@/assets/outcomes.svg?component';
import { ref } from 'vue';

const emit = defineEmits<{
  (event: 'onCreateTransaction'): void;
}>();

const transactionsStore = useTransactionsStore();

const addNewTransaction = (transaction: Transaction) => {
  transaction.date = new Date().toISOString();
  transactionsStore.addTransaction(transaction);

  formData.value = {} as Transaction;
  emit('onCreateTransaction');
};

const formData = ref<Transaction>({} as Transaction);
</script>

<template>
  <h2>Cadastrar transação</h2>

  <form @submit.prevent="addNewTransaction(formData)">
    <input v-model="formData.title" type="text" placeholder="Nome" required />
    <input v-model="formData.amount" type="number" placeholder="Preço" required />
    <div class="form-group">
      <label class="input-radio">
        <input
          v-model="formData.type"
          class="income"
          type="radio"
          name="transactionType"
          value="income"
          required
        />
        <span>
          <IncomeIcon aria-label="Entrada" />
          Entrada
        </span>
      </label>

      <label class="input-radio">
        <input
          v-model="formData.type"
          class="outcome"
          type="radio"
          name="transactionType"
          value="outcome"
          required
        />
        <span>
          <OutcomeIcon aria-label="Saída" />
          Saída
        </span>
      </label>
    </div>
    <input v-model="formData.category" type="text" placeholder="Categoria" required />

    <Button variant="green" type="submit">Cadastrar</Button>
  </form>
</template>

<style lang="scss" scoped>
h2 {
  color: var(--text-title);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .form-group {
    display: flex;
    gap: 0.5rem;
  }

  input {
    border-radius: 4px;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  input[type='text'],
  input[type='number'] {
    min-width: 30rem;
    padding: 1.25rem 1.5rem;

    background-color: #e7e9ee;
    border: 1px solid #d7d7d7;
    transition: 0.3s border-color ease-in-out;

    &::placeholder {
      color: #969cb2;
    }

    &:focus,
    &:focus-visible {
      outline: none;
      border-color: var(--blue);
    }
  }

  .input-radio {
    min-width: 15rem;

    input[type='radio'] {
      appearance: none;
      display: none;

      &.income:checked + span {
        background-color: rgba(18, 164, 84, 0.1);
      }

      &.outcome:checked + span {
        background-color: rgba(230, 46, 77, 0.1);
      }
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.125rem;

      padding: 1.25rem 1.25rem;
      color: var(--text-title);
      border: 1px solid #d7d7d7;
      border-radius: 4px;

      transition: 0.3s background-color ease-in-out;
      cursor: pointer;
    }
  }

  button {
    padding-top: 1.25rem !important;
    padding-bottom: 1.25rem !important;
  }
}
</style>
