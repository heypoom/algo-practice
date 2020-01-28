// Time Complexity: O(N) where N is length of array, used in preprocessing and update. O(1) for lookup
// Space Complexity: O(N) where N is length of array, which is used for storing memoized data.

function createSumRange(input) {
  let memo = []

  function recompute(start) {
    if (start <= 1) start = 1

    memo = [input[0]]

    for (let i = start; i < input.length; i++) {
      memo[i] = input[i] + memo[i - 1]
    }
  }

  recompute(1)

  function update(i, val) {
    input[i] = val
    recompute(i - 1)
  }

  function sumRange(start, end) {
    if (start === 0) return memo[end]

    return memo[end] - memo[start - 1]
  }

  return {sumRange, update}
}

const {sumRange, update} = createSumRange([2, 3, 4, 5, 6])

console.log(sumRange(0, 2)) // 9
console.log(sumRange(2, 3)) // 9
console.log(sumRange(2, 4)) // 15
console.log(sumRange(0, 0)) // 2
console.log(sumRange(0, 4)) // 20

update(0, 9)
update(1, 9)
update(2, 9)

console.log(sumRange(0, 4)) // 9 + 9 + 9 + 5 + 6 = 38
