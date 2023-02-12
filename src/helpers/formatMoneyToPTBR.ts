export default function formatMoneyToPTBR(amount: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(amount)
    .replace('R$', '')
    .trim();
}
