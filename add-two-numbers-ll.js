const {ListNode, make, log} = require('./ll-helper')

function addTwoNumbers(l1, l2) {
  let root = new ListNode()
  let node = root
  let left = l1
  let right = l2
  let carry = 0

  while (left || right) {
    let x = left ? left.val : 0
    let y = right ? right.val : 0
    let sum = x + y + carry

    carry = Math.floor(sum / 10)
    node.next = new ListNode(sum % 10)
    node = node.next

    if (left) left = left.next
    if (right) right = right.next
  }

  if (carry > 0) node.next = new ListNode(carry)

  return root.next
}

log(addTwoNumbers(make(1, 2, 3), make(4, 5, 6)))
