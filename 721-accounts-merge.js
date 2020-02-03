const {Graph, Node} = require('./graph-helper')

function merge(accounts) {
  let mailToNameMap = new Map()
  let graph = new Map()

  for (let [name, ...emails] of accounts) {
    let [primary] = emails

    for (let email of emails) {
      if (!graph.has(email)) graph.set(email, new Set())

      graph.get(primary).add(email)
      graph.get(email).add(primary)
      mailToNameMap.set(email, name)
    }
  }

  let answer = []
  let visited = new Set()

  for (let [email] of graph) {
    if (!visited.has(email)) {
      visited.add(email)

      let stack = [email]
      let emails = []

      while (stack.length > 0) {
        let node = stack.pop()
        emails.push(node)

        for (let e of graph.get(node)) {
          if (!visited.has(e)) {
            visited.add(e)
            stack.push(e)
          }
        }
      }

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
