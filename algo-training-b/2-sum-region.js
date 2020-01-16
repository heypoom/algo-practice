function sumRegion(grid, sx, sy, ex, ey) {
	let sum = 0

	for (let y = sy; y <= ey; y++) {
		for (let x = sx; x <= ex; x++) {
			sum += grid[y][x]
		}
	}

	return sum
}

let grid = [
	[1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1],
]

console.log(sumRegion(grid, 0, 0, 4, 4))

