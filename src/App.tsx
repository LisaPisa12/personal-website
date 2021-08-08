import React from "react";
import HomePage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import About from "./Components/About";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <About />
    </>
  );
};

export default App;
