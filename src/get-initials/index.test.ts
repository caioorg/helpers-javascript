import { getInitials } from "./index"

describe("getInitials", () => {
  test("returns initials for full name with three parts", () => {
    expect(getInitials("Caio Almeida Silva")).toBe("CS") // Primeira e última inicial
  })

  test("returns initials for full name with two parts", () => {
    expect(getInitials("Caio Almeida")).toBe("CA") // Primeira e última inicial
  })

  test("returns initials for full name with multiple middle names", () => {
    expect(getInitials("João Pereira de Almeida")).toBe("JA") // Primeira e última inicial
  })

  test("returns initial for single name", () => {
    expect(getInitials("Caio")).toBe("C") // Só um nome
  })

  test("throws error if name is empty", () => {
    expect(() => getInitials("")).toThrow("Name is required.")
  })

  test("handles extra spaces correctly", () => {
    expect(getInitials("  Caio   Almeida Silva  ")).toBe("CS") // Ignora espaços extras
  })

  test("handles names with special characters", () => {
    expect(getInitials("João-Antônio Pereira")).toBe("JP") // Caractere especial no nome
  })

  test("returns initial for single-letter name", () => {
    expect(getInitials("A")).toBe("A") // Caso de nome de uma só letra
  })
})
