import React from "react";
import HomePage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Works from "./Components/Works";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <About />
      <Works />
    </>
  );
};

export default App;
