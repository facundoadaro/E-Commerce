import { ThemeProvider } from "@emotion/react";
import NavBar from "./components/NavBar";
import Product from "./components/Products/Product";
import theme from "./styles/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <NavBar />
        <Product />
      </div>
    </ThemeProvider>
  );
}

export default App;
