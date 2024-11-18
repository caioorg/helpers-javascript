import { generateRandomInteger } from "."

describe("generateRandomInteger", () => {
  test("should return a value between the min and max (inclusive)", () => {
    const min = 1
    const max = 10

    for (let i = 0; i < 1000; i++) {
      const randomValue = generateRandomInteger(min, max)
      expect(randomValue).toBeGreaterThanOrEqual(min)
      expect(randomValue).toBeLessThanOrEqual(max)
    }
  })

  test("should work with negative numbers", () => {
    const min = -10
    const max = -1

    for (let i = 0; i < 1000; i++) {
      const randomValue = generateRandomInteger(min, max)
      expect(randomValue).toBeGreaterThanOrEqual(min)
      expect(randomValue).toBeLessThanOrEqual(max)
    }
  })

  test("should return the same value if min equals max", () => {
    const min = 5
    const max = 5

    for (let i = 0; i < 1000; i++) {
      const randomValue = generateRandomInteger(min, max)
      expect(randomValue).toBe(min)
    }
  })

  test("should handle decimal numbers correctly", () => {
    const min = 1.5
    const max = 3.5

    for (let i = 0; i < 1000; i++) {
      const randomValue = generateRandomInteger(min, max)
      expect(randomValue).toBeGreaterThanOrEqual(min)
      expect(randomValue).toBeLessThanOrEqual(max)
    }
  })
})
