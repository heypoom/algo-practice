// Time Complexity: O(N) where N is the length of the input array.
// Space Complexity: O(N) where N is the length of the input array.

function longestSequence(input) {
  let nums = {}
  for (let n of input) nums[n] = 1

  let max = 0

  for (let n of input) {
    if (!nums[n - 1]) {
      let m = 0

      while (nums[n]) {
        n++
        m++
      }

      if (m > max) max = m
    }
  }

  return max
}

// Both function takes exactly N iterations (in while loop) to compute.
// 100 ต้นสาย ไม่เจอตัวต่อไป, 200 ต้นสาย ไม่เจอตัวต่อไป, 1 ต้นสาย เจอ 2 3 4.
console.log(longestSequence([100, 4, 200, 1, 3, 2])) // 4
console.log(longestSequence([100, 4, 200, 201, 1, 202, 3, 203, 2, 204, 205])) // 6
