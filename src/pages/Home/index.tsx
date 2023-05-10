import Navbar from "../../components/NavBar/index"
import SearchForm from "../../components/SearchForm";
import PokemonInfo from "../../components/PokemonInfo";
import { useInfo } from "../../hooks/useInfo";
export default function Home(){

  const {pokemon, setSearch} = useInfo()

  return (
    <>
      <Navbar /> 
      <SearchForm handleSearch={setSearch}/>
      <PokemonInfo pokemon={pokemon}/>
    </>
  )
}
