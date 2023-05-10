
const SearchForm = ({handleSearch}) => {
  
  const handleSubmit = (e:any) => {
    e.preventDefault()
    handleSearch(e.target.pokemonName.value)
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

export default SearchForm