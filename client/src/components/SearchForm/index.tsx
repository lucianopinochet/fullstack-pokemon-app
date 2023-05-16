import React, { Dispatch } from "react"
import { IconButton, Autocomplete, TextField } from "@mui/material"
import { Search } from "@mui/icons-material"
import FlexBetween from "../FlexBetween"
import './index.css'
import pokemons from "../../json/PokemonList/parsepokemon.json"
type Props = {
  handleSearch:Dispatch<React.SetStateAction<string>>
}
const SearchForm: React.FC<Props> = ({handleSearch}) => {
  
  const handleSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      pokemonName: {value:string}
    }
    console.log(target.pokemonName.value)
    handleSearch(target.pokemonName.value)
  }
  const inputStyle = {
    color:'#fff'
  }
  return (
    <form onSubmit={handleSubmit} >
      <FlexBetween sx={{height:"45px"}}>
        <Autocomplete 
          disablePortal
          options={pokemons}
          id='search-input'
          renderInput={(params) => {
            return(
              <TextField
              sx={{
                width: "200px",
              }}
              style={inputStyle}
              placeholder="Search..." 
              variant='standard'
              name="pokemonName"
              {...params}
              InputProps={{
                startAdornment: (
                  <IconButton >
                    <Search sx={{color:'#fff'}}/>
                  </IconButton>
                ),
              }}
            />)
          }}
        />
      </FlexBetween>
    </form>
  )
}

export default SearchForm

