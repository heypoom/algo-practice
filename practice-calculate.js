function calculate(str) {
  str = str.trim()

  let stack = []
  str = `(${str})`

  for (let token of str) {
    if (token !== ')') {
      stack.push(token)
    } else {
      let plus = []
      let minus = []

      let ops = ['+', '-', '(']

      while (stack[stack.length - 1] !== ')') {
        let n = ''

        while (!ops.includes(stack[stack.length - 1])) {
          n = stack.pop() + n
        }

        let op = '+'
        let tail = stack[stack.length - 1]

        if (tail !== '+' && tail !== '-') {
          op = stack.pop()
        }

        if (op === '+') plus.push(Number(n))
        else minus.push(Number(n))
      }

      stack.pop()

      let adds = plus.reduce((a, b) => a + b)
      let minuses = minus.reduce((a, b) => a + b)

      stack.push(adds - minuses)
    }
  }

  return stack.pop()
}

console.log(calculate('5-2'))
console.log(calculate('8-2+(9+2)'))
console.log(calculate('55+50'))
