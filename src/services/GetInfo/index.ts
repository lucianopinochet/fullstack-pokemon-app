const API_URL = "https://pokeapi.co/api/v2/pokemon/"

const getInfo = (pokemon = "") => {
  return fetch(`${API_URL}${pokemon}/`)
  .then(res => res.json())
  .then(pokemon => pokemon)
}          

export default getInfo