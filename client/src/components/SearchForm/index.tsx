import React, { Dispatch } from "react"
import { IconButton, Autocomplete, TextField } from "@mui/material"
import { Search } from "@mui/icons-material"
import FlexBetween from "../FlexBetween"

import './index.css'
import pokemons from "../../json/parsepokemon.json"

type Props = {
  handleSearch:Dispatch<React.SetStateAction<number>>
}
const SearchForm: React.FC<Props> = ({handleSearch}) => {

  const handleSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      pokemonName: {value:string}
    }
    for(const pokemon of pokemons) {
      if(pokemon.label == target.pokemonName.value) {
        handleSearch(pokemon.id)
      }
    }
  }
  return (
    <form onSubmit={handleSubmit} >
      <FlexBetween 
        sx={{
          height:"45px",
          backgroundColor:"#d5ac08",
          gap:'1rem',
          padding:'0.1rem 1rem'
        }}>
        <Autocomplete 
          disablePortal
          options={pokemons}
          id='search-input'
          sx={{
            width:"150px",
            backgroundColor:'#d5ac08',
            
          }}
          renderInput={(params) => 
              <TextField
                variant="standard"
                name='pokemonName'
                type='text'
                placeholder='Search...'
              {...params}
            />
          }
        />
        <IconButton type='submit'>
          <Search />
        </IconButton>
      </FlexBetween>
    </form>
  )
}

export default SearchForm

