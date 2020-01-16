const {ListNode, log, make} = require('./ll-helper')

function removeAt(root, index) {
  let current = root
  let counter = 0

  if (index === null || index === undefined) return root

  while (current !== null) {
    if (counter === index - 1) {
      current.next = current.next.next

      return root
    } else {
      current = current.next
    }

    counter++
  }

  return root
}

log(removeAt(make(0, 1, 2, 3, 4, 5), 1))
