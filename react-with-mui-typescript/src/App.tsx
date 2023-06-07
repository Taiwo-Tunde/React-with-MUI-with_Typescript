import "./App.css";
import { MuiButton } from "./component/MuiButton";
import { MuiCheckBox } from "./component/MuiCheckBox";
import MuiRadioButton from "./component/MuiRadioButton";
import { MuiSwitch } from "./component/MuiSwitch";
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
      <MuiCheckBox />
      <MuiSwitch />
    </div>
  );
}

export default App;
