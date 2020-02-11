function canFinish(n, prereqs) {
  let graph = new Map()

  function addEdge(u, v) {
    if (!graph.has(u)) graph.set(u, [v])
    else graph.get(u).push(v)
  }

  let visited = Array(n).fill(false)
  let stack = Array(n).fill(false)

  for (let [u, v] of prereqs) {
    addEdge(u, v)
  }

  function dfs(i) {
    visited[i] = true
    stack[i] = true

    let nodes = graph.get(i)
    if (!nodes) return false

    for (let c of nodes) {
      if (!visited[c]) {
        if (dfs(c)) return true
      } else if (stack[c]) {
        return true
      }
    }

    stack[i] = false

    return false
  }

  for (let node = 0; node < n; node++) {
    if (dfs(node)) return false
  }

  return true
}

console.log(canFinish(2, [[1, 0]])) // True
console.log(canFinish(2, [[1, 0], [0, 1]])) // False
