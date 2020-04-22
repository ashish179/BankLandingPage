import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./navbar";
import Middle from "./middle";
import Top from "./Top";
import Bottom from "./Bottom";
import Slide from "./slide";
import Footer from "./footer";
import Login from "./login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

const Home = () => (
  <div>
    <Navbar />
    <Top />
    <Middle />
    <Slide />
    <Bottom />
    <Footer />
  </div>
);

export default App;
