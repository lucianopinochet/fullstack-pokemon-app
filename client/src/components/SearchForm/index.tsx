import React, { Dispatch } from "react"
import { InputBase, IconButton } from "@mui/material"
import { Search } from "@mui/icons-material"
import FlexBetween from "../FlexBetween"
import './index.css'
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

  return (
    <form onSubmit={handleSubmit} >
      <FlexBetween>
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
      </FlexBetween>
    </form>
  )
}

export default SearchForm

