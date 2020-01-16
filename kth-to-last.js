const {ListNode, make, log} = require('./ll-helper')

function lenOf(root) {
  let i = 0
  let node = root

  while (node !== null) {
    i++
    node = node.next
  }

  return i
}

function takeLast(n, root) {
  let i = 0
  let len = lenOf(root)
  let startAt = len - n
  let node = root

  while (i !== startAt) {
    i++
    node = node.next
  }

  return node
}

console.log(lenOf(make(0, 1, 2, 3, 4, 5, 6)))

log(takeLast(3, make(0, 1, 2, 3, 4, 5, 6))) // [4, 5, 6]
log(takeLast(5, make(0, 1, 2, 3, 4, 5, 6))) // [2, 3, 4, 5, 6]
