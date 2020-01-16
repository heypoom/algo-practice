function contains(haystack, needle) {
	let h = haystack.split('').sort()

	for (let i = 0; i < needle.length; i++) {
		if (needle[i] !== h[i]) return false
	}

	return true
}

function substr(haystack, needle) {
	needle = [...needle].sort().join('')

	for (let win = needle.length; win < haystack.length - needle.length; win++) {
		for (let i = 0; i < haystack.length - win; i++) {
			let str = haystack.slice(i, i + win)

			if (contains(str, needle)) return str
		}
	}

	return ''
}

console.log(substr('ADOBECODEBANC', 'ABC')) // BANC
console.log(substr('ADOBECODEBANC', 'CEO')) // ECO
console.log(substr('ADOBECODEBANC', 'OEC')) // ECO
console.log(substr('ADOBECODEBANC', 'DBE')) // DEB

