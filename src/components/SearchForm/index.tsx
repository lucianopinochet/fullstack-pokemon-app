import { useInfo } from "../../hooks/useInfo"

const SearchBar = () => {
  
  const {setSearch} = useInfo()
  const handleSubmit = (e:any) => {
    e.preventDefault()
    setSearch(e.target.pokemonName.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="pokemonName" 
        type="text"
      />
      <input type="submit" />
    </form>
  )
}

export default SearchBar