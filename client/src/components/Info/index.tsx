type Props = {
  prop:string
  pokemon:object
}

const Info: React.FC<Props> = ({prop, pokemon}) => {
  const value = pokemon[prop as keyof typeof pokemon]
  if (typeof value !== "object") {
    return (
      <li >
        {`${prop}:${value}`}
      </li>
    )  
  }else{
    return(
      <li >
        {`${prop}:object`}
      </li>
    ) 
  }
}

export default Info