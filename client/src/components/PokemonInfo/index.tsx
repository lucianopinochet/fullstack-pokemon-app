import Info from "../Info"
type Props = {
  pokemon:object
}
const PokemonInfo: React.FC<Props> = ({pokemon}) => {
  const keys = Object.keys(pokemon) as (keyof typeof pokemon)[]
  if(keys.length > 0){
    return (
      <ul >
        {
          keys.map((prop, index) => 
              <Info prop={prop} pokemon={pokemon} key={index}/>
          )
        }
      </ul>
    )
  }else{
    return <h1>
      Invalid pokemon name 
    </h1>
  }
}

export default PokemonInfo