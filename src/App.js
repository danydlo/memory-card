import { useState, useEffect } from 'react'

import Game from './components/Game'
import Navbar from './components/Navbar'
import GameOver from './components/GameOver'
import GameModal from './components/GameModal'

import './styles/App.css'

function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [gameover, setGameover] = useState(false)
  const [show, setShow] = useState(true)
  const [finalScore, setFinalScore] = useState(0)

  const gameStatus = (status) => {
    setFinalScore(score)
    setGameover(status)
  }
  const changeShow = () => setShow(false)
  const changeScore = (gameover) => {
    setScore((prevScore) => {
      if (gameover) return 0
      else return prevScore + 1
    })
  }

  useEffect(() => {
    if (score > highScore) setHighScore(score)
  }, [score, highScore])

  if (gameover) {
    return <GameOver gameover={gameover} score={finalScore} gameStatus={gameStatus} />
  } else {
    return (
      <>
        <GameModal show={show} changeShow={changeShow} />
        <div className="memory-card-game">
          <Navbar score={score} highScore={highScore} />
          <Game changeScore={changeScore} gameStatus={gameStatus} />
        </div>
      </>
    )
  }
}

export default App
