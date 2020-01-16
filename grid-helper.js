function make(str) {
  return str
    .trim()
    .split('\n')
    .map(l => l.split('').map(Number))
}

function makeStr(str) {
  return str
    .trim()
    .split('\n')
    .map(l => l.split(''))
}

function log(grid) {
  console.log(grid.map(l => l.join('')).join('\n'))
}

exports.make = make
exports.makeStr = makeStr
exports.log = log
