import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from './Payment'
import Orders from "./Orders"
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe, loadStripeValue } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe(
  "pk_test_51HQALCAuuNIxY3IZDI2pE2mWMCSC1ZsZKElYkKHZ6XzM3zdYm0GrosV5a3hd8sxnir6eKmbxn3YuYYJCockIxC7l00m7rXMMsK"
);

//AHmed

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS', authUser);

      if (authUser) {
        //the user just logged on / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])

  return (
    //BEM
    <Router>
      <div className="App">

        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
            <h1>Login Page</h1>
          </Route>
          <Route path="/chechout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
