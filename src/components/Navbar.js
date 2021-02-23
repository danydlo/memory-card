import '../styles/Navbar.css'

function Navbar({ score, highScore }) {
  return (
    <nav className="navbar">
      <h1>Poke-A-Card</h1>
      <div className="navbar-scores">
        <p>Score: {score}</p> |<p>Best: {highScore}</p>
      </div>
    </nav>
  )
}

export default Navbar
