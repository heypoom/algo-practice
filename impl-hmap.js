function HashMap() {
  let list = []
  function hash(key) {
    let val = 0

    for (let token of key) val += token.charCodeAt(0)

    console.log('//', key, '->', val)

    return val
  }

  function set(key, value) {
    list[hash(key)] = value
  }

  function get(key) {
    return list[hash(key)]
  }

  return {set, get}
}

const map = HashMap()
map.set('hello', 'world')
map.set('flag-x', 1024)
console.log(map.get('hello'))
console.log(map.get('flag-x'))
