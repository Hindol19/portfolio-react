import React from "react";
import "../Style/ContactSection.css";
import ContactForm from "./ContactForm";
function ContactSection() {
  return (
    <div className="ContactSection">
      <div className="contactContainer" id="Contact">
        <div className="contactCard contactCard1">
          <div className="cleft1 contactSubCard">
            Feel free to get through to me anytime :)
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
