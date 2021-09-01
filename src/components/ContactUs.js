import React, { useState } from "react";
import "./ContactUs.css";
import emailjs from "emailjs-com";

function ContactUs() {
  const [status, setStatus] = useState("Submit");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //setStatus("Sending...");

  function sendEmail(e) {
    setStatus("Sending...");
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        e.target,
        process.env.REACT_APP_EMAILJS_USER
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Thanks for getting in touch, our team will reach out to you");
    setStatus("Sent!");
    setName("");
    setEmail("");
    setMessage("");
    setStatus("Submit");
  }

  return (
    <>
      <div className="formContainer">
        <h1 className="contactUs">Contact Us</h1>

        <form onSubmit={sendEmail}>
          <div className="formItem">
            <input
              className="input"
              type="text"
              id="name"
              required
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="formItem">
            <input
              className="input"
              type="email"
              id="email"
              required
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="formItem">
            <textarea
              className="textArea"
              id="message"
              required
              placeholder="Optional short message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button className="submitButton" type="submit">
            {status}
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactUs;
