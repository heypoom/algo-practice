function allocate(teams, tracks) {
  teams++

  const allocMap = {}
  const slots = teams * tracks

  for (let i = 0; i < teams; i++) {
    allocMap[i] = Math.floor(slots / teams)
  }

  // [[1, 2, 3], [1, 2, 3]]
  const timeSlots = []
  let counter = 0

  for (let i = 0; i < teams; i++) {
    let localSlots = []

    for (let j = 0; j < tracks; j++) {
      while (true) {
        let team = counter++
        if (counter > teams) counter = 0

        if (allocMap[counter] > 0) {
          allocMap[counter]--

          localSlots.push(team + 1)
          break
        } else {
          counter++
          if (counter > teams) counter = 0
          break
        }
      }
    }

    timeSlots.push(localSlots)
  }

  return timeSlots
}

console.log(allocate(12, 3)) // 36
