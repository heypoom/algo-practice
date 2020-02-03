// Time Complexity: O(N^2) where N is the length of input array.
// Space Complexity: O(1) -- no extra space, excluding the answer array.
// Edge Case:
// - [0, 0]

function threeSum(list) {
  let answer = new Map()
  list.sort((a, b) => a - b)

  if (list.length < 3) return []

  for (let i = 0; i < list.length; i++) {
    let l = i + 1
    let r = list.length - 1
    let n = 0 - list[i]

    while (l < r) {
      if (list[l] + list[r] === n) {
        let a = [list[i], list[l], list[r]]
        answer.set(a.join('|'), a)

        l++
        r--
      } else if (list[l] + list[r] < n) {
        l++
      } else {
        r--
      }
    }
  }

  return [...answer.values()]
}
