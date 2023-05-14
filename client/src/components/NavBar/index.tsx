import { useSelector, useDispatch } from "react-redux"
import { Link } from "wouter"
import { Button } from "@mui/material"

import { RootState, setLogout } from "../../state/Reducers"
import SearchForm from "../SearchForm"
import { useInfo } from "../../hooks/useInfo";

import './index.css'
export default function Navbar(){
  
  const {userName, token } = useSelector((state:RootState) => state.session)
  
  const dispatch = useDispatch()

  const {setSearch} = useInfo()

  const handleClick = () => {
    dispatch(
      setLogout()
    )
  }
  return (
    <nav>
      <Link to='/'>
        <Button 
          sx={{
            m: "2rem 0",
            p: "1rem",
            backgroundColor: '#aaaa',
            color: '#fff',
            "&:hover": { backgroundColor: '#99aa11' },
            "&:visited": { color: '#fff' },
          }}
        >
          Home
        </Button>
      </Link>
      {
        !token 
        ?
          <>
            <Link to='/login'>
              <Button 
                  sx={{
                    m: "2rem 0",
                    p: "1rem",
                    backgroundColor: '#aaaa',
                    color: '#fff',
                    "&:hover": { backgroundColor: '#99aa11' },
                    "&:visited": { color: '#fff' },
                  }}
              >
                Login
              </Button>
            </Link>
            
            <Link to='/register'>
              <Button 
                  sx={{
                    m: "2rem 0",
                    p: "1rem",
                    backgroundColor: '#aaaa',
                    color: '#fff',
                    "&:hover": { backgroundColor: '#99aa11' },
                    "&:visited": { color: '#fff' },
                  }}
              >
                Register
              </Button>
            </Link>  
          </>
        :
          <>
            <Button
              onClick={handleClick}
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: '#aaaa',
                color: '#fff',
                "&:hover": { backgroundColor: '#99aa11' },
                "&:visited": { color: '#fff' },
              }}
            >
              Logout
            </Button>
          </>
      }
      
      <SearchForm handleSearch={setSearch}/>
      
      <h1 style={{fontSize:'16px'}}> {userName} </h1>
    </nav>
  )
} 