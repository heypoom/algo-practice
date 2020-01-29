function makeValid(str) {
  let stack = []
  let chars = [...str]

  for (let i = 0; i < str.length; i++) {
    let token = chars[i]

    if (token == '(') {
      stack.push(i)

      continue
    }

    if (token == ')') {
      if (stack.length === 0) {
        chars[i] = ''
      } else {
        stack.pop()
      }
    }
  }

  while (stack.length > 0) {
    let token = stack.pop()

    chars[token] = ''
  }

  return chars.join('').trim()
}

console.log(makeValid('lee(t(c)o)de)'))
console.log(makeValid('a)b(c)d'))
console.log(makeValid('))(('))
console.log(makeValid('(a(b(c)d)'))
