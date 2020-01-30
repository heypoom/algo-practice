class Graph {
  constructor() {
		this.nodes = new Map()
	}

	add(name, node) {
		node.name = name
		this.nodes.set(name, node)
	}

	has(name) {
		return this.nodes.has(name)
	}

	get(name) {
		return this.nodes.get(name)
	}

	getNodes() {
		return [...this.nodes.values()]
	}

	addEdge(name, node) {
		this.nodes.get(name).addNode(node)
	}
}

class Node {
  constructor(val, name) {
    this.val = val
    this.children = []
    this.visited = false
		this.name = name
  }

	get(node) {
		return this.children.find(c => c === node)
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
