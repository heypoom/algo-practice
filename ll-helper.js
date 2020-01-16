function ListNode(val) {
  this.val = val
  this.next = null
}

function make(...list) {
  const root = new ListNode(-1)
  let current = root

  while (list.length > 0) {
    current.next = new ListNode(list.shift())
    current = current.next
  }

  return root.next
}

function log(root) {
  if (!root || typeof root !== 'object' || typeof root.val === undefined)
    return console.log(root)

  let str = ''
  let current = root

  while (current !== null) {
    str += `${current.val} `
    current = current.next
  }

  console.log(str)
}

exports.ListNode = ListNode
exports.log = log
exports.make = make
