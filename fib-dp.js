function fib(n, memo = []) {
  if (n === 0 || n === 1) return n

  if (!memo[n]) {
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
  }

  return memo[n]
}

function fib2(n) {
  if (n === 0) return 0

  let a = 0
  let b = 1

  for (let i = 2; i < n; i++) {
    let c = a + b

    a = b
    b = c
  }

  return a + b
}

// Compute nth fibonacci number.
// 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34 + 55

console.log(fib(3)) // 2
console.log(fib(5)) // 5
console.log(fib(10)) // 55
console.log(fib(50)) // ?

console.log(fib2(3)) // 2
console.log(fib2(5)) // 5
console.log(fib2(10)) // 55
console.log(fib2(50)) // ?
