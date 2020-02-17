// Time Complexity: O(N log N) where N is length of accounts array
// Space Complexity: O(N) for storing visited array, BFS queue, name map.

function merge(accounts) {
  // [[name, email1, email2]]
  let answer = []

  let graph = new Map()
  let mailToNameMap = new Map()

  // 1. Build list of accounts into graph (adjacency list)
  //    we use the first email as the reference. -- O(N)

  for (let [name, ...emails] of accounts) {
    let [primary] = emails

    for (let email of emails) {
      if (!graph.has(email)) graph.set(email, new Set())

      graph.get(primary).add(email)
      graph.get(email).add(primary)

      mailToNameMap.set(email, name)
    }
  }

  let visited = new Set()

  // 2. Perform BFS on every node in graph. -- O(N)
  for (let [email] of graph) {
    if (!visited.has(email)) {
      visited.add(email)

      let emails = []
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

      // 3. Sort the emails and push the answer. -- O(N log N)
      answer.push([mailToNameMap.get(email), ...emails.sort()])
    }
  }

  return answer
}

console.log(
  merge([
    ['John', 'johnsmith@mail.com', 'john00@mail.com'],
    ['John', 'johnnybravo@mail.com'],
    ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
    ['Mary', 'mary@mail.com'],
  ]),
)

// [
// 	 ["John", 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],
// 	 ["John", "johnnybravo@mail.com"],
// 	 ["Mary", "mary@mail.com"]
// ]
