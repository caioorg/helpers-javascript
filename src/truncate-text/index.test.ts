import { truncateText } from "."

describe("truncateText", () => {
  test("should truncate text and add ellipsis if length exceeds max length", () => {
    expect(truncateText("This is a very long text.", 10)).toBe("This is a ...")
    expect(truncateText("Short text", 10)).toBe("Short text")
  })

  test("should return the same string if length is within the limit", () => {
    expect(truncateText("Hello", 10)).toBe("Hello")
    expect(truncateText("Hello world", 15)).toBe("Hello world")
  })

  test("should handle an empty string correctly", () => {
    expect(truncateText("", 10)).toBe("")
  })

  test("should handle string equal to max length", () => {
    expect(truncateText("Hello world", 11)).toBe("Hello world")
  })

  test("should handle very large max length", () => {
    expect(truncateText("Short text", 100)).toBe("Short text")
  })
})
