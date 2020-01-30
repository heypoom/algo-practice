// Given a non-empty array containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

// Each of the array element will not exceed 100.
// The array size will not exceed 200.

function canPartition(nums) {
  nums.sort()

  let qs = [nums[0]]

  for (let i = 1; i < nums.length; i++) {
    qs[i] = nums[i] + qs[i - 1]
  }

  for (let pivot = 0; pivot < nums.length; pivot++) {
    if (qs[qs.length - 1] - nums[pivot] === nums[pivot]) return true
  }

  return false
}

// True ([1, 5, 5] and [11])
console.log(canPartition([1, 5, 11, 5]))

console.log(canPartition([1, 2, 3, 5])) // False
console.log(canPartition([3, 1, 2, 2])) // True
