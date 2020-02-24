/**
 * @param {number[]} ages
 * @return {number}
 */
function numFriendRequests(ages) {
  let n = 120 + 1
  let count = Array(n).fill(0)

  for (let age of ages) count[age]++

  let answer = 0

  for (let a = 0; a < n; a++) {
    for (let b = 0; b < n; b++) {
      if (a * 0.5 + 7 >= b) continue
      if (a < b) continue
      if (a < 100 && b > 100) continue

      answer += count[a] * count[b]

      if (a === b) answer -= count[a]
    }
  }

  return answer
}
