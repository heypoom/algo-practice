function leastInterval(tasks, n) {
  let counts = Array(26).fill(0)

  for (let task of tasks) counts[task.charCodeAt(0) - 65]++

  let max = Math.max(...counts) - 1

  let spaces = max * n + max

  for (let count of counts) spaces -= Math.min(count, max)

  if (spaces <= 0) return tasks.length

  return tasks.length + spaces
}

console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2))
