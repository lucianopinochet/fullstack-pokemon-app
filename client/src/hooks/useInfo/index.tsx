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
          if(data.name == 'nidoran-f'){
            document.title = `Pokemon | Nidoran\u2640`
          }else if(data.name == 'nidoran-m'){
            document.title = `Pokemon | Nidoran\u2642`
          }else{
            document.title = `Pokemon | ${data.name.charAt(0).toUpperCase() + data.name.slice(1)}`
          }
        }else{
          document.title = "Error"
        }
      })
      .catch((err) => {
        document.title = "Error"
        console.error(err)
      })
    }
  },[search, setPokemon])
  return {pokemon ,setSearch }
}