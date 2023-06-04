import "./App.css";
import { MuiButton } from "./component/MuiButton";
import MuiRadioButton from "./component/MuiRadioButton";
import { MuiTypography } from "./component/MuiTypography";
import { Select } from "./component/Select";
import TextsField from "./component/TextsField";
import { Stack } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Stack spacing={10}>
        <MuiTypography />
        <MuiButton />
        <TextsField />
        <Select />
      </Stack>
      <MuiRadioButton />
    </div>
  );
}

export default App;
