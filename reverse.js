function reverse(n) {
  let reversed = 0
  let isNegative = false

  if (n < 0) {
    isNegative = true
    n = Math.abs(n)
  }

  while (n > 0) {
    reversed = reversed * 10 + (n % 10)

    n = Math.floor(n / 10)
  }

  if (reversed > Math.pow(2, 31) - 1) return 0
  if (reversed < -Math.pow(2, 31)) return 0

  if (isNegative) return -reversed

  return reversed
}

console.log(reverse(-123456))
