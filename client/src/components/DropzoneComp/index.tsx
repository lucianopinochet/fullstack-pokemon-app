import { useDropzone } from "react-dropzone"
import { Box } from "@mui/material"
import { useEffect} from "react"
type Prop = {
  func:(field: string, value: File, shouldValidate?: boolean | undefined)=>void,
}

const DropzoneComp:React.FC<Prop> = ({func}) => {
  const {getRootProps, getInputProps, acceptedFiles} = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.png', '.jpg']
    }
  })
  useEffect(()=>{
    func("picturePath", acceptedFiles[0])
  },[acceptedFiles, func])
  return (
    <Box
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <p>Add Picture Here</p>
    </Box>)
}
export default DropzoneComp