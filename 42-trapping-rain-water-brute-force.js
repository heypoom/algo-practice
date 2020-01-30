// Time Complexity: O(N ^ 2) where N is the input length
// Space Complexity: O(1)

function trap(heights) {
  let level = 0

  function scanL(i) {
    let max = 0
    let l = i

    while (l >= 0) {
      max = Math.max(max, heights[l])
      l--
    }

    return max
  }

  function scanR(i) {
    let max = 0
    let r = i

    while (r < heights.length) {
      max = Math.max(max, heights[r])
      r++
    }

    return max
  }

  for (let i = 1; i < heights.length; i++) {
    level += Math.min(scanL(i), scanR(i)) - heights[i]
  }

  return level
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])) // 6
