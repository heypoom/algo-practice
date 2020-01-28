// Time Complexity: O(N) where N is count of numbers
// Space Complexity: O(N) where N is count of numbers

function firstMissing(input) {
	let max = Math.max(...input)
	let map = new Map()

	for (let num of input) {
		map.set(num, true)
	}

	for (let i = 1; i <= max + 1; i++) {
		if (!map.get(i)) return i
	}

	return null
}

console.log(firstMissing([1, 2, 0])) // 3
console.log(firstMissing([3, 4, -1, 1])) // 2
console.log(firstMissing([7, 8, 9, 11, 12])) // 1

