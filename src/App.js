import React, { Component } from "react";
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import "./App.css";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";

function App() {
  return (
    <HashRouter basename={'/'}>
      <div className="App">
        <header>
          <nav className="top-nav-full">
            <div className="navbar-nav mr-auto">
              <Link to="/" className="nav-link">
                {" "}
                Home{" "}
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </div>
          </nav> 
        </header>

        <body className="flex-container">
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
            <Route path={'/about'} component={About} />
          </Switch>
        </body>
      </div>
    </HashRouter>
  );
}

export default App;
