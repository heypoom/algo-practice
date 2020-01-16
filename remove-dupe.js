function removeDuplicates(nums) {
  let len = nums.length
  if (len === 0) return 0

  let target = 1
  let prev = nums[0]

  for (let i = 1; i < len; i++) {
    if (nums[i] !== prev) {
      console.log(target, i, nums)

      prev = nums[i]
      nums[target] = nums[i]
      target++
    }
  }

  return target
}

let a = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
let len = removeDuplicates(a)
console.log(a.slice(0, len))
