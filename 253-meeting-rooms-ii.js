// Time Complexity: O(N log N) where N is number of input intervals. O(N log N) is for sorting.
// Space Complexity: O(N) for storing starts and ends array.
// Edge Case: [], [[0, 0]], [[0, 1]]

function minMeetingRooms(intervals) {
  if (!intervals || intervals.length === 0) return 0

  let rooms = 0

  let starts = intervals.map(n => n[0]).sort((a, b) => a - b)
  let ends = intervals.map(n => n[1]).sort((a, b) => a - b)

  let start = 0
  let end = 0

  while (start < intervals.length) {
    if (starts[start] >= ends[end]) {
      rooms--
      end++
    }

    rooms++
    start++
  }

  return rooms
}

console.log(minMeetingRooms([])) // 0
console.log(minMeetingRooms([[0, 0]])) // 0
console.log(minMeetingRooms([[0, 1]])) // 1

console.log(minMeetingRooms([[0, 30], [5, 10], [15, 20]])) // 2
console.log(minMeetingRooms([[7, 10], [2, 4]])) // 1
