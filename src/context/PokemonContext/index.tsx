import {  createContext, useState, useEffect } from "react";
import getPokemon from "../../services/getPokemon"



export const PokemonContext = createContext<any>(getPokemon)

const PokemonProvider = ( { children }:any ) => {
  const [pokemon, setPokemon] = useState('')
  const [search, setSearch] = useState('pikachu')
  
  useEffect(()=>{
    getPokemon(search)
    .then(res => 
      setPokemon(res)
    )
  },[search, setSearch])
  
  return(
    <PokemonContext.Provider
      value={{
        pokemon,
        setSearch
      }}        
    >
      {children}
    </PokemonContext.Provider>
    )
}


export default PokemonProvider

