import { Box } from "@mui/material";
import { styled } from "@mui/system";

const FlexBetween = styled(Box)({ // component to style another component 
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor:'#333333',
  color:"white",
  borderRadius:"9px",
  gap:"10rem",
  padding:"0.1rem 1.5rem",
  height:"45px",
});

export default FlexBetween;
