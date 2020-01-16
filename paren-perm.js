function isParenValid(str) {
  let stack = []
  let parenMap = {'(': ')', '{': '}', '[': ']'}

  for (let token of str) {
    if (token in parenMap) stack.push(token)
    else if (parenMap[stack.pop()] !== token) return false
  }

  return stack.length === 0
}

function perm(n) {
  let perms = []

  function _gen(str = '', level = 0) {
    if (level === n) {
      if (isParenValid(str)) perms.push(str)
      return
    }

    _gen(str + '(', level + 1)
    _gen(str + ')', level + 1)
  }

  _gen()

  return perms
}

function permUntil(n) {
  let perms = []

  for (let i = 1; i <= n; i++) perms = [...perms, ...perm(i)]

  return perms
}

console.log(permUntil(10).join('\n'))
