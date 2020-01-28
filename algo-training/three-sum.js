const {performance} = require('perf_hooks')

// Given an array list of n integers, are there elements a, b, c in list such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
//
// Note:
// The solution set must not contain duplicate triplets.
//
// Example:
//
// Given array list = [-1, 0, 1, 2, -1, -4],
//
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// Time: O(N^2)
// Extra Space: O(1) -- no extra space, excluding the answer array.

function sum(list) {
  let answer = []
  list.sort((a, b) => a - b)

  for (let i = 0; i < list.length; i++) {
    if (i > 0 && list[i] <= list[i - 1]) continue

    let l = i
    let r = list.length - 1

    while (l < r) {
      if (list[i] + list[l] + list[r] === 0) {
        answer.push([list[i], list[l], list[r]])
      }

      if (list[i] + list[l] + list[r] < 0) {
        let left = list[l]

        while (left === list[l] && l < r) l++
      } else {
        let right = list[r]

        while (right === list[r] && l < r) r--
      }
    }
  }

  return answer
}

let now = performance.now()
console.log(sum([-1, 0, 1, 2, -1, -4]))
console.log(performance.now() - now)
