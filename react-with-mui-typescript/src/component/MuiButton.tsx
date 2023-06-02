import { Button, Typography, Stack } from "@mui/material";

export const MuiButton = () => {
  return (
    <Stack display="block" spacing={10}>
      <Stack>
        <Typography>All about Buttons</Typography>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack display="block" spacing={4} direction="row">
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>
    </Stack>
  );
};
