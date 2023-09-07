import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
