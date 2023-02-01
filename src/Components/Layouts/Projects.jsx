import React from "react";
import "../Style/Projects.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
  // useEffect(() => {
  //   Aos.init({ duration: 1000 });
  // }, []);

  return (
    <div className="Projects">
      <div className="projectContainer" id="Project">
        <div className="projectCard projectCard1">
          <div data-aos="fade-right" className="pleft1 projectSubCard">
            Project 1
          </div>
          <div data-aos="fade-up" className="pright1a projectSubCard">
            Project 2
          </div>
          <div data-aos="fade-left" className="pright1b projectSubCard">
            Project 3
          </div>
        </div>
        <div className="projectCard projectCard2">
          <div data-aos="fade-right" className="pleft2a projectSubCard">
            Project 4
          </div>
          <div data-aos="fade-up" className="pleft2b projectSubCard">
            Project 5
          </div>
          <div data-aos="fade-left" className="pright2 projectSubCard">
            Project 6
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
