// Time Complexity: O(N) where N is count of numbers
// Space Complexity: O(N) where N is count of numbers

function firstMissingPositive(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 0) nums[i] = nums.length + 1
  }
}

console.log(firstMissingPositive([1, 2, 0])) // 3
console.log(firstMissingPositive([3, 4, -1, 1])) // 2
console.log(firstMissingPositive([7, 8, 9, 11, 12])) // 1
