function allocate(tracks, teams, maxSlots) {
  let counter = 1

  let slots = []

  while (slots.length < maxSlots) {
    let local = []

    for (let i = 0; i < tracks; i++) {
      if (counter > teams) counter = 1

      local.push(counter++)
    }

    slots.push(local)
  }

  return slots
}

console.log(allocate(3, 12, 12))
