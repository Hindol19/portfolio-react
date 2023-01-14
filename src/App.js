import React from "react";
import Navbar from "./Components/Layouts/Navbar";
import Home from "./Components/Layouts/Home";
import About from "./Components/Layouts/About";
import Projects from "./Components/Layouts/Projects";
import Footer from "./Components/Layouts/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
