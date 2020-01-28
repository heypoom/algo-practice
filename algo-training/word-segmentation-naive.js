function segmentWord(input, words) {
  let hash = {}

  for (let word of words) {
    hash[word] = true
  }

  let target = ''
  let answer = ''

  for (let token of input) {
    target += token

    if (hash[target]) {
      answer += target + ' '
      target = ''
    }
  }

  return answer.trim()
}

console.log(segmentWord('hellohowareyou', ['are', 'you', 'how', 'hello']))
console.log(segmentWord('whoareyou', ['are', 'you', 'who']))
console.log(segmentWord('whoareyou', ['whoar', 'who', 'are', 'reyo', 'you']))
console.log(segmentWord('whereami', ['am', 'i', 'where']))
