import React from "react";
import "../Style/Navbar.css";
function Navbar() {
  return (
    <div className="Navbar">
      <nav className="Navcontainer topBotomBordersIn">
        <a href="#Home">.home()</a>
        <a href="#About">.about()</a>
        <a href="#Project">.myProjects()</a>
        <a href="#Contact">.contact()</a>
      </nav>
    </div>
  );
}

export default Navbar;
