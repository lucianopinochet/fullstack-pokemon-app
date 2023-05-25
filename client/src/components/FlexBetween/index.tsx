import { Box } from "@mui/material";
import { styled } from "@mui/system";

const FlexBetween = styled(Box)({ 
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color:"white",
  borderRadius:"9px",
  padding:"0.1rem 1.5rem",
  height:"45px",
});

export default FlexBetween;
