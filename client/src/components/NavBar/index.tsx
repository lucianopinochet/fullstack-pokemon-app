import { useSelector, useDispatch } from "react-redux"
import { useLocation } from "wouter"
import { Box, IconButton } from "@mui/material"
import { Home, Login, Logout, Create } from "@mui/icons-material"

import { RootState, setLogout } from "../../state/Reducers"
import SearchForm from "../SearchForm"
import { useInfo } from "../../hooks/useInfo";
import  FlexBetween  from "../FlexBetween"

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
      <IconButton onClick={() => setLocation('/')}>
        <FlexBetween 
          sx={{
            height:"45px",
            flexDirection:"column",
            gap:"0",
            fontSize:"17px"
            
            
          }}
        >
          <Home/>
          Home
        </FlexBetween>
      </IconButton>      
      {
        !token 
        ?
          <>
            <IconButton onClick={() => setLocation('/login')}>
              <FlexBetween 
                sx={{
                  height:"45px",
                  flexDirection:"column",
                  gap:"0",
                  fontSize:"17px"
                }}
              >
                <Login/>
                Login
              </FlexBetween>
            </IconButton>
            <IconButton onClick={() => setLocation('/register')}>
              <FlexBetween 
                sx={{
                  height:"45px",
                  flexDirection:"column",
                  gap:"0",
                  fontSize:"17px"
                }}
              >
                <Create/>
                Register
              </FlexBetween>
            </IconButton>
          </>
        :
          <IconButton onClick={handleClick}>
            <FlexBetween 
              sx={{
                height:"45px",
                flexDirection:"column",
                gap:"0",
                fontSize:"17px"
              }}
            >
              <Logout />
              Logout
            </FlexBetween>
          </IconButton>
      }
      
      <SearchForm handleSearch={setSearch}/>
      
      {userName && <FlexBetween
        sx={{
          fontSize:'16px',
          fontFamily:'"Roboto","Helvetica","Arial",sans-serif',
          height:"45px",

        }}
      >
        {userName} 
      </FlexBetween>}
    </Box>
  )
} 