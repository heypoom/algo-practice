function subarraySum(nums, k) {
  let sum = 0
  let count = 0

  let map = new Map()
  map.set(0, 1)

  for (let num of nums) {
    console.log('num =', num)

    sum += num
    console.log('sum =', sum)
    console.log('sum - k =', sum - k)

    if (map.has(sum - k)) count += map.get(sum - k)

    console.log('count =', count)

    map.set(sum, (map.get(sum) || 0) + 1)
    console.log('set sum to', map.get(sum))
    console.log('map =', map)

    console.log('---')
  }

  return count
}

console.log(subarraySum([1, 1, 1], 2))
console.log(subarraySum([1, 2, 1], 4))
