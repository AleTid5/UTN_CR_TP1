import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layout/Navbar";
import Routes from "./routes";

function App() {
  return (
    <Routes>
      <Navbar />
    </Routes>
  );
}

export default App;
