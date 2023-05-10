import { useInfo } from "../../hooks/useInfo"

const PokemonInfo = () => {
  const {pokemon} = useInfo()
  return (
    <h1>
      {pokemon.name}
    </h1>
  )
}

export default PokemonInfo