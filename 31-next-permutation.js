// Time Complexity: O(N)
// Space Complexity: O(1)

function nextPermutation(nums) {
  let i = nums.length - 1
  while (i > 0 && nums[i] <= nums[i - 1]) i--

  console.log('i =', i)

  if (i === 0) return nums.reverse()

  function swap(a, b) {
    let temp = nums[a]

    nums[a] = nums[b]
    nums[b] = temp
  }

  let j = nums.length - 1

  let k = i - 1
  while (nums[j] <= nums[k]) j--

  swap(j, k)

  // Reverse the integer.
  i = k + 1
  j = nums.length - 1

  while (i < j) {
    swap(i, j)
    i++
    j--
  }

  return nums
}

console.log(nextPermutation([1, 2, 3])) // 1, 3, 2
console.log(nextPermutation([3, 2, 1])) // 1, 2, 3
console.log(nextPermutation([1, 1, 5])) // 1, 5, 1
