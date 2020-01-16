const {ListNode, make, log} = require('./ll-helper')

// Remove all occurences of duplicates.

function removeDupes(root) {
  let prev = root
  let node = root

  while (node !== null) {
    while (node.next !== null && prev.next.val === node.next.val) {
      node = node.next
    }

    if (prev.next === node) {
      prev = prev.next
    } else {
      prev.next = node.next
    }

    node = node.next
  }

  return root
}

// [1, 5, 6]
log(removeDupes(make(1, 2, 2, 3, 3, 4, 4, 5, 6)))

// [1, 5, 8, 9, 13, 15]
log(removeDupes(make(1, 2, 2, 3, 3, 4, 4, 5, 8, 9, 10, 10, 13, 15)))
