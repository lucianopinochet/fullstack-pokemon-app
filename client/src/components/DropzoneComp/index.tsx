import { useDropzone } from "react-dropzone"
import { Box } from "@mui/material"
import { useEffect} from "react"

import './index.css'

type Prop = {
  func:(field: string, value: File, shouldValidate?: boolean | undefined)=>void
  picturePath: Blob | undefined
}

const DropzoneComp:React.FC<Prop> = ({func, picturePath}) => {
  const {
          getRootProps,
          getInputProps, 
          acceptedFiles,
        } = useDropzone({
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
      border={`2px dashed #aaaaaa`}
      p="1rem"
      sx={{ "&:hover": { cursor: "pointer" } }}
    >
      <input  {...getInputProps()} />
      {
        picturePath
        ? <p className="dropzone">{picturePath.name}</p>
        : <p className="dropzone">Add Picture Here</p>
      }
    </Box>)
}
export default DropzoneComp