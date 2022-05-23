import "./contact.css";

const Contact = () => {
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
        <form action="submit">
          <input type="text" placeholder="Subject" name="user_subject" />
          <input type="mail" placeholder="Mail" name="user_email" />
          <input type="text" placeholder="Name" name="user_name" />
          <textarea name="user_massage" rows="8"></textarea>
          <button className="c-btn"> Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
