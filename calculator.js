function calc(str) {
  let stack = []

  str = str.trim()
  str = `(${str})`

  for (let token of str) {
    if (token !== ')') {
      stack.push(token)
    } else {
      let plus = []
      let minus = []

      let ops = ['+', '-', '(']

      while (stack[stack.length - 1] !== '(') {
        let n = ''

        while (!ops.includes(stack[stack.length - 1])) {
          n = stack.pop() + n

          console.log(n)
        }

        let op = '+'

        if (['+', '-'].includes(stack[stack.length - 1])) {
          op = stack.pop()
        }

        if (op === '+') plus.push(Number(n))
        else minus.push(Number(n))
      }

      stack.pop()

      let adds = plus.reduce((a, b) => a + b, 0)
      let subs = minus.reduce((a, b) => a + b, 0)

      stack.push(adds - subs)
    }
  }

  return stack.pop()
}

// console.log(calc('1+2')) // 3
// console.log(calc('5+(2-4)')) // 3
// console.log(calc('1-2-4')) // -5
// console.log(calc('5+9+2')) // 16
// console.log(calc('(1+2)-(5+4)')) // -6
console.log(calc('(80-3)+(1+2+3)')) // 11
