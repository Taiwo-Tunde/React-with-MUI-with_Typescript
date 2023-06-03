import "./App.css";
import { MuiButton } from "./component/MuiButton";
import { MuiTypography } from "./component/MuiTypography";
import TextsField from "./component/TextsField";
import { Stack } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Stack spacing={10}>
        <MuiTypography />
        <MuiButton />
        <TextsField />
      </Stack>
    </div>
  );
}

export default App;
