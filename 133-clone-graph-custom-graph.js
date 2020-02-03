const {Node} = require('./graph-helper.js')

// Time Complexity: O(V + E)
// Space Complexity: O(V)

function cloneGraph(root) {
  if (!root) return

  let map = new Map()
  let queue = [root]

  let newRoot = new Node(root.val)
  map.set(root, newRoot)

  while (queue.length > 0) {
    let node = queue.shift()

    for (let n of node.children) {
      if (!map.has(n)) {
        map.set(n, new Node(n.val))

        queue.push(n)
      }

      map.get(node).children.push(map.get(n))
    }
  }

  return newRoot
}

function make() {
  const a = new Node(5)
  a.add(10, [15, 20])
  a.add(25, [40])
  a.add(30)

  return a
}

let sampleNode = make()

// Should be true. Reference should not be equal.
console.log(cloneGraph(sampleNode) !== sampleNode)

console.log('Cloned:', cloneGraph(sampleNode))
