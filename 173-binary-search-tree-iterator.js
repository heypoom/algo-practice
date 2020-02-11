// Time Complexity: O(N) for building the nodes array initially, O(1) for next and hasNext.
// Space Complexity: O(N) where N is number of nodes in the tree, used for toring the nodes in an array.

function BSTIterator(root) {
  this.i = -1
  this.nodes = []
  this.root = root

  this.traverse(root)
}

BSTIterator.prototype.traverse = function(node) {
  if (!node) return

  this.traverse(node.left)
  this.nodes.push(node.val)
  this.traverse(node.right)
}

BSTIterator.prototype.next = function() {
  return this.nodes[++this.i]
}

BSTIterator.prototype.hasNext = function() {
  return this.i + 1 < this.nodes.length
}
