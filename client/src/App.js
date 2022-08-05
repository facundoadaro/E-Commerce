import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import NavBar from "./components/NavBar";
import Products from "./components/Products/Products";
import theme from "./styles/styles";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
