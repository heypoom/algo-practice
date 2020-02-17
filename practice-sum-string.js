function sum(A, B) {
  let answer = []
  let carry = 0

  // Use two pointers. Start from the end.
  let i = A.length - 1
  let j = B.length - 1

  // Iterate until one is at the front.
  while (i >= 0 || j >= 0) {
    let a = Number(A[i]) || 0
    let b = Number(B[j]) || 0

    let sum = a + b + carry
    let carry = Math.floor(sum / 10)

    answer.push(sum % 10)

    i--
    j--
  }

  if (carry > 0) answer.push(carry)
  answer.reverse()

  return answer.join('')
}
