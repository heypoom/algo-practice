// Time Complexity: O(N) where N is string length
// Space Complexity: O(N) where N is string length, used for stack array.
// Edge Case: ''

function longestValidParentheses(str) {
  let max = 0
  let stack = [-1]

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(i)
    } else if (str[i] === ')') {
      stack.pop()

      if (stack.length > 0) {
        max = Math.max(max, i - stack[stack.length - 1])
      } else stack.push(i)
    }
  }

  return max
}

console.log(longestValidParentheses('')) // 0
console.log(longestValidParentheses('(')) // 0
console.log(longestValidParentheses('()')) // 2
console.log(longestValidParentheses('(()')) // 2
console.log(longestValidParentheses('(())')) // 4
console.log(longestValidParentheses('((((())')) // 4
console.log(longestValidParentheses('((())))))')) // 6
