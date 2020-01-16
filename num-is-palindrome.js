function isPalindromeNumber(x) {
  if (x < 0) return false

  let left = 1

  while (Math.floor(x / left) >= 10) {
    left = left * 10
  }

  let right = 1

  while (left > right) {
    if (Math.floor(x / left) % 10 !== Math.floor(x / right) % 10) {
      return false
    }

    left = Math.floor(left / 10)
    right = right * 10
  }

  return true
}

console.log(isPalindromeNumber(1024201))
console.log(isPalindromeNumber(4004))
console.log(isPalindromeNumber(10201))
console.log(isPalindromeNumber(123))
