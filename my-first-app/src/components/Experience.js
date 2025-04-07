import React from 'react';
import '../styles/Experience.css';

const timelineData = [
  {
    title: 'Senior Software Engineer',
    organization: 'Farmer Edge Inc.',
    date: 'Mar 2023 – May 2024',
  },
  {
    title: 'Technical Developer',
    organization: 'Jonah Group Ltd.',
    date: ' May 2022 – Feb 2023',
  },
  {
    title: 'Software Engineer',
    organization: 'Farmer Edge Inc.',
    date: 'Jan 2018 – May 2022',
  },
  {
    title: 'Graduate Teaching \& Research Assistant',
    organization: 'University of Lethbridge',
    date: 'Sept 2015 – Aug 2017',
    },
  {
    title: 'Undergraduate Student',
    organization: 'Chittagong University of Engineering \& Technology',
    date: '2010 – 2014',
    },
];

const Experience = () => {
  return (
    <section className="experience">
      <div className="experience-container">
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <h4>{item.organization}</h4>
                <span className="timeline-date">{item.date}</span>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
