import Navbar from "../../components/NavBar/index"
import PokemonInfo from "../../components/PokemonInfo";
import  useInfo  from "../../hooks/useInfo";
export default function Home(){

  const {pokemon} = useInfo()

  return (
    <>
      <Navbar extended={true}/> 
      <PokemonInfo pokemon={pokemon}/>
    </>
  )
}
