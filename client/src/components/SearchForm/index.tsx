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
      <FlexBetween
        sx={{
          backgroundColor:'#333333',
          borderRadius:"9px",
          gap:"10rem",
          padding:"0.1rem 1.5rem",
        }}
      >
        <InputBase
          placeholder="Search..." 
          name="pokemonName"
          sx={{color:"white"}}
        />
        <IconButton type="submit">
          <Search
            sx={{
              color:"#dddddd",
            }}
          />
        </IconButton>
      </FlexBetween>
    </form>
  )
}

export default SearchForm

