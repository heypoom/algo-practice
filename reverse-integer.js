function reverse(number) {
  let isNegative = number < 0
  if (isNegative) number = Math.abs(number)

  let reversed = 0

  while (number > 0) {
    // (เพิ่มหลัก) + (เอา digit ท้ายมา)
    reversed = reversed * 10 + (number % 10)

    // เอาหลักที่ทำเสร็จแล้วออกไปหลักนึง
    number = Math.floor(number / 10)
  }

  if (isNegative) return -reversed

  return reversed
}

console.log(reverse(10240)) // 4201
console.log(reverse(1234)) // 4231
console.log(reverse(-1234)) // -4321
console.log(reverse(10)) // 1
console.log(reverse(0)) // 0

/*
	// 0 0 | 10240 0
	1024 0

	// 0 0 | 1024 4
	102 4

	// * 10 | % 10
	// 4 40 | 102 2
	10 42

	// 42 420 | 10 0
	1 420

	// 420 4200 | 1 1
	0 4201

	4201
*/
