import React, { useEffect } from "react";
import "../Style/About.css";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="About">
      <div className="aboutContainer" id="About">
        <div className="aboutCard">
          <div data-aos="fade-right" className="left1 aboutSubCard hidden">
            Hi there! My name is Hindol Banerjee and I am a Web Developer with a
            passion for creating intuitive and engaging user experiences. With 4
            years of experience as a programmer, I have a strong foundation in a
            variety of programming languages including C, C++, Java, JavaScript,
            etc.
          </div>
          <div
            data-aos="fade-left"
            className="right1 aboutSubCard hidden"
          ></div>
        </div>
        <div className="aboutCard">
          <div
            data-aos="fade-right"
            className="left2 aboutSubCard hidden"
          ></div>
          <div data-aos="fade-left" className="right2 aboutSubCard hidden">
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
