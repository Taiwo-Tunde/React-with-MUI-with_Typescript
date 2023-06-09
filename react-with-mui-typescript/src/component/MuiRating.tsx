import { Stack, Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/favoriteBorderIcon";
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
      <Rating
        value={ratingValue}
        onChange={handleChange}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        precision={0.5}
        emptyIcon={<FavoriteIcon fontSize="inherit" />}
      />
    </Stack>
  );
};

export default MuiRating;
