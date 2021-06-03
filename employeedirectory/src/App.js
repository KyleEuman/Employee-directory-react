import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route  />
          <Route  />
          <Route  />
          <Route  />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
