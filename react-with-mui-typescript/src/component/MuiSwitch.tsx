import { FormControlLabel, Switch, Box } from "@mui/material";
import React, { useState } from "react";

export const MuiSwitch = () => {
  const [switchValue, setSwitchValue] = useState(false);
  console.log({ switchValue });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSwitchValue(event.target.checked);
  };

  return (
    <Box>
      <FormControlLabel
        label="dark mode"
        control={<Switch />}
        value={switchValue}
        onChange = {handleChange}
      />
    </Box>
  );
};
