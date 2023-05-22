import { useSelector, useDispatch } from "react-redux"
import { useLocation } from "wouter"
import { Box, IconButton, FormControl, Select, MenuItem, Avatar } from "@mui/material"
import { Home } from "@mui/icons-material"

import { RootState, setLogout } from "../../state/Reducers"
import SearchForm from "../SearchForm"
import { useInfo } from "../../hooks/useInfo";
import  FlexBetween  from "../FlexBetween"

import './index.css'

type Props = {
  extended: boolean,
}
const Navbar:React.FC<Props> = ({extended}) =>{
  
  const {userName, token, picturePath } = useSelector((state:RootState) => state.session)
  
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
      {Location == '/' && <SearchForm handleSearch={setSearch}/>}
      {extended && <FlexBetween
        sx={{
          backgroundColor:"#ee6239",
          gap:"15px",
          padding:"0.1rem 1rem"
        }}
      >
        {token && <Avatar src={`http://localhost:3001/assets/${picturePath}`}/>}
        <FormControl variant='standard' >
          {
            !token
            ?<>
              <Select
                sx={{
                  width:'100px',
                  color:"#fff !important",
                }}
                value=""
                displayEmpty
              >
                  <MenuItem className="item-login-drop" disabled value="">
                    Options
                  </MenuItem>
                  <MenuItem
                    onClick={() => setLocation('/login')}
                    value="signin"
                    className="item-login-drop"
                  >
                    Sign In
                  </MenuItem>
                  <MenuItem 
                    onClick={() => setLocation('/register')}
                    value="register"
                    className="item-login-drop"
                  >
                    Sign Up
                  </MenuItem>
              </Select>
            </>
            :(
              <>
                <Select
                  sx={{
                    width:'100px',
                    color:"#fff !important",
                  }}
                  value=""
                  displayEmpty
                >
                  <MenuItem className="item-login-drop" value="" disabled>{userName}</MenuItem>
                  <MenuItem className="item-login-drop" value="profile" onClick={() => setLocation('/profile')}>Profile</MenuItem>
                  <MenuItem className="item-login-drop" value="settings">Settings</MenuItem>
                  <MenuItem className="item-login-drop" value="logout" onClick={handleClick}>Logout</MenuItem>
                </Select>
              </>
            )
          }
        </FormControl>
      </FlexBetween>}
      
    </Box>
  )
} 
export default Navbar