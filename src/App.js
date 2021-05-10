import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./style.css";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Route exact path="/" component={About} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
