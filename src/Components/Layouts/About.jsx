import React from "react";
import "../Style/About.css";
function About() {
  return (
    <div className="About">
      <div className="aboutContainer" id="About">
        <div className="aboutCard">
          <div className="left1 aboutSubCard">
            Hi there! My name is Hindol Banerjee and I am a Web Developer with a
            passion for creating intuitive and engaging user experiences. With 4
            years of experience as a programmer, I have a strong foundation in a
            variety of programming languages including C, C++, Java, JavaScript,
            etc.
          </div>
          <div className="right1 aboutSubCard"></div>
        </div>
        <div className="aboutCard">
          <div className="left2 aboutSubCard"></div>
          <div className="right2 aboutSubCard">
            I am also highly skilled in various fabulous frameworks like
            React.js, Next.js, Bootstrap, Tailwind css and many more. When I'm
            not coding, you can find me indulged in music. Moreover, I'm an
            experienced freelancer in Fiverr as a music producer.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
