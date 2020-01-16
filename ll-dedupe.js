// Deduplicate linked list.

const {ListNode, make, log} = require('./ll-helper')

function dedupe(root) {
  let node = root
  let i = 0

  let prev = 0

  while (node !== null) {
    // Duplicate.
    if (node.val === prev) {
    }

    i++
    node = node.next
  }
}

log(dedupe(make(1, 2, 3, 3, 4, 4, 5))) // [1, 2, 3, 4, 5]
log(dedupe(make(1, 2, 3, 3, 3, 4, 4, 4, 5))) // [1, 2, 3, 4, 5]
