function palindPerm(str) {
  let charCounter = {}

  for (let token of str) {
    if (!charCounter[token]) charCounter[token] = 1
    else charCounter[token]++
  }

  let one = false

  for (let token in charCounter) {
    if (charCounter[token] === 1) {
      if (one) return false
      one = true
    }
  }

  return true
}

console.log(palindPerm('tactcoa'))
console.log(palindPerm('tacocat'))
console.log(palindPerm('zucchini'))
console.log(palindPerm('aaabbaa'))
console.log(palindPerm('accbbaa'))
