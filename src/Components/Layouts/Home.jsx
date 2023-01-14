import React from "react";
import "../Style/Home.css";
import mePic from "../../Images/mePic3.png";
function Home() {
  return (
    <div className="Home">
      <div id="Home" className="homeContainer">
        <div className="homeCard">
          <img className="mainPic" src={mePic} alt="" />
          <div className="whoAmI">
            <div className="homeItem Intro">
              I'm <span>Hindol Banerjee</span>{" "}
            </div>
            <div className="homeItem webDev">
              & Im a <span>Website Developer</span>{" "}
            </div>
            <div className="skills"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
