import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import NavBar from "./components/NavBar";
import Products from "./components/Products/Products";
import theme from "./styles/styles";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import firebaseApp from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionTypes } from "./reducer";

function App() {
  const dispatch = useDispatch();
  const auth = getAuth(firebaseApp);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: actionTypes.SET_USER,
          payload: user,
        });
      }
    });
  });

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
