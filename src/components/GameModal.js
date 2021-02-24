import '../styles/GameModal.css'

function GameModal({ show, changeShow, children }) {
  if (!show) return null

  return (
    <div className="modal">
      <div className="modal-container">
        <h1 className="modal-title">How to play</h1>
        <h3 className="modal-text">Choose Pokemon that you haven't chosen.</h3>
        <button className="modal-btn" onClick={() => changeShow()}>
          Close
        </button>
      </div>
    </div>
  )
}

export default GameModal
