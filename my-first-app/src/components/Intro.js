import React, { useState } from "react";
import Navbar from "./Navbar";
import { ReactTyped } from "react-typed";
import "../styles/Intro.css";
import Orb from "./Orb";

const Intro = () => {
  const [text, setText] = useState("Hi there.");

  const handleComplete = () => {
    setTimeout(() => {
      setText("I am Parijat.");
    }, 1500);
  };

  return (
    <div className="intro">
      <Navbar />
      <div className="intro-container">
        {/* Container to hold the circle and the text together */}
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
          {/* Render Orb (the circle) */}
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={50}
            forceHoverState={false}
          />
          {/* Overlay text centered inside the circle */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              fontsize: '100px',
              pointerEvents: 'none', // Optional: ensures the text doesn't interfere with hover effects on the Orb
            }}
          >
            <ReactTyped className="typed-text"
              strings={[text]}
              typeSpeed={60}
              showCursor={true}
              cursorChar={"|"}
              onComplete={handleComplete}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
