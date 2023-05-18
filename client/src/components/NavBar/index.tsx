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
        m:"10px 10px 40px 10px",
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
            backgroundColor:"#6aacf6",
            width:"100px",
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
                label='Options'
                displayEmpty
                  >
                  <MenuItem 
                    className="item-login-drop" 
                    value=''
                    disabled
                  >
                    <em>
                    Options
                    </em>
                  </MenuItem>
                  <MenuItem
                    onClick={() => setLocation('/login')}
                    value="login"
                    className="item-login-drop"
                  >
                    Sign In
                  </MenuItem>
                  <MenuItem 
                    onClick={() => setLocation('/register')}
                    value="register"
                    className="item-login-drop"
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
                  <MenuItem className="item-login-drop" >{userName}</MenuItem>
                  <MenuItem className="item-login-drop" value="profile">Profile</MenuItem>
                  <MenuItem className="item-login-drop" value="settings">Settings</MenuItem>
                  <MenuItem className="item-login-drop" onClick={handleClick} value="logout">Logout</MenuItem>
                </Select>
              </>
            )
          }
        </FormControl>
      </FlexBetween>
      
    </Box>
  )
} 