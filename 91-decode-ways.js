function numDecodings(s) {
  let count = 0
  let map = new Map()

  function decode(s) {
    console.log(s)

    if (!s) return count++
    if (s[0] === '0') return

    console.log('N')

    if (map.has(s)) {
      count += map.get(s)
      return
    }

    decode(s.slice(1))

    if (s.length >= 2 && Number(s.slice(0, 2)) < 27) {
      decode(s.slice(2))
    }

    map.set(s, count)
  }

  decode(s)

  return count
}

// console.log(numDecodings('12')) // 2 (1 2, 12)
// console.log(numDecodings('226')) // 3 (2 26, 22 6, 226)
// console.log(numDecodings('999')) // 1 (9 9 9)
// console.log(numDecodings('123456')) // 3 (1 2 3 4 5 6, 12 3 4 5 6, 1 23 4 5 6)
console.log(numDecodings('123456'))
