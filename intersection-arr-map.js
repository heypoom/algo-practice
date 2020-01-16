function intersection(N, M) {
  let l = 0
  let r = 0

  let map = {}
  let results = []

  for (let num of N) map[num] = true

  for (let num of M) {
    if (map[num]) results.push(num)
  }

  return results
}

const N = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 21, 22, 25, 28]
const M = [5, 10, 15, 20, 21, 22, 23]

console.log(intersection(N, M))
