// Time Complexity: O((R * C)^2), where R = row and C = column.

// Space Complexity: O(R * C), extra space is used for an array storing distance for each points.

function shortestDistance(grid) {
	let rows = grid.length
	let cols = grid[0].length

	let distance = Array(rows).fill().map(() => Array(cols).fill(0))
	let start = 0
	let min = 0

	function distanceOf(sx, sy, start) {
		let queue = [[sx, sy, 1]]
		let min = Infinity

		while (queue.length > 0) {
			let [x, y, d] = queue.shift()

			let moves = [
				[x + 1, y],
				[x - 1, y],
				[x, y + 1],
				[x, y - 1],
			]

			for (let [x, y] of moves) {
				if (x < 0 || y < 0) continue
				if (y >= rows || x >= cols) continue

				if (grid[y][x] !== start) continue

				distance[y][x] += d
				min = Math.min(min, distance[y][x])
				grid[y][x]--

				queue.push([x, y, d + 1])
			}
		}

		return min
	}

	for (let y = 0; y < rows; y++) {
		for (let x = 0; x < cols; x++) {
			if (grid[y][x] !== 1) continue

			min = distanceOf(x, y, start)
			if (min === Infinity) return -1

			start--
		}
	}

	return min
}

console.log(shortestDistance([
	[1, 0, 2, 0, 1],
	[0, 0, 0, 0, 0],
	[0, 0, 1, 0, 0]
])) // 7

