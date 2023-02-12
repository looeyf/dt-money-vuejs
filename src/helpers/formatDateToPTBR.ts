export default function dateFormatToPTBR(date: string): string {
  const formatStringToDate = new Date(date);
  return new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(formatStringToDate);
}
