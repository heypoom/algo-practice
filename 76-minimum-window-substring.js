function minWindow(s, t) {
  if (!s || !t) return ''

  let counter = {}

  for (let c of t) {
    if (!counter[c]) counter[c] = 1
    else counter[c]++
  }

  let l = 0
  let r = 0

  let unique = 0
  let charsMap = {}

  let answer = [Infinity]
}
