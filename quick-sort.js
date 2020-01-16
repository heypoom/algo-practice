function partition(list, l, h) {
  let i = l - 1
  let pivot = list[h]

  for (let j = l; j < h; j++) {
    if (list[j] < pivot) {
      i++

      let temp = list[i]
      list[i] = list[j]
      list[j] = temp
    }
  }

  let temp = list[i + 1]
  list[i + 1] = list[h]
  list[h] = temp

  return i + 1
}

// The main function that implements QuickSort
// list[] --> Array to be sorted,
// low  --> Starting index,
// high  --> Ending index

// Function to do Quick sort
function quickSort(list, low = 0, high = list.length - 1) {
  if (low < high) {
    // pi is partitioning index, list[p] is now
    // at right place
    let pi = partition(list, low, high)

    // Separately sort elements before
    // partition and after partition
    quickSort(list, low, pi - 1)
    quickSort(list, pi + 1, high)
  }

  return list
}

console.log(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
