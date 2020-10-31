import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "../pages/index";
import PersonajesPage from "../pages/personajes";
import PersonajePage from "../pages/personaje";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {
  return (
    <Router>
      {children}
      <Route path="/" exact component={Index} />
      <Route path="/personajes" exact component={PersonajesPage} />
      <Route path="/personaje/:id" component={PersonajePage} />
    </Router>
  );
};
