import {Formik, FormikHelpers} from "formik"
import * as yup from "yup"
import { Box, Button, TextField } from "@mui/material"
import {useDispatch, useSelector} from "react-redux"
import { setLogin } from "../../state/Reducers"
import {useLocation} from "wouter"
import DropzoneComp from "../DropzoneComp"
type Props = {
  userName: string
    firstName: string
    lastName: string
    email: string
    password: string
    picturePath: Blob 
    [index:string]:string | Blob
}
interface RootState {
  session: {
    userName:string
    token:string
    picturePath:string
  }
}

const Form:React.FC<unknown> = () => {
  const dispatch = useDispatch()
  const [,setLocation] = useLocation()
  const {userName, picturePath, token} = useSelector((state: RootState) => state.session)

  const register = async (values:Props, onSubmitProps:FormikHelpers<Props>) => {
    const formData = new FormData()
    
    for(const value in values) {
      formData.append(value, values[value])
    }
    formData.append("picturePath", values.picturePath.name)
    
    // for (const key of formData.values()) {
    //   console.log(key);
    // }
    // console.log(values.picturePath)
    const savedUserResponse = await fetch(
      "http://localhost:3001/auth/register",
      {
        method: "POST",
        body:formData
      }
    )
    
    const savedUser = await savedUserResponse.json()
    // console.log(savedUser)
    // onSubmitProps.resetForm()
    if(savedUser){
      // console.log(userName, picturePath, token)
      dispatch(setLogin({userName:savedUser.userName,token:savedUser.token,picturePath:savedUser.picturePath}))
      // setLocation("/")
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

  const initialValuesRegister:Props = {
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    picturePath: new Blob,
  }

  const handleFormSubmit  = async (values:Props, onSubmitProps:FormikHelpers<Props>) => {
    await register(values, onSubmitProps)
  }

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValuesRegister}
      validationSchema={registerSchema}
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
          <form onSubmit={handleSubmit}>
            <Box>
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
              <DropzoneComp func={setFieldValue}/>
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

// const Form = () => {}
export default Form
