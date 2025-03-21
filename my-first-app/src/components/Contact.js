import React from 'react';
import '../styles/Contact.css';
import MailOutlineRounded from "@mui/icons-material/MailOutlineRounded";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-form">
          <div className="contact-greet">
            Say Hello
          </div>
          <div className="contact-icon" onClick={() => window.open("mailto:parijat2009@gmail.com", "_blank")}>
            <MailOutlineRounded style={{ fontSize: 40 }} />
          </div>
          </div>
      </div>
    </div>
  );
};

export default Contact;
