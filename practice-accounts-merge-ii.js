function merge(accounts) {
  let answer = []

  // Create a mapping of email to names.
  let emailToNameMap = new Map()

  // 1. Build a graph of accounts as an adjacency list representation,
  //    using the first e-mail as a reference. -- O(N)
  let graph = new Map()

  for (let [name, ...emails] of accounts) {
    let [primary] = emails

    for (let email of emails) {
      if (!graph.has(email)) graph.set(email, new Set())

      graph.get(primary).add(email)
      graph.get(email).add(primary)

      emailToNameMap.set(email, name)
    }
  }

  // 2. Perform BFS on every node,
  // 		append the email to the array, and sort the array. -- O(N log N)

  let visited = new Set()

  for (let [email] of graph) {
    if (!visited.has(email)) {
      let emails = []

      // BFS.
      let queue = [email]

      while (queue.length > 0) {
        let node = queue.shift()
        emails.push(node)

        for (let child of graph.get(node)) {
          if (!visited.has(child)) {
            visited.add(child)
            queue.push(child)
          }
        }
      }

      answer.push([mailToNameMap.get(email), ...emails.sort()])
    }
  }

  return answer
}

merge()
