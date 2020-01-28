// Input N + 1 integer.
// Each of integer are in the range of 1 to N.
// find the duplicate integer.

// Time Complexity: O(N)
// Space Complexity: O(1)

function findDuplicate(list) {
  let s = list[0]
  let f = list[list[0]]

  while (f !== s) {
    s = list[s]
    f = list[list[f]]
  }

  f = 0

  while (f !== s) {
    s = list[s]
    f = list[f]
  }

  return s
}

console.log(findDuplicate([2, 1, 4, 3, 5, 4])) // 4
console.log(findDuplicate([1, 2, 3, 4, 3, 6, 5])) // 4
