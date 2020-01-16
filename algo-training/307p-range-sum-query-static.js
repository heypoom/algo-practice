// Time Complexity: O(N) where N is length of array, used in preprocessing. O(1) for lookup

// Space Complexity: O(N) where N is length of array, which is used for storing memoized data.

function createSumRange(input) {
	let memo = [input[0]]

	for (let i = 1; i < input.length; i++) {
		memo[i] = input[i] + memo[i - 1]
	}

	return function sumRange(start, end) {
		if (start === 0) return memo[end]

		return memo[end] - memo[start - 1]
	}
}

const sumRange = createSumRange([2, 3, 4, 5, 6])

console.log(sumRange(0, 2)) // 9
console.log(sumRange(2, 3)) // 9
console.log(sumRange(2, 4)) // 15
console.log(sumRange(0, 0)) // 2
console.log(sumRange(0, 4)) // 20

