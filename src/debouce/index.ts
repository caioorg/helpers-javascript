export function debounce(func: Function, delay: number) {
  if (typeof func !== "function") {
    throw new Error("func must be a function")
  }

  let timer: number
  return function (...args: any[]) {
    clearTimeout(timer)
    timer = setTimeout(() => func.apply(this, args), delay)
  }
}
