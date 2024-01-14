import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { theme } from "./theme/theme.ts";
import { BrowserRouter } from "react-router-dom";

const customeTheme = extendTheme(theme);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ChakraProvider theme={customeTheme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>
);
