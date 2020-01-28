// A restaurant has unlimited seats.
// There are n visits to the restaurant.
// Person i enters the restaurant at xi, and leaves at yi.
// Let xi and yi be an int.
// When are there more than k people in the restaurant?

function getHighVisitTimes(n, k, records) {
	records.sort((a, b) => a[0] - b[0])

	let visits = 1
	let answer = []

	let i = 1
	let j = 0

	while (i < n && j < n) {
		if (records[i][0] <= records[j][1]) {
			visits++

			if (visits >= k) {
				max = visits
				answer.push([records[i][0], records[j][1]])
			}

			i++
		} else {
			visits--
			j++
		}
	}

	return answer
}

console.log(getHighVisitTimes(4, 2, [
	[1, 3],
	[4, 6],
	[2, 4],
	[5, 9],
])) // [[2, 3], [4, 4], [5, 6]]

