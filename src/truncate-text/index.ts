export function truncateText(value: string, maxLenght: number): string {
  if (value.length <= maxLenght) return value

  return `${value.substring(0, maxLenght)}...`
}
