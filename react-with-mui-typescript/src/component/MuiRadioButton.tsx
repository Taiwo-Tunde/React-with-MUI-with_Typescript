import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useState } from "react";

const MuiRadioButton = () => {
  const [buttonValue, setButtonValue] = useState("");

  console.log({ buttonValue });
  const handleButtonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setButtonValue(event.target.value);
  };

  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          {" "}
          Years of Experience
        </FormLabel>
        <RadioGroup value={buttonValue} onChange={handleButtonChange}>
          <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;
