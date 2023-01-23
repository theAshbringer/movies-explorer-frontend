import React from 'react';
import './AboutProjectFact.css';

function AboutProjectFact({ className, title, body }) {
  return (
    <article className={`about-project-fact ${className}`}>
      <h3 className="about-project-fact__title">
        {title}
      </h3>
      <p className="about-project-fact__body">
        {body}
      </p>
    </article>
  );
}

export default AboutProjectFact;
