// De-duplicate sorted linked list.
// [1, 2, 3, 3, 4, 4, 5] -> [1, 2, 3, 4, 5]

const {ListNode, log, make} = require('./ll-helper')

function uniq(root) {
  let origin = root
  let prev = root
  let node = root

  while (node !== null) {
    if (node.val === origin.val) {
      node = prev
      prev = node

      node.next = node.next.next
      node = node.next
    } else {
      origin = node

      prev = node
      node = node.next
    }
  }

  return root
}

log(uniq(make(1, 1, 2, 2, 3, 4, 4, 5))) // [1, 2, 3, 4, 5]
log(uniq(make(5, 5, 4, 4, 3, 3, 2, 1))) // [5, 4, 3, 2, 1]
