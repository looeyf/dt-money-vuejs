import type { Transaction } from '@/types/common';
const transactionsMock: Transaction[] = [
  {
    id: 5,
    title: 'Orçamento de APP',
    amount: 1000,
    category: 'Venda',
    date: '2022-01-29',
    type: 'income',
  },
  {
    id: 4,
    title: 'Churrasco',
    amount: 90,
    category: 'Compra',
    date: '2022-01-20',
    type: 'outcome',
  },
  {
    id: 3,
    title: 'Mouse sem fio',
    amount: 400,
    category: 'Compra',
    date: '2022-01-12',
    type: 'outcome',
  },
  {
    id: 2,
    title: 'Pizza',
    amount: 30,
    category: 'Compra',
    date: '2022-01-10',
    type: 'outcome',
  },
  {
    id: 1,
    title: 'Desenvolvimento de site',
    amount: 12000,
    category: 'Venda',
    date: '2022-01-03',
    type: 'income',
  },
];

export default transactionsMock;
