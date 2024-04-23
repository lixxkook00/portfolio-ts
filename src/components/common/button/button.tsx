import { Button } from "@mui/material";
import { ButtonTypes } from "./types";


export default function PrimaryButton( { text, type = 'outlined' } : ButtonTypes) {
  return (
    <Button variant="outlined" disableElevation>
      { text }
    </Button>
  )
}
