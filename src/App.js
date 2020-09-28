import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { HomePage, Products, Services, SignUp } from "./pages";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/signup" component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
