import Navbar from "../../components/NavBar/index"
import SearchBar from "../../components/SearchForm";
import PokemonInfo from "../../components/PokemonInfo";
import { useInfo } from "../../hooks/useInfo";
export default function Home(){
  const {pokemon} = useInfo()

  return (
    <>
      <Navbar /> 
      <SearchBar />
      <PokemonInfo />
    </>
  )
}
