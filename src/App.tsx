import { CssBaseline, ThemeProvider } from "@mui/material";
import Main from "./Main";
import theme from "helpers/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  );
}

export default App;
