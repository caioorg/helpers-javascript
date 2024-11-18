import { maskCPFAndCNPJ } from "."

describe("maskCPFAndCNPJ", () => {
  test("applies CPF mask correctly", () => {
    expect(maskCPFAndCNPJ("12345678901")).toBe("123.456.789-01")
  })

  test("applies CNPJ mask correctly", () => {
    expect(maskCPFAndCNPJ("12345678000195")).toBe("12.3456.7800/01-95")
  })

  test("throws error if document is empty", () => {
    expect(() => maskCPFAndCNPJ("")).toThrow("Document is required.")
  })

  test("throws error if document is not 11 or 14 digits", () => {
    expect(() => maskCPFAndCNPJ("12345")).toThrow("Invalid document format.")
  })

  test("removes non-numeric characters before applying mask", () => {
    expect(maskCPFAndCNPJ("123.456.789-01")).toBe("123.456.789-01")
    expect(maskCPFAndCNPJ("12.3456.7800/01-95")).toBe("12.3456.7800/01-95")
  })
})
