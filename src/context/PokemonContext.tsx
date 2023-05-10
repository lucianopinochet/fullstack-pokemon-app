import React, {useState} from "react"

const Context = React.createContext({})


export const PokemonContextProvider = ({children}:any) => {
  const [pokemon, setPokemon] = useState({})
  return (
    <Context.Provider value={{pokemon, setPokemon}}>
      {children}
    </Context.Provider>)
}
export default Context