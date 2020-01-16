const {make, log} = require('./ll-helper')

function reverseList(root) {
  let prev = null
  let node = root
  let next = null

  while (node !== null) {
    next = node.next
    node.next = prev

    prev = node
    node = next
  }

  return prev
}

log(reverseList(make(1, 2, 3, 4, 5, 6)))
