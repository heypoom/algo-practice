function partition(a, low, high) {
  if (high == low) return low

  let i = low + 1
  let j = high

  while (true) {
    while (a[i] < a[low] && i < high) i++
    while (a[j] > a[low] && j > low) j--
    if (i >= j) break

    let temp = a[i]
    a[i] = a[j]
    a[j] = temp

    i++
    j--
  }

  let temp = a[low]
  a[low] = a[j]
  a[j] = temp

  return j
}

function find(a, k, low = 0, high = a.length - 1) {
  if (a.length < 1) return -1
  if (k < 1 || k > a.length) return -1
  if (low > high) return -1

  let index = a.length - k
  let part = partition(a, low, high)

  if (part === index) return a[part]

  if (part < index) return find(a, k, part + 1, high)

  return find(a, k, low, part - 1)
}

console.log(find([6, 5, 4, 3, 2, 1], 2)) // 5
console.log(find([1, 2, 3, 4, 5, 6], 3)) // 4
console.log(find([9, 6, 8, 5, 7, 4], 3)) // 7
