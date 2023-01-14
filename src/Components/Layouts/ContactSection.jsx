import React from "react";
import "../Style/ContactSection.css";
function ContactSection() {
  return (
    <div className="ContactSection">
      <div className="contactContainer" id="Contact">
        <div className="contactCard contactCard1">
          <div className="cleft1 contactSubCard">
            Feel free to get through to me anytime :)
          </div>
          <div className="cright1 contactSubCard">
            <input
              className="formItem"
              type="text"
              placeholder="Enter your Name"
            />
            <input
              className="formItem"
              type="text"
              placeholder="Enter your E-mail Id"
            />
            <input
              className="formItem"
              type="text"
              placeholder="Enter the message"
            />
            <button className="formItem">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
