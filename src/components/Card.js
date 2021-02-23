import '../styles/Card.css'

function Card({ pokemon, touched }) {
  return (
    <div className="pokecard" onClick={() => touched(pokemon.id)}>
      <img src={pokemon.url} alt={`pokemon ${pokemon.name}`} />
      <hr />
      <h3>{pokemon.name}</h3>
    </div>
  )
}

export default Card
