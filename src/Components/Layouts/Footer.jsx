import React from "react";
import { Link } from "react-router-dom";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../Style/Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="footerContainer" id="Footer">
        <div className="copyright">&copy;2023 || Hindol Banerjee</div>
        <div className="footerCard">
          <div className="github">
            <a href="https://github.com/Hindol19">
              <GitHubIcon className="icon"/>
            </a>
          </div>
          <div className="linkedIn">
            <a href="https://www.linkedin.com/in/hindol-banerjee-93701124b/">
              <LinkedInIcon className="icon"/>
            </a>
          </div>
          <div className="insta">
            <a href="https://www.instagram.com/nobody_specia/">
              <InstagramIcon className="icon"/>
            </a>
          </div>
          <div className="facebook">
            <a href="">
              <FacebookIcon className="icon"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
