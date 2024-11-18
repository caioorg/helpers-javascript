export function getInitials(name: string): string {
  if (!name) throw Error("Name is required.")

  const words = name.trim().split(/\s+/)

  if (words.length === 1) {
    return words[0][0].toUpperCase()
  }

  const initials =
    words[0][0].toUpperCase() + words[words.length - 1][0].toUpperCase()

  return initials
}
