function decodings(s) {
  let map = {}
  let answer = 0

  for (let level = 0; level < s.length; level++) {
    if (level > 0) {
      let joined = Number(s[level - 1] + s[level])

      if (joined <= 26) {
        console.log('->', joined)
        answer++
      }
    } else {
      if (!map[s[level]]) {
        map[s[level]] = true
        answer++
      }
    }
  }

  return answer
}

console.log(decodings('12')) // 2 (1 2, 12)
console.log(decodings('226')) // 3 (2 26, 22 6, 226)
console.log(decodings('999')) // 1 (9 9 9)
console.log(decodings('123456')) // 3 (1 2 3 4 5 6, 12 3 4 5 6, 1 23 4 5 6)
console.log(decodings('112233'))
// 6
// (1 12 2 3 3,
//  1 12 23 3,
//  1 1 2 23 3,
//  1 1 22 3 3
//  11 2 2 3 3
//  11 22 3 3),
