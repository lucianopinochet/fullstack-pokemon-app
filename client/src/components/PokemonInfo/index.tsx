import { useState, useEffect } from "react";

import FlexBetween from "../FlexBetween"
import Info from "../Info"
import colours from "./colors"
import './index.css'

type Props = {
  pokemon:{
    sprites?:{
      front_default:string
    },
    name?:string,
    id?:number,
    types?:{
      [index:number]:{
        type:{
          name:string,
        }
      },
    }
  }
}
const PokemonInfo: React.FC<Props> = ({pokemon}) => {
  const [color, setColor] = useState(colours['electric'])
  useEffect(() => {
    pokemon.types ? setColor(colours[pokemon.types[0].type.name as keyof typeof colours]) : setColor(colours["electric"])
  },[pokemon, color])

  const keys = Object.keys(pokemon) as (keyof typeof pokemon)[]
  if(keys.length > 0 && pokemon.name && pokemon.sprites && pokemon.id){
    return <>
    <FlexBetween
      sx={{
        backgroundColor:`${color}`,
        height:'auto',
        width:'33vw',
        marginLeft:'auto',
        marginRight:"auto",
        gap:'5px',
        flexDirection:'column',
        
      }}
      className='info-box'
    >
      <img loading="lazy" alt={`${pokemon.name}`} src={pokemon.sprites.front_default}/>
      <FlexBetween
        sx={{
          height:'auto',
          width:"100%",
          display:'inline-block',
        }}
      >
      {(pokemon.name == 'nidoran-f' || pokemon.name == 'nidoran-m') 
        ?pokemon.name == 'nidoran-f' 
          ? <p>{'Nidoran \u2640'} | ID: 29</p>
          : <p>{'Nidoran \u2642'} | ID: 32</p> 
        :<p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} | ID: {pokemon.id}</p>}
      <ul >
        {
          keys.map((prop, index) => 
              <Info prop={prop} pokemon={pokemon} key={index}/>
          )
        }
      </ul>
      </FlexBetween>
    </FlexBetween>
    </>
    
  }else{
    return <h1>
      Invalid pokemon name 
    </h1>
  }
}

export default PokemonInfo