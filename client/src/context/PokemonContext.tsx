import React, {useState, Dispatch} from "react"

type ContextType ={
  pokemon:object
  setPokemon?:Dispatch<React.SetStateAction<string>>
}

const Context = React.createContext<ContextType>({
  pokemon: {}
})

type Props = {
  children: React.ReactNode
}
export const PokemonContextProvider: React.FC<Props> = ({children}) => {
  const [pokemon, setPokemon] = useState({})
  return (
    <Context.Provider value={{pokemon, setPokemon}}>
      {children}
    </Context.Provider>)
}
export default Context