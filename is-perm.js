function isPerm(a, b) {
  let cA = {}
  let cB = {}

  function count(map, list) {
    for (let token of list) {
      if (!map[token]) map[token] = 1
      else map[token]++
    }
  }

  count(cA, a)
  count(cB, b)

  if (Object.values(cA).length !== Object.values(cB).length) return false

  for (let key in cA) if (cA[key] !== cB[key]) return false

  return true
}

console.log(isPerm('abba', 'baab')) // true
console.log(isPerm('aba', 'cac')) // false
console.log(isPerm('abba', 'baabkek')) // false
console.log(isPerm('abba', 'baabbba')) // false
