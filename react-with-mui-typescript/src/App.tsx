import "./App.css";
import MuiRating from "./component/MuiRating";
// import { MuiButton } from "./component/MuiButton";
// import { MuiCheckBox } from "./component/MuiCheckBox";
// import MuiRadioButton from "./component/MuiRadioButton";
// import { MuiTypography } from "./component/MuiTypography";
// import { Select } from "./component/Select";
// import TextsField from "./component/TextsField";
// import { MuiSwitch } from "./component/MuiSwitch";
import { Stack } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Stack spacing={10}>
        {/* <MuiTypography />
        <MuiButton />
        <TextsField />
        <Select />
        <MuiRadioButton />
        <MuiCheckBox /> 
        <MuiSwitch />*/}
        <MuiRating />
      </Stack>
    </div>
  );
}

export default App;
