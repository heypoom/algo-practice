// Given a non-empty array containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

// Each of the array element will not exceed 100.
// The array size will not exceed 200.

function canPartition(nums) {
  let sum = nums.reduce((a, b) => a + b, 0)
  if (sum % 2 === 1) return false

  nums.sort()

  let mid = Math.floor(sum / 2)
  let cache = {}

  function check(sum, i) {
    let key = sum + '|' + i
    if (key in cache) return cache[key]

    if (sum === mid) return true
    if (sum > mid) return false
    if (i < 0) return false

    cache[key] = check(sum + nums[i], i - 1) || check(sum, i - 1)

    console.log('CL', Object.keys(cache).length)

    return cache[key]
  }

  return check(0, nums.length - 1)
}

// True ([1, 5, 5] and [11])
console.log(canPartition([1, 5, 11, 5]))

console.log(canPartition([1, 2, 3, 5])) // False
console.log(canPartition([3, 1, 2, 2])) // True
console.log(
  canPartition([
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    100,
  ]),
)
