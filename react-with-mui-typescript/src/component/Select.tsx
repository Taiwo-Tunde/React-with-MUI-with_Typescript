import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

export const Select = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log({ countries });
  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        value={countries}
        onChange={handleCountryChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
      >
        <MenuItem value="IN"> Indian</MenuItem>
        <MenuItem value="NIG">Nigeria</MenuItem>
        <MenuItem value="FR">France</MenuItem>
      </TextField>
    </Box>
  );
};
