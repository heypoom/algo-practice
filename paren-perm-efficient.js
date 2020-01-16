function parenPerm(n) {
  let output = []

  function gen(str, opens, closes, level, output = []) {
    // When paren numbers are exhausted
    if (opens == 0 && closes == 0) {
      if (level == 0) output.push(str)

      return
    }

    // Open
    if (opens > 0) {
      gen(str + '(', opens - 1, closes, level + 1, output)
    }

    // Close
    if (closes > 0 && level > 0) {
      gen(str + ')', opens, closes - 1, level - 1, output)
    }
  }

  gen('', n, n, 0, output)

  return output
}

console.log(parenPerm(9).join('\n'))
