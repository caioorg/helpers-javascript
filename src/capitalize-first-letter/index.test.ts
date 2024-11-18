import { capitalizeFirstLetter } from "."

describe("capitalizeFirstLetter", () => {
  test("should capitalize the first letter and make the rest lowercase", () => {
    expect(capitalizeFirstLetter("caio")).toBe("Caio")
    expect(capitalizeFirstLetter("CAIO")).toBe("Caio")
    expect(capitalizeFirstLetter("cAiO")).toBe("Caio")
  })

  test("should return empty string if input is empty", () => {
    expect(capitalizeFirstLetter("")).toBe("")
  })

  test("should handle single character correctly", () => {
    expect(capitalizeFirstLetter("a")).toBe("A")
    expect(capitalizeFirstLetter("A")).toBe("A")
  })

  test("should handle strings with spaces at the beginning", () => {
    expect(capitalizeFirstLetter("  hello")).toBe("  hello")
  })

  test("should handle special characters correctly", () => {
    expect(capitalizeFirstLetter("!hello")).toBe("!hello")
    expect(capitalizeFirstLetter("#caio")).toBe("#caio")
  })
})
