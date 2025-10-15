import React from 'react';
import { FaSignInAlt, FaTools, FaCheckCircle, FaClock } from 'react-icons/fa';

const Process = () => {
  const steps = [
    {
      icon: <FaSignInAlt />,
      step: '01',
      title: 'Bring Your Device',
      description: 'Walk in with your broken device - no appointment needed. We welcome all phone models and issues.'
    },
    {
      icon: <FaTools />,
      step: '02',
      title: 'We Fix It Fast',
      description: 'Expert repair while you wait (1-2 hours typically). Our certified technicians work efficiently.'
    },
    {
      icon: <FaCheckCircle />,
      step: '03',
      title: 'Test & Go',
      description: 'Comprehensive quality check and 90-day warranty included. Your satisfaction guaranteed.'
    }
  ];

  return (
    <section className="process" id="process">
      <div className="container">
        <div className="section-header">
          <h2>How "Come Fix and Go" Works</h2>
          <p className="section-subtitle">Simple, fast, and reliable phone repair process</p>
        </div>
        
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.step}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="process-cta">
          <h3>Ready to Get Your Device Fixed?</h3>
          <p>Walk in today and experience the "Come Fix and Go" difference!</p>
          <a href="tel:0713970395" className="btn btn-primary">Call to Book</a>
        </div>
      </div>
    </section>
  );
};

export default Process;