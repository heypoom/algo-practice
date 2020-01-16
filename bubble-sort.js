function sort(list) {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (list[j] > list[j + 1]) {
        let temp = list[j]

        console.log('swap', list[j], list[j + 1])

        list[j] = list[j + 1]
        list[j + 1] = temp
      }
    }
  }

  return list
}

console.log(sort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))
