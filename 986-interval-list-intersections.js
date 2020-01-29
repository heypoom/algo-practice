// Time Complexity: O(A + B)

function intersect(A, B) {
  let answer = []

  let i = 0
  let j = 0

  while (i < A.length && j < B.length) {
    let [aStart, aEnd] = A[i]
    let [bStart, bEnd] = B[j]

    let l = Math.max(aStart, bStart)
    let r = Math.min(aEnd, bEnd)

    if (aEnd < bEnd) i++
    else j++

    if (l <= r) answer.push([l, r])
  }

  return answer
}

console.log(intersect([[0, 3], [4, 6]], [[1, 2], [3, 5]])) // [[1, 2], [3, 3], [4, 5]]

console.log(
  intersect(
    [[0, 2], [5, 10], [13, 23], [24, 25]],
    [[1, 5], [8, 12], [15, 24], [25, 26]],
  ),
) // [[1, 2], [5, 5], [8, 10], [15, 23], [24, 24], [25, 25]]
