function closest(root, target) {
  let minDiff = Infinity
  let answer = -1

  // 1. Traverse the nodes recursively.
  function scan(node) {
    if (!node) return

    // If value is target, set that as an answer.
    if (node.val === target) {
      answer = target
      return
    }

    // If the global diff is more than current diff, update.
    if (minDiff > Math.abs(node.val - target)) {
      minDiff = Math.abs(node.val - target)
      answer = node.val
    }

    if (target < node.val) scan(node.left)
    else scan(node.right)
  }
}
