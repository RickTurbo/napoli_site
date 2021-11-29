import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import "./"
import App from "./App";
import { theme } from "./theme/theme";
import '@fontsource/abhaya-libre/400.css'
import '@fontsource/abhaya-libre/700.css'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
