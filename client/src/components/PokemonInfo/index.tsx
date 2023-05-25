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
    },
    height?:number,
    weight?:number,
  }
}
const PokemonInfo: React.FC<Props> = ({pokemon}) => {
  const [color, setColor] = useState(colours['electric'])
  useEffect(() => {
    pokemon.types ? setColor(colours[pokemon.types[0].type.name as keyof typeof colours]) : setColor(colours["electric"])
  },[pokemon, color])
  
  const keys = Object.keys(pokemon) as (keyof typeof pokemon)[]
  if(keys.length > 0 && pokemon.name && pokemon.sprites && pokemon.id && pokemon.types){
    // console.log(pokemon.types)
    return <>
    <FlexBetween
      sx={{
        backgroundColor:`${color.main}`,
        height:'80vh',
        width:'33vw',
        marginLeft:'auto',
        marginRight:"auto",
        gap:'5px',
        flexDirection:'column',
        border:`solid 5px ${pokemon.types[1] ? colours[pokemon.types[1].type.name as keyof typeof colours].main :color.border}`,
        justifyContent:"start",
      }}
      className='info-box'
    >
      <FlexBetween
        sx={{
          height:'20vh',
        }}
      >
        <img loading="lazy" alt={`${pokemon.name}`} src={pokemon.sprites.front_default}/>
      </FlexBetween>
      <FlexBetween
        sx={{
          height:'auto',
          width:"100%",
          display:'inline-block',
          color:'black'
        }}
      >
      {(pokemon.name == 'nidoran-f' || pokemon.name == 'nidoran-m') 
        ?pokemon.name == 'nidoran-f' 
          ? <p>{'Nidoran \u2640'} | ID: 29</p>
          : <p>{'Nidoran \u2642'} | ID: 32</p> 
        :<p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} | ID: {pokemon.id}</p>}
      <FlexBetween
        sx={{
          flexDirection:'column',
          gap:'2px',
          alignItems:"baseline",
          color:'#000'
        }}
        className='attributes'
      >
      <p>Height: {pokemon?.height}</p>
      <p>Weight: {pokemon?.weight}</p>
      <p>Type: {pokemon.types[0].type.name} {pokemon.types[1] && `& ${pokemon.types[1].type.name}`}</p>
      </FlexBetween>
      {/* <ul >
        {
          keys.map((prop, index) => 
              <Info prop={prop} pokemon={pokemon} key={index}/>
          )
        }
      </ul> */}
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