import { hexToRgba } from "./index"

describe("hexToRgba", () => {
  it("converts 6-character hex to rgba correctly", () => {
    expect(hexToRgba("#3498db", 0.8)).toBe("rgba(52, 152, 219, 0.8)")
  })

  test("converts 3-character hex to rgba correctly", () => {
    expect(hexToRgba("#fff", 1)).toBe("rgba(255, 255, 255, 1)")
  })

  test("handles black color correctly", () => {
    expect(hexToRgba("#000", 0.5)).toBe("rgba(0, 0, 0, 0.5)")
  })

  test("handles 6-character hex without alpha correctly", () => {
    expect(hexToRgba("#123456")).toBe("rgba(18, 52, 86, 1)")
  })

  test("converts complex color to rgba with specified alpha", () => {
    expect(hexToRgba("#aabbcc", 0.3)).toBe("rgba(170, 187, 204, 0.3)")
  })
})
