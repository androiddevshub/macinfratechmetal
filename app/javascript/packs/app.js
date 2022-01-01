import * as React from "react";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import "./app.css";
import Routes from "./routes";
export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}
