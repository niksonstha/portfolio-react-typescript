import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { theme } from "./theme/theme.ts";

const customeTheme = extendTheme(theme);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={customeTheme}>
    <App />
  </ChakraProvider>
);
