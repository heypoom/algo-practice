const chalk = require('chalk')

function showVisited(visited, x, y) {
  let v = [...visited]

  console.log(
    v
      .map((r, i) =>
        r
          .map((c, j) => {
            if (i === y && j === x) return chalk.red('█')

            return c ? chalk.blue('█') : ' '
          })
          .join(''),
      )
      .join('\n'),
  )

  console.log()
}

exports.showVisited = showVisited
