function toBills(coins) {
  let thousands = Math.floor(coins / 1000)
  coins %= 1000

  let fiveHundreds = Math.floor(coins / 500)
  coins %= 500

  let hundreds = Math.floor(coins / 100)
  coins %= 100

  let fifties = Math.floor(coins / 50)
  coins %= 50

  let twenties = Math.floor(coins / 20)
  coins %= 20

  return {thousands, fiveHundreds, hundreds, fifties, twenties, ones: coins}
}

console.log(toBills(17295))
