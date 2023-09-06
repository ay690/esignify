import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
    </Router>
  );
}

export default App;
