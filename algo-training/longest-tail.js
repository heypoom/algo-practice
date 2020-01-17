const {ListNode, make, log} = require('./ll-helper')

// Time Complexity: O(max(A, B)) where A, B is the number of children nodes in the linked list

function len(head) {
  let node = head
  let i = 0

  while (node !== null) {
    node = node.next
    i++
  }

  return i
}

function move(head, index) {
  let node = head
  let i = 0

  while (node !== null && i < index) {
    node = node.next
    i++
  }

  return node
}

function longestCommon(A, B) {
  let lenA = len(A)
  let lenB = len(B)

  if (lenA > lenB) A = move(A, lenA - lenB)
  else if (lenB > lenA) B = move(B, lenB - lenA)

  let root = new ListNode(-1)
  let node = root

  while (A !== null && B !== null) {
    if (A.val === B.val) {
      node.next = new ListNode(A.val)
      node = node.next
    } else {
      node = root
    }

    A = A.next
    B = B.next
  }

  return root.next
}

log(longestCommon(make(1, 2, 1, 5, 6, 3, 6, 7), make(4, 5, 2, 3, 6, 7)))

log(longestCommon(make(1, 9, 2, 3), make(3, 4, 5, 6, 7, 2, 3)))
