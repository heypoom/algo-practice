const {ListNode, make, log} = require('./ll-helper')

function isPalindrome(root) {
  let stack = []
  let node = root

  while (node !== null) {
    stack.push(node.val)
    node = node.next
  }

  node = root

  while (node !== null) {
    if (node.val !== stack.pop()) return false
    console.log(stack)

    node = node.next
  }

  return true
}

console.log(isPalindrome(make('A', 'B', 'B', 'A')))
console.log(isPalindrome(make('A', 'B', 'O', 'B', 'A')))
console.log(isPalindrome(make('A', 'B', 'M', 'M', 'A')))
