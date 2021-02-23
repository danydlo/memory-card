import { useState } from 'react'
import Game from './components/Game'

function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  return (
    <div className="memory-card-game">
      <Game />
    </div>
  )
}

export default App
