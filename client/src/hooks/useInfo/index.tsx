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
        if(typeof(data.name) != 'undefined'){
          document.title = `Pokemon | ${data.name}`
        }else{
          document.title = "Error"
        }
      })
    }
  },[search, setPokemon])
  return {pokemon ,setSearch }
}