import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Layouts/Navbar";
import Home from "./Components/Layouts/Home";
import About from "./Components/Layouts/About";
import Projects from "./Components/Layouts/Projects";
import ContactSection from "./Components/Layouts/ContactSection";
import Footer from "./Components/Layouts/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
