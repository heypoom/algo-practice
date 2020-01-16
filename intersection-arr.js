function intersection(N, M) {
  let l = 0
  let r = 0

  let results = []

  while (l < N.length) {
    if (N[l] !== M[r]) {
      r++

      if (r >= M.length) {
        l++
        r = 0
      }
    } else {
      results.push(N[l])

      l++
      r = 0
    }
  }

  return results
}

const N = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 21, 22, 25, 28]
const M = [5, 10, 15, 20, 21, 22, 23]

console.log(intersection(N, M))
