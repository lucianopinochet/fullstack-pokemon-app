import { useSelector, useDispatch } from "react-redux"
import { useLocation } from "wouter"
import { Box, IconButton, FormControl, Select, MenuItem } from "@mui/material"
import { Home } from "@mui/icons-material"

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
      <SearchForm handleSearch={setSearch}/>
      
      {userName && <FlexBetween
        sx={{
          fontSize:'16px',
        }}
      >
        {userName} 
      </FlexBetween>}
      <FlexBetween>
        <FormControl variant='standard'>
          <Select
            sx={{
              width:'75px'
            }}
          >
            {
              !token
              ?
                <>
                <MenuItem onClick={() => setLocation('/login')}>Login</MenuItem>
                <MenuItem onClick={() => setLocation('/register')}>Register</MenuItem>
                </>
              :
              <MenuItem onClick={handleClick}>Logout</MenuItem>

            }
          </Select>
        </FormControl>
      </FlexBetween>
    </Box>
  )
} 