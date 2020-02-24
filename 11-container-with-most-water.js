function maxArea(height) {
  let max = 0

  let l = 0
  let r = height.length - 1

  while (l < r) {
    console.log(l, r)

    let width = r - l
    let water = 0

    if (height[l] < height[r]) {
      water = width * height[l]
      l++
    } else {
      water = width * height[r]
      r--
    }

    max = Math.max(max, water)
  }

  return max
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])) // 49
