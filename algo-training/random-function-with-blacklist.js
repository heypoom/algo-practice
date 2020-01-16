// Random from 0 to N - 1, without including blacklisted ones.
function createRandom(n, blacklist) {
	let len = n - 1 - blacklist.length

	let map = {}
	for (let i of blacklist) map[blacklist[i]] = i

	return function pick() {
		let n = Math.floor(Math.random() * len) // O(1)

		return map[n] || n // O(1)
	}
}

const p1 = createRandom(10, [1, 3, 5, 7, 9])
console.log(p1()) // 0, 2, 4, 6, 8

const p2 = createRandom(10, [2, 4, 6, 8]) 
console.log(p2()) // 0, 1, 3, 5, 7, 9

const p3 = createRandom(10, [1, 2, 3, 4, 5])
console.log(p3()) // 0, 6, 7, 8, 9, 10

const p4 = createRandom(10, [6, 7, 8, 9])
console.log(p4()) // 0, 1, 2, 3, 4, 5

