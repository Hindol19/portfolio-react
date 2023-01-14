import React from "react";
import "../Style/Projects.css";
function Projects() {
  return (
    <div className="Projects">
      <div className="projectContainer" id="Project">
        <div className="projectCard projectCard1">
          <div className="pleft1 projectSubCard">Project 1</div>
          <div className="pright1a projectSubCard">Project 2</div>
          <div className="pright1b projectSubCard">Project 3</div>
        </div>
        <div className="projectCard projectCard2">
          <div className="pleft2a projectSubCard">Project 4</div>
          <div className="pleft2b projectSubCard">Project 5</div>
          <div className="pright2 projectSubCard">Project 6</div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
