const API_URL = "https://pokeapi.co/api/v2/pokemon/"

const getPokemon = (pokemon = 'pikachu') => {
  const res = fetch(`${API_URL}${pokemon}/`)
  .then(res => res.json())
  .then(pokemon => pokemon)
  return res
}          

export default getPokemon