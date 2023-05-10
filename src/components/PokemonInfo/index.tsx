import Info from "../Info";
const PokemonInfo = ({pokemon}:any) => {
  const keys = Object.keys(pokemon)
  const list = []
  // for (const key of pokemon){
    // }
  for (const key of keys) {
    list.push(key)
  }
  console.log(list)
  return (
    <>
      {
        list.map((prop, index) => {
          if(typeof(pokemon[prop]) !== "object"){
            return <Info prop={prop} index={index} pokemon={pokemon}/>
          }
        })
      }
    </>
  )
}

export default PokemonInfo