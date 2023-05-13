import Form from "../../components/Form"
import React from "react"
import { Link } from "wouter"
type Prop = {
  isLogin:boolean
}
const Register:React.FC<Prop> = ({isLogin}) => {
  return <>
    <Form isLogin={isLogin}/>
    <Link to='/'>Back</Link>
  </>
}
export default Register