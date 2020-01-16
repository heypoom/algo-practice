function bsearch(list, target) {
  let len = list.length
  let l = 0
  let r = len - 1

  while (l <= r) {
    let mid = Math.floor((r + l) / 2)
    let item = list[mid]

    if (item === target) return mid

    if (item < target) l = mid + 1
    else r = mid - 1
  }

  return null
}

console.log(bsearch([1, 2, 3, 4, 5, 6], 4))
console.log(bsearch([1, 2, 3, 4, 5, 6, 7], 5))
console.log(bsearch([-1], 5))
