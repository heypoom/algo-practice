function find(list, target) {
  let indices = []
  let found = false

  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      found = true

      indices.push(i)
    } else if (found) break

    console.log(i)
  }

  return [indices, indices.length]
}

console.log(find([1, 1, 1, 2, 3, 3, 3, 3, 4, 5, 6], 3)) // [(4, 5, 6, 7), 4]
