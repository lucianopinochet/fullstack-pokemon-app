import {Formik, FormikHelpers} from "formik"
import * as yup from "yup"
import { Box, Button, TextField } from "@mui/material"
import {useDispatch} from "react-redux"
import {useLocation} from "wouter"
import { useState } from "react"
import { setLogin } from "../../state/Reducers"
import DropzoneComp from "../DropzoneComp"
import FlexBetween from "../FlexBetween"
import './index.css'

type Props = {
    userName: string
    firstName?: string
    lastName?: string
    email?: string
    password: string
    picturePath?: Blob 
    [index:string]: string | Blob | undefined
}

const Form = () => {
  const dispatch = useDispatch()
  
  const [Location ,setLocation] = useLocation()
  const isLogin = Location == '/login' ? true : false
  console.log(Location)
  const [Error, setError] = useState({
    userName:false,
    email:false,
    password:false,
  })


  const login = async(values:Props, onSubmitProps:FormikHelpers<Props>) => {
    const loggedReturn = await fetch("http://localhost:3001/auth/login",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(values),
    })
    
    const loggedIn = await loggedReturn.json()
    console.log(loggedIn)
    if(loggedIn.error){
      if(loggedIn.error.keyPattern.userName == 1){
        setError(loggedIn.error.keyPattern)
      }else{
        setError(loggedIn.error.keyPattern)
        
      }
      console.log(Error)
    }else{
      onSubmitProps.resetForm()
      console.log("Loggin succesful, user: ", loggedIn.user)
      dispatch(
        setLogin(
          {
            token:loggedIn.token,
            userName:loggedIn.user.userName,
            picturePath:loggedIn.user.picturePath
          }
        )
      )
      setLocation("/")
    }
  }
  
  const register = async (values:Props, onSubmitProps:FormikHelpers<Props>) => {
    const formData = new FormData()
    
    for(const value in values) {
      if(value){
        const check = values[value]
        if(typeof(check) !== "undefined"){
          formData.append(value, check)
        }
      }
    }
    if(typeof(values.picturePath) != 'undefined')formData.append("picturePath", values.picturePath.name)
  
    const savedUserResponse = await fetch(
      "http://localhost:3001/auth/register",
      {
        method: "POST",
        body:formData
      }
    )
    

    const savedUser = await savedUserResponse.json()
      
    if(savedUser.error){
      console.log(savedUser.error)
    }else{
      onSubmitProps.resetForm()
      setError({
        userName:false,
        email:false,
        password:false,
      })
      console.log("Registration succesful, user: ", savedUser)
      dispatch(
        setLogin(
          {userName:savedUser.userName,
            token:savedUser.token,
            picturePath:savedUser.picturePath
          }
        )
      )
      setLocation("/")
    }
  }

  const registerSchema = yup.object().shape({
    userName: yup.string().required("Required"),
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().required("Required").email("Invalid Email"),
    password: yup.string().required("Required"),
    picturePath: yup.string(),
  }) 

  const loginSchema = yup.object().shape({
    userName: yup.string().required("Required"),
    password: yup.string().required("Required"),
  }) 

  const initialValuesLogin:Props = {
    userName: "",
    password: "",
  }

    const initialValuesRegister:Props = {
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    picturePath: new Blob,
  }

  const handleFormSubmit  = async (values:Props, onSubmitProps:FormikHelpers<Props>) => {
    isLogin
    ? await login(values, onSubmitProps)
    : await register(values, onSubmitProps)
  }
  const handleUserNameChange = async (e:React.ChangeEvent<HTMLInputElement>, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void):Promise<void> =>  {
    handleChange(e)
    const answer = await fetch(
      "http://localhost:3001/auth/userName",
      {
        method: "POST",
      headers: {"Content-Type": "application/json"},
        body:JSON.stringify({userName:e.target.value})
      }
    )
    const isValid = await answer.json()
    if(!isValid){
      setError((prevError) => {
        return {
          ...prevError,
          userName:true,
        }
      })
    }else{
      setError((prevError) => {
        return {
          ...prevError,
          userName:false,
        }
      })
    }
  }
  const handleEmailChange = async (e:React.ChangeEvent<HTMLInputElement>, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void):Promise<void> =>  {
    handleChange(e)
    const answer = await fetch(
      "http://localhost:3001/auth/email",
      {
        method: "POST",
      headers: {"Content-Type": "application/json"},
        body:JSON.stringify({email:e.target.value})
      }
    )
    const isValid = await answer.json()
    if(!isValid){
      setError((prevError) => {
        return {
          ...prevError,
          email:true,
        }
      })
    }else{
      setError((prevError) => {
        return {
          ...prevError,
          email:false,
        }
      })
    }
  }
  return (
    <Formik
      onSubmit={(values, onSubmitProps) => handleFormSubmit(values, onSubmitProps)}
      initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
      validationSchema={isLogin ? loginSchema : registerSchema}
    >
      {formik => {
        const {values,
          errors,
          handleSubmit,
          handleChange,
          handleBlur,
          touched,
          setFieldValue
        } = formik
        return (
          <form onSubmit={handleSubmit} className="submit-form" >
            <Box 
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
                <FlexBetween
                  sx={{
                    width:'250px',
                    backgroundColor:'#4a8373',
                    flexDirection:'column',
                    gap:'20px',
                    height:'auto',
                    m:'10px',
                    p:'15px'
                  }}
                >
                  {
                    isLogin 
                    ?<TextField 
                      label="Username"
                      variant='standard'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.userName}
                      name="userName"
                      error={
                        Boolean(touched.userName && errors.userName) || Error.userName
                      }
                    />
                    :<TextField 
                      label="Username"
                      variant='standard'
                      onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleUserNameChange(e, handleChange)}
                      onBlur={handleBlur}
                      value={values.userName}
                      name="userName"
                      error={
                        Boolean(touched.userName && errors.userName) || Error.userName
                      }
                    />
                  }
                  {
                    Boolean(touched.userName) && Boolean(errors.userName)
                      ? <p className="error-input">Required</p>
                      : Error.userName &&  <p className="error-input"> The username is already in use</p> 
                  }
                  <TextField 
                    label="Password"
                    variant='standard'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    name="password"
                    error={
                      Boolean(touched.password && errors.password) || Error.password
                    }
                    type="password"
                  />
                  {
                    Boolean(touched.password) && Boolean(errors.password) && <p className="error-input">Required</p>
                  }
                  {!isLogin && (
                    <>
                      <TextField 
                        label="First Name"
                        variant='standard'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        name="firstName"
                        error={
                          Boolean(touched.firstName && errors.firstName) 
                        }
                      />
                      {
                        Boolean(touched.firstName) && Boolean(errors.firstName) && <p className="error-input">Required</p>
                      }
                      <TextField 
                        label="Last Name"
                        variant='standard'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        name="lastName"
                        error={
                          Boolean(touched.lastName && errors.lastName)
                        }
                      />
                      {
                        Boolean(touched.lastName) && Boolean(errors.lastName) && <p className="error-input">Required</p>
                      }
                      <TextField 
                        label="Email"
                        variant='standard'
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleEmailChange(e, handleChange)}
                        onBlur={handleBlur}
                        value={values.email}
                        name="email"
                        error={
                          Boolean(touched.email && errors.email) || Error.email
                        }
                      />
                      {
                        Boolean(touched.email) && Boolean(errors.email)
                        ? <p className="error-input">Required</p>
                        : Error.email &&  <p className="error-input"> The email is already in use</p> 
                      }
                      <DropzoneComp func={setFieldValue} picturePath={values.picturePath}/>
                    </>
                  )}
                  <Button 
                    type="submit"
                    sx={{
                      m: "0.5rem 0",
                      p: "1.5rem 3rem",
                      backgroundColor: '#295241',
                      color: '#fff',
                      "&:hover": { backgroundColor: '#1a352a' },
                    }}
                      >
                        Submit
                  </Button>
                  <Button 
                    onClick={() => setLocation('/')}
                    sx={{
                      m: "0.5rem 0",
                      p: "1rem",
                      backgroundColor: '#295241',
                      color: '#fff',
                      "&:hover": { backgroundColor: '#1a352a' },
                      "&:visited": { color: '#fff' },
                    }}
                  >
                    Back
                  </Button>
                </FlexBetween>
            </Box>
          </form>
        )
    }
    }
  </Formik>
  )
}

export default Form
