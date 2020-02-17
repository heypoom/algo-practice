const {Node} = require('./graph-helper')

// Time Complexity: O(V + E)
// Space Complexity: O(V)

function cloneGraph(root) {
  // 1. Create a map to store mapping of original to cloned nodes.
  let map = new Map()

  // 2. Create a new cloned root.
  let newRoot = new Node(root.val)
  map.set(root, newRoot)

  // 3. BFS over the graph: for each child:
  // 3.1. if clone of child not exist, put the cloned node in map
  // 3.2. Then, get the cloned node in the map, and push the cloned child.

  let queue = [root]

  while (queue.length > 0) {
    let node = queue.shift()

    for (let child of node.children) {
      if (!map.has(child)) {
        map.set(child, new Node(child.val))

        queue.push(child)
      }

      map.get(node).children.push(map.get(child))
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
