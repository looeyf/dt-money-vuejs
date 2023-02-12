import { defineStore } from 'pinia';
import type { Transaction } from '@/types/common';
import TransactionsMock from '@/mocks/transactions';

interface Store {
  transactions: Transaction[];
}

const getAmountFromType = (type: 'income' | 'outcome', transaction: Transaction) =>
  transaction.type === type ? transaction.amount : 0;

export const useTransactionsStore = defineStore('transactions', {
  state: (): Store => ({ transactions: [...TransactionsMock] }),
  getters: {
    incomes: (state) =>
      state.transactions.reduce((acc, item) => (acc += getAmountFromType('income', item)), 0),
    outcomes: (state) =>
      state.transactions.reduce((acc, item) => (acc += getAmountFromType('outcome', item)), 0),
    total: (state) =>
      state.transactions.reduce(
        (acc, item) => (item.type === 'income' ? (acc += item.amount) : acc + -item.amount),
        0
      ),
  },
  actions: {
    addTransaction(transaction: Transaction) {
      this.transactions.unshift(transaction);
    },
  },
});
