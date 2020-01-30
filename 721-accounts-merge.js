const {Node} = require('./graph-helper')

function merge(accounts) {
  let mailToNameMap = {}
}

let accounts = [
  ['John', 'johnsmith@mail.com', 'john00@mail.com'],
  ['John', 'johnnybravo@mail.com'],
  ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
  ['Mary', 'mary@mail.com'],
]

// [
// 	 ["John", 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],
// 	 ["John", "johnnybravo@mail.com"],
// 	 ["Mary", "mary@mail.com"]
// ]
