function longestSubstr(s) {
  if (s.length < 2) return s.length

  let map = {}
  let str = ''
  let max = 0

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      if (str.length > max) max = str.length

      str = ''
      map = {}
    }

    if (s[i - 1] !== i) {
      str += s[i]
      map[s[i]] = true
      console.log(s, s[i], map)
    }
  }

  return max
}

console.log(longestSubstr('abcabcbb')) // 3
console.log(longestSubstr(' ')) // 1
console.log(longestSubstr('au')) // 2
console.log(longestSubstr('dvdf')) // 2
