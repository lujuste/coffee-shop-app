import { useState } from "react";
import RoutesApp from "./routes";
import GlobalStyle from "./shared/globalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import { CustomThemeProvider } from "./hooks/theme";
import { MainHookProvider } from "./modules/Home/hooks/mainHook";

function App() {
  return (
    <Router>
      <MainHookProvider>
        <CustomThemeProvider>
          <GlobalStyle />
          <RoutesApp />
        </CustomThemeProvider>
      </MainHookProvider>
    </Router>
  );
}

export default App;
