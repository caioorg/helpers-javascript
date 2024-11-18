export function rgbaToHex(
  r: number,
  g: number,
  b: number,
  a: number = 1
): string {
  const toHex = (value: number): string => {
    const hex = value.toString(16)
    return hex.length === 1 ? "0" + hex : hex
  }

  const red: string = toHex(r)
  const green: string = toHex(g)
  const blue: string = toHex(b)

  const alpha: string = toHex(Math.round(a * 255))

  return `#${red}${green}${blue}${alpha}`
}
