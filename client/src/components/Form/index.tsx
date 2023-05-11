import {Formik} from "formik"
import * as yup from "yup"

const Form = () => {
  const registerSchema = yup.object().shape({
    userName: yup.string().required("Required"),
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().required("Required").email(),
    password: yup.string().required("Required"),
    picturePath: yup.string().required("Required"),
  }) 
  return <>

  </>
}

export default Form