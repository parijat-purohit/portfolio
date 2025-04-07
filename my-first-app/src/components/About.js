import React, { useState, useEffect} from "react";
import "../styles/About.css";

const About = () => {
    const [smallMedia, setSmallMedia] = useState(window.innerWidth <= 600); // Initial state based on current window width
  
    useEffect(() => {
      const handleResize = () => {
        setSmallMedia(window.innerWidth <= 600);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <div className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="header">
            About Me
            <div className="about-desc">
            With an M.Sc. in Computer Science and over six years of software development experience, 
            here is a curated set of skills I excel at:
            </div>
            {smallMedia && (
              <div className="about-desc">
                Python, Django, Flask, React, Docker, Github, Google Cloud
              </div>
            )}
            {!smallMedia && (
              <>
            <div className="list-skills">
              <li>
                  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
                </li>
                <li>
                  <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" alt="Django" />
                </li>
                <li>
                  <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask" />
                </li>
                <li>
                  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
                </li>
            </div>
            <div className="list-skills">
                <li>
                  <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/>
                </li>
                <li>
                  <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
                </li>
                <li>
                  <img src="https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white" alt="Google Cloud"/>
                </li>
            </div>
              </>
            )}
            <div className="about-desc">
              I like to bike during my free time and explore new places. Sometimes, I tune guitar chords and sing.
            </div>
          </div>
        </div>
        <div className="image-content">
          <img alt="Parijat Purohit" src={"./assets/images/me5.JPG"} />
        </div>
      </div>
    </div>
  );
}

export default About;