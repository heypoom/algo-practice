function urlify(str) {
  str = [...str]

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') str[i] = '%20'
  }

  return str.join('')
}

console.log(urlify('hello world what is your name'))
