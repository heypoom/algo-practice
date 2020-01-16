function Graph() {
  this.nodes = []
}

class Node {
  constructor(val) {
    this.val = val
    this.children = []
    this.visited = false
  }

  addNode(node) {
    this.children.push(node)
  }

  add(value, values) {
    const node = new Node(value)

    if (Array.isArray(values)) {
      while (values.length > 0) {
        node.add(values.shift())
      }
    }

    this.addNode(node)

    return node
  }
}

exports.Graph = Graph
exports.Node = Node
