function calculate(str) {
  str.trim()
  str = `(${str})`

  let stack = []

  for (let token of str) {
    if (token !== ')') {
      stack.push(token)
    } else {
      let plus = []
      let minus = []

      while (stack[stack.length - 1] !== '(') {
        // 1 -- Read number to n.
        let n = ''
        let ops = ['+', '-', '(']

        while (!ops.includes(stack[stack.length - 1])) {
          n = stack.pop() + n
        }

        // 2 -- Read the operation sign.
        let op = '+'
        let tail = stack[stack.length - 1]

        if (tail === '+' || tail === '-') {
          op = stack.pop()
        }

        // 3 -- Push to plus or minus array.
        if (op === '+') plus.push(Number(n))
        else minus.push(Number(n))
      }

      stack.pop()

      let sumPlus = plus.reduce((a, b) => a + b, 0)
      let sumMinus = minus.reduce((a, b) => a + b, 0)

      stack.push(sumPlus - sumMinus)
    }
  }

  return stack.pop()
}

console.log(calculate('10+20-(50+20)'))
