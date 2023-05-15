import React, { Dispatch } from "react"
import { InputBase, IconButton, Autocomplete, TextField } from "@mui/material"
import { Search } from "@mui/icons-material"

import FlexBetween from "../FlexBetween"

import './index.css'
import pokemons from "../../json/PokemonList/parsepokemon.json"
type Props = {
  handleSearch:Dispatch<React.SetStateAction<string>>
}
const SearchForm: React.FC<Props> = ({handleSearch}) => {
  
  console.log(pokemons[1].label)
  const handleSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      pokemonName: {value:string}
    }
    console.log(target.pokemonName.value)
    handleSearch(target.pokemonName.value)
  }

  return (
    <form onSubmit={handleSubmit} >
      <FlexBetween sx={{height:"45px"}}>
        <Autocomplete 
          disablePortal
          options={pokemons}
          renderInput={(params) => {
            console.log(params)
            return <TextField {...params}/>
          }}
        />
      </FlexBetween>
      {/* <FlexBetween
        sx={{height:"45px"}}
      >
        <InputBase
          placeholder="Search..." 
          name="pokemonName"
          sx={{color:"white"}}
          className="search-bar"
        />
        <IconButton type="submit">
          <Search
            sx={{
              color:"white",
            }}
          />
        </IconButton>
      </FlexBetween> */}
    </form>
  )
}

export default SearchForm

