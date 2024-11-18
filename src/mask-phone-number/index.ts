export function maskPhoneNumberBR(
  phone: string,
  withCountryCode: boolean = false
): string {
  if (!phone) throw new Error("Phone number is required.")

  const onlyNumbers = phone.replace(/\D/g, "")

  if (onlyNumbers.length === 11) {
    const maskedPhone = onlyNumbers.replace(
      /(\d{2})(\d{5})(\d{4})/,
      "($1) $2-$3"
    )

    return withCountryCode ? `+55 ${maskedPhone}` : maskedPhone
  }

  throw new Error("Invalid phone number format. Expected 11 digits.")
}
