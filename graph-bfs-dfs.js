const {Node} = require('./graph-helper')

function dfs(root) {
  if (!root) return

  console.log(root.val)

  root.visited = true

  for (let node of root.children) {
    if (!node.visited) dfs(node)
  }
}

function bfs(root) {
  let queue = []

  root.visited = true
  queue.push(root)

  while (queue.length > 0) {
    let node = queue.shift()
    console.log(node.val)

    for (let n of node.children) {
      if (!n.visited) {
        n.visited = true
        queue.push(n)
      }
    }
  }
}

function make() {
  const a = new Node(5)
  a.add(10, [15, 20])
  a.add(25)
  a.add(30)

  return a
}

dfs(make())
console.log()
bfs(make())
