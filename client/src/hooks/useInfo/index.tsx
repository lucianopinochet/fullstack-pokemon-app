import { useEffect, useState } from "react"
import getPokemon from "../../services/getPokemon"
import {useContext} from "react"
import PokemonContext from "../../context/PokemonContext"


const useInfo = () => {

  const [search, setSearch] = useState(1)
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
      .catch(() => {
        document.title = "Error"
      })
    }
  },[search, setPokemon])
  return {pokemon ,setSearch }
}

export default useInfo