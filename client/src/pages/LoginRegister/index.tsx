import React from "react"
import { Link } from "wouter"
import { Button } from "@mui/material"
import Form from "../../components/Form"

type Prop = {
  isLogin:boolean
}
const Register:React.FC<Prop> = ({isLogin}) => {
  return <>
    <Form isLogin={isLogin}/>
    <div className="submit-input">
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
          Back
        </Button>
      </Link>
    </div>
  </>
}
export default Register