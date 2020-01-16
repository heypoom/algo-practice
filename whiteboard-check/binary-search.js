function binarySearch(list, target) {
	let l = 0
	let r = list.length - 1

	while (l <= r) {
		let mid = Math.floor((l + r) / 2)
		if (list[mid] === target) return mid

		if (list[mid] < target) {
			l = mid + 1
		} else {
			r = mid - 1
		}
	}

	return -1
}

console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8], 4))

