import { debounce } from "./"

jest.useFakeTimers()

describe("debounce", () => {
  test("should call the function after the specified delay", () => {
    const mockFn = jest.fn()
    const debouncedFn = debounce(mockFn, 300)

    debouncedFn()
    debouncedFn()
    debouncedFn()

    expect(mockFn).not.toHaveBeenCalled()

    jest.advanceTimersByTime(300)

    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  test("should clear the previous timeout if called again within delay", () => {
    const mockFn = jest.fn()
    const debouncedFn = debounce(mockFn, 500)

    debouncedFn()
    debouncedFn()

    jest.advanceTimersByTime(500)

    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  test("should handle multiple calls with different arguments", () => {
    const mockFn = jest.fn()
    const debouncedFn = debounce(mockFn, 300)

    debouncedFn(1)
    debouncedFn(2)
    debouncedFn(3)

    expect(mockFn).not.toHaveBeenCalled()

    jest.advanceTimersByTime(300)

    expect(mockFn).toHaveBeenCalledWith(3)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  test("should throw an error if func is not a function", () => {
    expect(() => debounce(null as any, 300)).toThrow("func must be a function")
    expect(() => debounce("notAFunction" as any, 300)).toThrow(
      "func must be a function"
    )
  })
})
