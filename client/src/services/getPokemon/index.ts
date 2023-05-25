const API_URL = "https://pokeapi.co/api/v2/pokemon/"

const getPokemon = (id:number) => {

  const res = fetch(`${API_URL}${id}/`)
  .then(res => res.json())
  .catch((err) => {
      console.log(err)
      throw err
  })
  return res
}          

export default getPokemon