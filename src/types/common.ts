export interface Transaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  date: string;
  type: 'income' | 'outcome';
}
