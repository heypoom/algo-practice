function moveZeroes(nums) {
  let zeros = nums.length

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      for (let j = i; j < zeros - 1; j++) {
        let t = nums[j]

        nums[j] = nums[j + 1]
        nums[j + 1] = t
      }

      zeros--
    }
  }

  return nums
}

console.log(moveZeroes([1, 2, 3, 0, 0, 0]))
console.log(moveZeroes([0, 1, 0, 2, 0, 3]))
console.log(moveZeroes([0, 0, 0, 2, 3, 4]))
