function sqrtSimple(x) {
  if (x == 0 || x == 1) return x

  let i = 1
  let result = 1

  while (result <= x) {
    i += 1
    result = i * i
  }

  return i - 1
}

function sqrt(x) {
  if (x == 0 || x == 1) return x

  let start = 1
  let end = x
  let answer = 0

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (mid * mid === x) return mid

    if (mid * mid < x) {
      start = mid + 1
      answer = mid
    } else {
      end = mid - 1
    }
  }

  return answer
}

console.log('->', sqrt(4)) // -> 2
console.log('->', sqrt(9)) // -> 3
console.log('->', sqrt(10)) // -> 3
console.log('->', sqrt(25)) // -> 5
