import {Formik, FormikHelpers} from "formik"
import * as yup from "yup"
import { Box, Button, TextField } from "@mui/material"
import {useDispatch} from "react-redux"
import {useLocation} from "wouter"

import { setLogin } from "../../state/Reducers"
import DropzoneComp from "../DropzoneComp"

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

type FormProp = {
  isLogin:boolean
}

const Form:React.FC<FormProp> = ({isLogin}) => {
  const dispatch = useDispatch()
  
  const [,setLocation] = useLocation()
  
  
  const login = async(values:Props, onSubmitProps:FormikHelpers<Props>) => {
    const loggedReturn = await fetch("http://localhost:3001/auth/login",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(values),
    })
    
    const loggedIn = await loggedReturn.json()

    onSubmitProps.resetForm()
    
    if(loggedIn) {
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
  
  
    onSubmitProps.resetForm()
  
    if(savedUser){
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
          <form onSubmit={handleSubmit} className="submit-form">
            <Box className='submit-input'>
              <TextField 
                label="Username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userName}
                name="userName"
                error={
                  Boolean(touched.userName) && Boolean(errors.userName)
                }
                helperText={touched.userName && errors.userName}
              />
                <TextField 
                  label="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  name="password"
                  error={
                    Boolean(touched.password) && Boolean(errors.password)
                  }
                  type="password"
                  helperText={touched.password && errors.password}
                  />
                  {!isLogin && (
                      <>
    
                        <TextField 
                          label="First Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.firstName}
                          name="firstName"
                          error={
                            Boolean(touched.firstName) && Boolean(errors.firstName)
                          }
                          helperText={touched.firstName && errors.firstName}
                        />
                        <TextField 
                          label="Last Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.lastName}
                          name="lastName"
                          error={
                            Boolean(touched.lastName) && Boolean(errors.lastName)
                          }
                          helperText={touched.lastName && errors.lastName}
                        />
                        <TextField 
                          label="Email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          name="email"
                          error={
                            Boolean(touched.email) && Boolean(errors.email)
                          }
                          helperText={touched.email && errors.email}
                        />
                        <DropzoneComp func={setFieldValue}/>
                      </>
                    ) 
                  }
            </Box>
            <Box>
              <Button 
                type="submit"
              >
                Submit
              </Button>
            </Box>
          </form>
        )
    }
    }
  </Formik>
  )
}

export default Form
