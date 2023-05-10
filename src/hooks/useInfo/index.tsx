import { useEffect, useState } from "react"
import getPokemon from "../../services/getPokemon"
import {useContext} from "react"
import PokemonContext from "../../context/PokemonContext"


export const useInfo = () => {

  const [search, setSearch] = useState('pikachu')
  const {pokemon, setPokemon} = useContext(PokemonContext)

  useEffect(() => {
    if(setPokemon){
      getPokemon(search).then((data)=>{
        setPokemon(data)
      })
    }
  },[search, setPokemon])
  return {pokemon ,setSearch }
}