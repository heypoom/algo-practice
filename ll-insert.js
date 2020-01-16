const {ListNode, make, log} = require('./ll-helper')

// Given a linked list. Write a code to insert a new node with an integer value of x *after* index i.

function insert(root, item, index) {
  let node = root
  let n = 0

  while (node !== null) {
    if (n === index) {
      let next = node.next

      node.next = new ListNode(item)
      node.next.next = next

      return root
    }

    n++
    node = node.next
  }

  return root
}

log(insert(make(1, 2, 3, 4), 112, 1)) // [1, 2, 112, 3, 4]
