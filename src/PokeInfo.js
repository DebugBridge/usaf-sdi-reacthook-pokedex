import { useState, useEffect } from 'react'

let PokeInfo = () => {
  const [selectedPokemon, setSelectedPokemon] = useState({})
  useEffect(() => {
    //fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
    fetch(`https://pokeapi.co/api/v2${window.location.pathname}`)
      .then(response => response.json())
      .then(pokemon => setSelectedPokemon(pokemon))
      .catch(err => console.error(err))
  }, [window.location.pathname])

  if (Object.keys(selectedPokemon).length === 0) {
    return <div></div>
  } else {
    return (
      <div>
        <img src={`https://images.alexonsager.net/pokemon/fused/${selectedPokemon.id}/${selectedPokemon.id}.129.png`} alt="pokemon" />
        <p>Name: {selectedPokemon.name}</p>
        <ul>
          {
            selectedPokemon.abilities.map(item => <li>{item.ability.name}</li>)
          }
        </ul>

      </div>
    )
  }
}


export default PokeInfo

//grab parse url to get poke url info