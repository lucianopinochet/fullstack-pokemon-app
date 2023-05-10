import { useEffect, useState } from "react"
import getPokemon from "../../services/getPokemon"
import { useDispatch } from "react-redux"
import { setPokemon } from "../../state/Reducers"
export const useInfo = () => {
  const [pokemon, setPokemon] = useState({name:'pikachu'})
  const [search, setSearch] = useState('pikachu')

  const dispatch = useDispatch()

  useEffect(() => {
    const data = getPokemon(search).then((data)=>{
      setPokemon(data)
      console.log(data)
    })
  },[search,setPokemon])
  return {pokemon ,setSearch }
}