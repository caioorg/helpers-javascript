import { rgbaToHex } from "./index"

describe("rgbaToHex", () => {
  test("converts rgba to hex correctly with alpha", () => {
    expect(rgbaToHex(52, 152, 219, 0.8)).toBe("#3498dbcc")
  })

  test("converts rgba to hex correctly with alpha = 1", () => {
    expect(rgbaToHex(255, 255, 255, 1)).toBe("#ffffffff")
  })

  test("converts rgba to hex correctly with alpha = 0.5", () => {
    expect(rgbaToHex(0, 0, 0, 0.5)).toBe("#00000080")
  })

  test("handles conversion without alpha parameter (defaults to 1)", () => {
    expect(rgbaToHex(18, 52, 86)).toBe("#123456ff")
  })

  test("converts edge cases like black with alpha 0", () => {
    expect(rgbaToHex(0, 0, 0, 0)).toBe("#00000000")
  })

  test("converts edge cases like red with alpha 1", () => {
    expect(rgbaToHex(255, 0, 0, 1)).toBe("#ff0000ff")
  })
})
