import { pokemon } from './pokemon'

function makePokes() {
  let pokes = []

  for (let i = 1; i < 152; i++) {
    pokes.push({
      id: i,
      url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png`,
      name: pokemon[i - 1],
      touched: false
    })
  }
  shuffleArray(pokes)

  return pokes
}

function checkPokes(pokes) {
  let touched = true

  pokes.forEach((poke) => {
    if (!poke.touched) touched = false
  })

  return touched
}

function makeLevel(total) {
  let pokes = makePokes()
  let level = []

  for (let i = 0; i < total; i++) level.push(pokes[i])

  return level
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

export { checkPokes, makeLevel, shuffleArray }
