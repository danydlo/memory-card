import { useState, useEffect } from 'react'
import Card from './components/Card'
import './assets/styles/App.css'

function App() {
  const [pokemon, setPokemon] = useState({})

  const touched = () => {
    if (!pokemon.touched) setPokemon((prevState) => ({ ...prevState, touched: true }))
  }

  useEffect(() => {
    const poke = {
      id: 0,
      url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png',
      touched: false
    }

    setPokemon(poke)
  }, [])

  return (
    <>
      <Card pokemon={pokemon} touched={touched} />
    </>
  )
}

export default App
