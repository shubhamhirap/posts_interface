import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer"
import HomeView from "./Pages/HomeView"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
        <Route exact path="/" component={HomeView}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
