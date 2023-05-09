import {useState, useEffect} from "react";

import getInfo from "../../services/GetInfo"

export default function PokemonInfo() {

  const [pokemon, setPokemon] = useState({name:''})
  useEffect(()=>{
    getInfo("pikachu")
    .then(pokemon => 
      setPokemon(pokemon)
    )
  },[])
  return (
  <>
    <h1>{pokemon.name}</h1>
  </>
  )
}