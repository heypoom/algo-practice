function prettyPrint(root) {
  if (!root) return

  let level = 0
  let queue = [[level, root, '']]
  let str = ''

  while (queue.length > 0) {
    let [level, node, dir] = queue.shift()

    str += `${'-'.repeat(level)}${dir}${node.val}\n`

    if (!node.left && !node.right) continue

    level++

    if (node.left) queue.push([level, node.left, 'L '])
    if (node.right) queue.push([level, node.right, 'R '])
  }

  console.log(str)
}

exports.prettyPrint = prettyPrint
