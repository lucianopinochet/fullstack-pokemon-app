import { useSelector } from "react-redux"
import { Link } from "wouter"

import { RootState } from "../../state/Reducers"
import SearchForm from "../SearchForm"
import { useInfo } from "../../hooks/useInfo";

import './index.css'
export default function Navbar(){
  
  const {userName } = useSelector((state:RootState) => state.session)

  const {setSearch} = useInfo()

  return (
    <nav>
      <Link to='/' >Home</Link>
      <Link to='/login' >Login</Link>
      <Link to='/register' >Register</Link>
      <SearchForm handleSearch={setSearch}/>
      <h1 style={{fontSize:'16px'}}> {userName} </h1>
    </nav>
  )
} 