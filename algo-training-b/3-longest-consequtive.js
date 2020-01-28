function longest(list) {
  list.sort((a, b) => a - b)

  for (let i = 1; i < list.length; i++) {
    if (list[i] - list[i - 1] !== 1) return i
  }

  return list.length
}

console.log(longest([100, 4, 200, 1, 3, 2])) // 4
console.log(longest([100, 4, 200, 5, 1, 3, 2, 6])) // 6
console.log(longest([-6, -5, -4, -3, -2, -1, 0, 1, 2])) // 9
