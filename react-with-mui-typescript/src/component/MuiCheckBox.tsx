import { Box, FormControlLabel, Checkbox } from "@mui/material";
import { useState } from "react";

export const MuiCheckBox = () => {
  const [acceptTnC, setAcceptTnc] = useState(false);
  console.log({ acceptTnC });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnc(event.target.checked);
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="i accept terms and condition "
          control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
        />
      </Box>
    </Box>
  );
};
