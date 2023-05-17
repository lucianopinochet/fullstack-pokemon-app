import { useSelector, useDispatch } from "react-redux"
import { useLocation } from "wouter"
import { Box, IconButton, FormControl, Select, MenuItem, InputLabel } from "@mui/material"
import { Home } from "@mui/icons-material"

import { RootState, setLogout } from "../../state/Reducers"
import SearchForm from "../SearchForm"
import { useInfo } from "../../hooks/useInfo";
import  FlexBetween  from "../FlexBetween"

import './index.css'
export default function Navbar(){
  
  const {userName, token } = useSelector((state:RootState) => state.session)
  
  const dispatch = useDispatch()

  const [Location ,setLocation] = useLocation()

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
      <IconButton onClick={() => {
        if(Location != "/")setLocation('/')
        }}>
        <FlexBetween 
          sx={{
            height:"45px",
            flexDirection:"column",
            gap:"0",
            fontSize:"17px",
            backgroundColor:"#6aacf6"
          }}
        >
          <Home/>
          Home
        </FlexBetween>
      </IconButton>      
      <SearchForm handleSearch={setSearch}/>
      <FlexBetween
        sx={{
          backgroundColor:"#ee6239",
        }}
      >
        <FormControl variant='standard' >
          {
            !token
            ?(
              <Select
                sx={{
                  width:'100px',
                  color:"#fff !important",
                }}
                displayEmpty
                  >
                  <MenuItem>Options</MenuItem>
                  <MenuItem
                    onClick={() => setLocation('/login')}
                    value="login"
                  >
                    Login
                  </MenuItem>
                  <MenuItem 
                    onClick={() => setLocation('/register')}
                    value="register"
                  >
                    Register
                  </MenuItem>
              </Select>
            )
            :(
              <>
                <Select
                  sx={{
                    width:'100px',
                    color:"#fff !important",
                  }}
                  displayEmpty
                >
                  <MenuItem >{userName}</MenuItem>
                  <MenuItem onClick={handleClick} value="logout">Logout</MenuItem>
                </Select>
              </>
            )


          }
        </FormControl>
      </FlexBetween>
    </Box>
  )
} 