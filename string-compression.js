function compress(str) {
  let prev = str[0]
  let count = 0
  let result = ''

  for (let token of str) {
    if (token !== prev) {
      result += prev + count
      count = 0
    }

    count++
    prev = token
  }

  result += prev + count

  console.log('//', str, '->', result)

  if (result.length > str.length) return str

  return result
}

console.log(compress('aabcccccaaa'))
console.log(compress('pppaabcccdeee'))
console.log(compress('abcdefgh'))
