import '../styles/GameOver.css'

function GameOver({ gameStatus, score }) {
  return (
    <div className="gameover">
      <h1>Game Over!</h1>
      <h2>Your score: {score}</h2>
      <button onClick={() => gameStatus(false)}>New Game</button>
    </div>
  )
}

export default GameOver
