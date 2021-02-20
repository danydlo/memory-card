import '../assets/styles/Card.css'

function Card({ pokemon, touched }) {
  return (
    <div className="pokecard" onClick={touched}>
      <img src={pokemon.url} alt="pokemon card" />
      <h3>Scyther</h3>
    </div>
  )
}

export default Card
