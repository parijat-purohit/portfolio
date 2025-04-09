import React from 'react';
import '../styles/Contact.css';
import GradientText from './GradientText';
import MailOutlineRounded from "@mui/icons-material/MailOutlineRounded";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-form">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
          >
            Say Hello
          </GradientText>
          <div className="contact-icon" onClick={() => window.open("mailto:parijat2009@gmail.com", "_blank")}>
            <MailOutlineRounded style={{ fontSize: 40 }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
