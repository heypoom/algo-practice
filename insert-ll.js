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
  let str = ''
  let current = root

  while (current !== null) {
    str += `${current.val} `
    current = current.next
  }

  console.log(str)
}

function insertAt(root, idx, item) {
  let current = root
  let counter = 0

  while (current !== null) {
    let next = current.next

    if (counter === idx) {
      current.next = new ListNode(item)
      current.next.next = next

      return root
    } else {
      current = current.next
    }

    counter++
  }

  return root
}

log(insertAt(make(0, 1, 2, 3, 4), 3, -1))
log(insertAt(make(0, 1, 2, 3, 4), 2, -1))
