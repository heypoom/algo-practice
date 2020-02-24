function isBipartite(graph) {
  let colors = new Map()

  for (let node = 0; node < graph.length; node++) {
    if (colors.has(node)) continue

    let queue = [node]
    colors.set(node, true)

    while (queue.length > 0) {
      let n = queue.shift()
      let edges = graph[n]

      for (let edge of edges) {
        console.log('n =', n, 'edge =', edge)

        if (!colors.has(edge)) {
          colors.set(edge, !colors.get(n))
          queue.push(edge)
          continue
        }

        console.log('cn =', colors.get(n), 'ce =', colors.get(edge))

        if (colors.get(edge) === colors.get(n)) return false
      }
    }
  }

  return true
}

console.log(isBipartite([[1, 3], [0, 2], [1, 3], [0, 2]])) // True
console.log(isBipartite([[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]])) // False
