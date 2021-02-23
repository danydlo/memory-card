import { useState, useEffect } from 'react'
import { makeLevel, shuffleArray, checkPokes } from '../utils/game'
import Card from './Card'
import '../styles/Game.css'

function Game() {
  const [pokemon, setPokemon] = useState([])

  const touched = (id) => {
    const index = pokemon.findIndex((el) => el.id === id)

    if (pokemon[index].touched) {
      // game over
      console.log('Game Over!')
    } else {
      let shuffled = [...pokemon]
      shuffled[index].touched = true
      // check for end of level
      if (!checkPokes(shuffled)) {
        // shuffle cards
        shuffleArray(shuffled)
        setPokemon(shuffled)
      } else {
        // new level
        const level = makeLevel(pokemon.length + 2)
        setPokemon(level)
      }
    }
  }

  // on mount set up cards
  useEffect(() => {
    const level = makeLevel(4)
    setPokemon(level)
  }, [])

  const cards = pokemon.map((poke) => <Card pokemon={poke} touched={touched} key={poke.id} />)

  return <div className="container">{cards}</div>
}

export default Game
