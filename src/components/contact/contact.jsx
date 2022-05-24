import "./contact.css";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [message, setMessage] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iubjr6k",
        "template_v31tukg",
        formRef.current,
        "yNs0quyRD7WIqWLnq"
      )
      .then(
        () => {
          setMessage("Your message sent success fully");
          setDone(true);
        },
        () => {
          setMessage("Your message didn't sent success fully");
          setDone(false);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-left">
        <h2 className="c-header">Let's discuss your project</h2>
        <div className="c-addresses">
          <span className="c-icon">phone-icon</span>
          <span className="c-text">+98 9123456789</span>
        </div>
        <div className="c-addresses">
          <span className="c-icon">gmail-icon</span>
          <span className="c-text">contact@gmail.com</span>
        </div>
        <div className="c-addresses">
          <span className="c-icon">location-icon</span>
          <span className="c-text">Iran, Qazvin, alvand.</span>
        </div>
      </div>
      <div className="c-form">
        <div className="c-text">
          <b>What's your story?</b> Get in touch.
        </div>
        <form
          ref={formRef}
          onSubmit={(e) => formSubmitHandler(e)}
          action="submit"
        >
          <input type="text" placeholder="Name" name="user_name" required />
          <input type="mail" placeholder="Mail" name="user_email" required />
          <input
            type="text"
            placeholder="Subject"
            name="user_subject"
            required
          />
          <textarea name="user_message" rows="5" required></textarea>
          <div className="c-btn-container">
            <button className="c-btn"> Submit</button>
            <span
              className={
                "c-form-message " + (done ? "success-full" : "not-success-full")
              }
            >
              {message}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
