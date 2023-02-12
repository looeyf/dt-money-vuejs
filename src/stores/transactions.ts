import { defineStore } from 'pinia';
import type { Transaction } from '@/types/common';
import TransactionsMock from '@/mocks/transactions';

interface Store {
  transactions: Transaction[];
}

export const useTransactionsStore = defineStore('transactions', {
  state: (): Store => ({ transactions: [...TransactionsMock] }),
  getters: {
    summary: (state) => {
      return state.transactions.reduce(
        (acc, transaction) => {
          if (transaction.type === 'income') {
            acc.incomes += transaction.amount;
            acc.total += transaction.amount;
          } else {
            acc.outcomes += transaction.amount;
            acc.total -= transaction.amount;
          }

          return acc;
        },
        {
          incomes: 0,
          outcomes: 0,
          total: 0,
        }
      );
    },
  },
  actions: {
    addTransaction(transaction: Transaction) {
      this.transactions.unshift(transaction);
    },
  },
});
