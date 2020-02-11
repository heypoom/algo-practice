function cloneGraph(node) {
  if (!node) return

  let map = new Map()
  let queue = [node]

  let newRoot = new Node(node.val)
  map.set(node, newRoot)

  while (queue.length > 0) {
    let node = queue.shift()

    for (let n of node.neighbors) {
      if (!map.has(n)) {
        map.set(n, new Node(n.val))

        queue.push(n)
      }

      map.get(node).neighbors.push(map.get(n))
    }
  }

  return newRoot
}
