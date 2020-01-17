function maxSum(list, k) {
  // 1. Preprocess with Quick Sum -- O(N)
  let qs = Array.from({length: list.length})
  qs[0] = list[0]

  for (let i = 1; i < list.length; i++) {
    qs[i] = qs[i - 1] + list[i]
  }

  // 2. Compute for each range -- O(N)
  let rng = Array.from({length: list.length}).fill(0)
  rng[0] = qs[k - 1]

  for (let i = 1; i < list.length - 1; i++) {
    rng[i] = qs[i + k - 1] - qs[i - 1] || 0
  }

  // 3. Choose which subarray to use -- O(N)
  let max = 0
  let maxStart = 0

  for (let start = 0; start < k; start++) {
    let sum = 0

    for (let i = start; i < rng.length - 1; i += k) {
      sum += rng[i]
    }

    if (sum > max) {
      max = sum
      maxStart = start
    }
  }

  // 4. Generate answer index.
  let answer = []

  for (let i = maxStart; i < rng.length; i += k) {
    answer.push(i)
  }

  return answer
}

console.log(maxSum([1, 2, 1, 2, 6, 7, 5, 1], 2)) // [0, 3, 5]
console.log(maxSum([1, 2, 3, 4, 5, 6, 7, 8], 3)) // [2, 5]
