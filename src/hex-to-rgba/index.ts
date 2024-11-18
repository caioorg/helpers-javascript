export function hexToRgba(hex: string, alpha: number = 1) {
  hex = hex.replace(/^#/, "")

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("")
  }

  if (!/^([0-9A-Fa-f]{6})$/.test(hex)) {
    throw new Error("Formato inválido de hexadecimal")
  }

  const bigint = parseInt(hex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
