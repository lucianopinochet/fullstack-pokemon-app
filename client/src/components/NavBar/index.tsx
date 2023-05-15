import { useSelector, useDispatch } from "react-redux"
import { useLocation } from "wouter"
import { Button, Box, IconButton } from "@mui/material"
import { Home } from "@mui/icons-material"
import { RootState, setLogout } from "../../state/Reducers"
import SearchForm from "../SearchForm"
import { useInfo } from "../../hooks/useInfo";

import './index.css'
export default function Navbar(){
  
  const {userName, token } = useSelector((state:RootState) => state.session)
  
  const dispatch = useDispatch()

  const [,setLocation] = useLocation()

  const {setSearch} = useInfo()

  const handleClick = () => {
    dispatch(
      setLogout()
    )
  }
  return (
    <Box
      sx={{
        height:'5vh',
        p: '5px 16px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <IconButton type="submit">
          <Home
            sx={{
              color:"#dddddd",
              backgroundColor:''
            }}
          />
        </IconButton>
      {
        !token 
        ?
          <>
            <Button 
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: '#aaaa',
                color: '#fff',
                "&:hover": { backgroundColor: '#99aa11' },
                "&:visited": { color: '#fff' },
              }}
              onClick={() => setLocation('/login')}
            >
              Login
            </Button>        
            <Button 
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: '#aaaa',
                color: '#fff',
                "&:hover": { backgroundColor: '#99aa11' },
                "&:visited": { color: '#fff' },
              }}
              onClick={() => setLocation('/register')}
            >
              Register
            </Button>
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
      
      <Box
        sx={{
          fontSize:'16px',
          fontFamily:'"Roboto","Helvetica","Arial",sans-serif'
        }}
      >
        {userName} 
      </Box>
    </Box>
  )
} 