export function convertToAmericanFormat(date: string): string {
  if (!date) throw new Error("Date is required.")

  // Verifica se a data está no formato DD/MM/YYYY
  const datePattern = /^\d{2}\/\d{2}\/\d{4}$/

  if (!datePattern.test(date)) {
    throw new Error("Invalid date format. Expected DD/MM/YYYY.")
  }

  const [day, month, year] = date.split("/")

  return `${month.trim()}/${day.trim()}/${year.trim()}`
}
