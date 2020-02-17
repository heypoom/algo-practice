function closestBruteForce(root, target) {
  let list = []

  // 1. Use in-order traversal (DFS) to store the value in an array.

  function inOrder(node) {
    if (!node) return

    inOrder(node.left)

    list.push(node.val)

    inOrder(node.right)
  }

  // 2. Compute minimum of array.
  let min = Infinity
  let answer = -1

  for (let num of list) {
    let diff = Math.abs(num - target)

    if (diff < min) {
      min = diff
      answer = num
    }
  }

  return answer
}
