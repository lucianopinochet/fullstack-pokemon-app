import { PokemonContext } from "../../context/PokemonContext"
import {useContext, useEffect, useRef, useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPokemon } from "../../state/Reducers"
const SearchBar = () => {
  // const dispatch = useDispatch()
  // const pokemonData = {name:'pikachu'}
  const Data = useSelector((state) => state.pokemonData)
  
  // const {setSearch, search} = useContext(PokemonContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    // dispatch(setPokemon({pokemonData}))
    console.log(e.target.pokemonName.value)
  }
  const handleChange = (e) => {
    console.log(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="pokemonName" 
        type="text"
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  )
}

export default SearchBar