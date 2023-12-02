
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "./them.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <CSSReset />
    <App />
  </ChakraProvider>
);
