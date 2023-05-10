import { useEffect, useState } from "react"
import getPokemon from "../../services/getPokemon"
import {useContext} from "react"
import PokemonContext from "../../context/PokemonContext"
export const useInfo = () => {
  const [search, setSearch] = useState('pikachu')

  const {pokemon, setPokemon} = useContext(PokemonContext)

  useEffect(() => {
    const data = getPokemon(search).then((data)=>{
      setPokemon(data)
    })
  },[search])
  return {pokemon ,setSearch }
}