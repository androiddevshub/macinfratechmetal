import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/pages/About";
import WhyUs from "./components/pages/WhyUs";
import ProjectManagement from "./components/pages/ProjectManagement";
import Clients from "./components/pages/Clients";
import Contact from "./components/pages/Contact";
import Home from "./components/Home";
function Routes() {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/project_management">
        <ProjectManagement />
      </Route>
      <Route path="/why_us">
        <WhyUs />
      </Route>
      <Route path="/clients">
        <Clients />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
export default Routes;
