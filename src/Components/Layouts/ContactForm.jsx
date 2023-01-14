import React from "react";
import "../Style/ContactForm.css";
function ContactForm() {
  return (
    <div className="cright1 contactSubCard">
      <input className="formItem" type="text" placeholder="Enter your Name" />
      <input
        className="formItem"
        type="text"
        placeholder="Enter your E-mail Id"
      />
      <input className="formItem" type="text" placeholder="Enter the message" />
      <button className="formItem">Submit</button>
    </div>
  );
}

export default ContactForm;
