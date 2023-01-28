import React, { useRef } from "react";
import "../Style/Button.css";
import "../Style/ContactForm.css";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kq4cwsm",
        "template_lyuppfz",
        form.current,
        "GJdNw81xhAaa-qcgI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="cright1 contactSubCard">
      <form ref={form} onSubmit={sendEmail}>
        <input
          className="formItem"
          type="text"
          name="from_name"
          placeholder="Enter your Name"
        />
        <input
          className="formItem"
          type="email"
          name="from_email"
          placeholder="Enter your E-mail Id"
        />
        <input
          name="message"
          class="formItem"
          type="text"
          placeholder="Enter the message"
        />
        <button class="formItem button-57">
          <span class="text">Submit</span>
          <span>I love your feedback</span>
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
