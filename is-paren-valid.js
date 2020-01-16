function isParenValid(str) {
  let stack = []
  let parenMap = {'(': ')', '{': '}', '[': ']'}

  for (let token of str) {
    if (token in parenMap) stack.push(token)
    else if (parenMap[stack.pop()] !== token) return false
  }

  return stack.length === 0
}

console.log(isParenValid('(({[]}))'))
console.log(isParenValid('(({[]})'))
console.log(isParenValid('(({[bbbb'))
