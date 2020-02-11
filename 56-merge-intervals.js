/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  intervals.sort(([s1], [s2]) => s1 - s2)

  let answer = []

  for (let interval of intervals) {
    if (answer.length === 0 || answer[answer.length - 1][1] < interval[0]) {
      answer.push(interval)
    } else {
      answer[answer.length - 1][1] = Math.max(
        answer[answer.length - 1][1],
        interval[1],
      )
    }
  }

  return answer
}
