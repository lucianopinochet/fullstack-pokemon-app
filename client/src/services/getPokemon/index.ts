const API_URL = "https://pokeapi.co/api/v2/pokemon/"

const getPokemon = (pokemon = 'pikachu') => {
  if (pokemon == 'Nidoran\u2640'){
    const res = fetch(`${API_URL}29/`)
    .then(res => res.json())
    .catch(() => {throw Error})
    return res
  }else if(pokemon == 'Nidoran\u2642'){
    const res = fetch(`${API_URL}32/`)
    .then(res => res.json())
    .catch(() => {throw Error})
    return res
  }
  const res = fetch(`${API_URL}${pokemon.toLowerCase()}/`)
  .then(res => res.json())
  .catch(() => {throw Error})
  return res
}          

export default getPokemon