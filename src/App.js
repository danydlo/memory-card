import { useState, useEffect } from 'react'

import Game from './components/Game'
import Navbar from './components/Navbar'
import GameOver from './components/GameOver'

import './styles/App.css'

function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [gameover, setGameover] = useState(true)

  const changeScore = (gameover) => {
    setScore((prevScore) => {
      if (gameover) return 0
      else return prevScore + 1
    })
  }

  const gameStatus = (status) => {
    setGameover(status)
  }

  useEffect(() => {
    if (score > highScore) setHighScore(score)
  }, [score])

  const body = gameover ? (
    <GameOver gameover={gameover} score={score} gameStatus={gameStatus} />
  ) : (
    <div className="memory-card-game">
      <Navbar score={score} highScore={highScore} />
      <Game changeScore={changeScore} gameStatus={gameStatus} />
    </div>
  )

  return body
}

export default App
