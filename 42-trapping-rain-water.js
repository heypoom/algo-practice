// Time Complexity: O(N) where N is the input length.
// Space Complexity: O(1)

function trap(heights) {
  let l = 0
  let r = heights.length - 1

  let level = 0
  let trapped = 0

  while (l < r) {
    let lower = 0

    if (heights[l] < heights[r]) {
      lower = heights[l]
      l++
    } else {
      lower = heights[r]
      r--
    }

    level = Math.max(level, lower)
    trapped += level - lower

    console.log({l, r, lower, level, trapped})
  }

  return trapped
}

console.log(trap([4, 0, 1, 2, 1, 3, 0, 1, 0, 0, 2]))
