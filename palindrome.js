function isPalindrome(str) {
  str = str.toLowerCase().replace(/ /g, '')

  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) return false
  }

  return true
}

console.log(isPalindrome('palalap'))
console.log(isPalindrome('abba'))
console.log(isPalindrome(''))
console.log(isPalindrome('palaren'))
console.log(isPalindrome('ap'))
console.log(isPalindrome('a'))
console.log(isPalindrome('PALalap'))
