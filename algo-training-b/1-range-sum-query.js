// Range Sum Query

function sumRange(list, start, end) {
  let sum = 0

  for (let i = start; i <= end; i++) sum += list[i]

  return sum
}

console.log(sumRange([1, 3, 5], 0, 2)) // 9
console.log(sumRange([1, 3, 5], 1, 2)) // 8
console.log(sumRange([1, 3, 5], 0, 1)) // 4
console.log(sumRange([1, 3, 5], 1, 1)) // 3
