import { convertToAmericanFormat } from "."

describe("convertToAmericanFormat", () => {
  test("converts Brazilian date to American format", () => {
    expect(convertToAmericanFormat("15/11/2024")).toBe("11/15/2024")
  })

  test("handles single-digit day and month correctly", () => {
    expect(convertToAmericanFormat("01/01/2024")).toBe("01/01/2024")
  })

  test("throws error when input is invalid", () => {
    expect(() => convertToAmericanFormat("2024/11/15")).toThrow(
      "Invalid date format. Expected DD/MM/YYYY."
    )
  })

  test("throws error when input is empty", () => {
    expect(() => convertToAmericanFormat("")).toThrow("Date is required.")
  })
})
