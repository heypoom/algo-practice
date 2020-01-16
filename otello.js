const {make, log} = require('./grid-helper')

let N = 0
let W = 1
let B = 2

let board = [
  [N, N, N, N, B],
  [B, W, W, W, N],
  [N, N, N, N, W],
  [N, N, N, N, B],
  [N, N, N, N, N],
]

function play(board, x, y, T) {
  let visited = board.map(r => r.map(c => false))

  // E = Enemy Token
  let E = T === W ? B : W
  board[y][x] = E

  function fill(x, y) {
    let isOOB = x < 0 || y < 0 || x >= board[y].length || y >= board.length

    if (isOOB) return
    if (visited[y][x]) return
    if (board[y][x] !== E) return

    board[y][x] = T
    visited[y][x] = true

    fill(x - 1, y)
    fill(x + 1, y)
    fill(x, y - 1)
    fill(x, y + 1)
  }

  fill(x, y)

  return board
}

log(play(board, 4, 1, B))
