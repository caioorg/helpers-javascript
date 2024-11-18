import { maskPhoneNumberBR } from "./index"

describe("maskPhoneNumberBR", () => {
  test("applies phone mask correctly without country code", () => {
    expect(maskPhoneNumberBR("12345678901")).toBe("(12) 34567-8901")
    expect(maskPhoneNumberBR("98765432100")).toBe("(98) 76543-2100")
  })

  test("applies phone mask correctly with country code", () => {
    expect(maskPhoneNumberBR("12345678901", true)).toBe("+55 (12) 34567-8901")
    expect(maskPhoneNumberBR("98765432100", true)).toBe("+55 (98) 76543-2100")
  })

  test("throws error if phone number is empty", () => {
    expect(() => maskPhoneNumberBR("")).toThrow("Phone number is required.")
  })

  test("throws error if phone number is not 11 digits", () => {
    expect(() => maskPhoneNumberBR("12345")).toThrow(
      "Invalid phone number format. Expected 11 digits."
    )
  })

  test("removes non-numeric characters before applying mask", () => {
    expect(maskPhoneNumberBR("(12) 34567-8901")).toBe("(12) 34567-8901")
    expect(maskPhoneNumberBR("98 76543 2100")).toBe("(98) 76543-2100")
  })

  test("handles country code correctly when adding +55", () => {
    expect(maskPhoneNumberBR("12345678901", true)).toBe("+55 (12) 34567-8901")
    expect(maskPhoneNumberBR("98765432100", true)).toBe("+55 (98) 76543-2100")
  })
})
