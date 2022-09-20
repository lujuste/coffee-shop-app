import { useState } from "react";
import RoutesApp from "./routes";
import GlobalStyle from "./shared/globalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import { CustomThemeProvider } from "./hooks/theme";

function App() {
  return (
    <Router>
      <CustomThemeProvider>
        <GlobalStyle />
        <RoutesApp />
      </CustomThemeProvider>
    </Router>
  );
}

export default App;
