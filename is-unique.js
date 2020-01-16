function isUnique(str) {
  let charMap = {}

  for (let token of str) {
    if (charMap[token]) return false

    charMap[token] = token
  }

  return true
}

function isUniqueWithSort(str) {
  let list = Array.from(str).sort()
  let prev = ''

  for (let token of list) {
    if (prev === token) return false

    prev = token
  }

  return true
}

console.log(isUnique('abcdefg')) // true
console.log(isUnique('aaeeffg')) // false

console.log(isUniqueWithSort('abcdefg')) // true
console.log(isUniqueWithSort('aaeeffg')) // false
