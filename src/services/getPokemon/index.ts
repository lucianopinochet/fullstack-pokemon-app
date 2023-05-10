const API_URL = "https://pokeapi.co/api/v2/pokemon/"

const getPokemon = (pokemon = 'pikachu') => {
  const res = fetch(`${API_URL}${pokemon.toLowerCase()}/`)
  .then(res => res.json())
  .catch(() => {
    return {}
  })
  return res
}          

export default getPokemon