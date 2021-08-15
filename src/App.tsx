import React from "react";
import HomePage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Works from "./Components/Works";
import Contact from "./Components/Contact";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <About />
      <Works />
      <Contact />
    </>
  );
};

export default App;
