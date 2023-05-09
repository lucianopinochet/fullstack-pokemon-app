import { Link } from "wouter"

// import './index.css'

export default function Navbar(){
  return (
    <nav>
      <Link to='/' style={{gridColumn:6,fontSize: '30px'}}>Home</Link>
      <Link to='/login' style={{gridColumn:10}}>Login</Link>
      <Link to='/register' style={{gridColumn:11}}>Register</Link>
    </nav>
  )
} 