export function capitalizeFirstLetter(value: string): string {
  return (
    value.charAt(0).toLocaleUpperCase() + value.slice(1).toLocaleLowerCase()
  )
}
