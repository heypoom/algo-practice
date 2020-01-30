function match(str, pattern) {
  let memo = {}

  function scan(i, j) {
    if (!memo[i + '|' + j]) {
      let ans

      if (j === pattern.length) {
        ans = i === str.length
      } else {
        m = i < str.length && [str[i], '.'].includes(pattern[j])

        if (j + 1 < pattern.length && pattern[j + 1] === '*') {
          ans = scan(i, j + 2) || (m && scan(i + 1, j))
        } else {
          ans = m && scan(i + 1, j + 1)
        }
      }

      memo[i + '|' + j] = ans
    }

    return memo[i + '|' + j]
  }

  return scan(0, 0)
}

console.log(match('aa', 'a')) // False
console.log(match('aa', 'a*')) // True
console.log(match('ab', '.*')) // True
console.log(match('aab', 'c*a*b*')) // False
console.log(match('aab', 'a*b*')) // False
console.log(match('mississippi', 'mis*is*p*')) // False
