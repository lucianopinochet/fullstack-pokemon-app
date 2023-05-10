const Info = ({prop, pokemon, key}:any) => {
  return (
    <h1 key={key}>
      {`${prop}:${pokemon[prop]}`}
    </h1>
  )
}

export default Info