import { Stack, Rating } from "@mui/material";
import { useState } from "react";

const MuiRating = () => {
  const [ratingValue, setRatingValue] = useState<number | null>(null);
  console.log({ ratingValue });

  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setRatingValue(newValue);
  };

  return (
    <Stack>
      <Rating value={ratingValue} onChange={handleChange} precision={0.5} />
    </Stack>
  );
};

export default MuiRating;
