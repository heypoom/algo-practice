function take(list, n) {
	list.sort()

	return list[list.length - n]
}

console.log(take([6, 5, 4, 3, 2, 1, 0], 4)) // -> 3

