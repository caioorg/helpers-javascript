export function maskCPFAndCNPJ(document: string): string {
  if (!document) throw new Error("Document is required.")

  const onlyNumbers = document.replace(/\D/g, "")

  if (onlyNumbers.length === 11) {
    return onlyNumbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
  }

  if (onlyNumbers.length === 14) {
    return onlyNumbers.replace(
      /(\d{2})(\d{4})(\d{4})(\d{2})(\d{2})/,
      "$1.$2.$3/$4-$5"
    )
  }

  throw new Error("Invalid document format.")
}
