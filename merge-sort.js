function sort(list) {
  if (list.length <= 1) return list

  let mid = Math.floor(list.length / 2)

  let L = list.slice(0, mid)
  let R = list.slice(mid)

  // console.log('// sort', list.join(' '))

  sort(L)
  sort(R)

  console.log('process', list.join(' '))

  let l = 0
  let r = 0

  let i = 0

  // Merge
  while (l < L.length && r < R.length) {
    if (L[l] < R[r]) {
      list[i] = L[l]
      l += 1
    } else {
      list[i] = R[r]
      r += 1
    }

    i += 1
  }

  // Insert remaining from L
  while (l < L.length) {
    list[i] = L[l]
    l += 1
    i += 1
  }

  // Insert remaining from R
  while (r < R.length) {
    list[i] = R[r]
    r += 1
    i += 1
  }

  console.log('->', list.join(' '))

  return list
}

console.log(sort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(sort([5, 10, 1, 6, 8, 2, 7, 4, 9, 3]))
