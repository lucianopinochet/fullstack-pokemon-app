import {Formik} from "formik"
import * as yup from "yup"
import { Box, Button, TextField } from "@mui/material"
import Dropzone from "react-dropzone"
const Form = () => {
  const registerSchema = yup.object().shape({
    userName: yup.string().required("Required"),
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().required("Required").email("Invalid Email"),
    password: yup.string().required("Required"),
    picturePath: yup.string().required("Required"),
  }) 
  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValuesRegister}
      validationSchema={registerSchema}
    >
    {formik => {
      const {values,
        errors,
        touched,
        handleSubmit,
        setFieldValue} = formik
        return (
      <form onSubmit={handleSubmit}>
        <Box>
          <TextField 
            label="Username"
            value={values.userName}
            name="userName"
            error={errors.userName}
            autoFocus={true}
          />
          <TextField 
            label="First Name"
            value={values.firstName}
            name="firstName"
            error={errors.firstName}
            autoFocus={true}
          />
          <TextField 
            label="Last Name"
            value={values.lastName}
            name="lastName"
            error={errors.lastName}
            autoFocus={true}
          />
          <TextField 
            label="Email"
            value={values.email}
            name="email"
            error={errors.email}
            autoFocus={true}
          />
          <TextField 
            label="Password"
            type="password"
            value={values.password}
            name="password"
            error={errors.password}
            autoFocus={true}
          />
          <Dropzone
            accept = {}

            
          >

          </Dropzone>
        </Box>
      </form>

        )
    }
    }
  </Formik>
  )
}

export default Form