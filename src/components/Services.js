

import React, { useState } from 'react';
import { 
  FaMobile, FaBatteryFull, FaChargingStation, 
  FaCamera, FaTint, FaLaptop, FaUnlock,
  FaClock, FaWifi, FaTimes, FaArrowRight, FaTools
} from 'react-icons/fa';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: <FaMobile />,
      title: 'Phone Screen Replacement',
      description: 'Professional screen replacement for all phone models',
      time: '60-90 min',
      details: 'We replace cracked, broken, or unresponsive screens with high-quality original or compatible parts. Includes full calibration, touch sensitivity testing, and display quality check.'
    },
    {
      icon: <FaBatteryFull />,
      title: 'Battery Replacement',
      description: 'Long-lasting battery replacements with warranty',
      time: '30-45 min',
      details: 'Get your phone battery replaced with genuine or high-quality compatible batteries. We test battery health and provide 6-month warranty on all battery replacements.'
    },
    {
      icon: <FaTint />,
      title: 'Water Damage Repair',
      description: 'Emergency water damage repair and prevention',
      time: '2-3 hours',
      details: 'Immediate water damage assessment and repair. We clean internal components, replace damaged parts, and apply protective coating to prevent future damage.'
    },
    {
      icon: <FaChargingStation />,
      title: 'Charging Port Repair',
      description: 'Fix all charging port and cable issues',
      time: '45-60 min',
      details: 'Repair or replace damaged charging ports, fix loose connections, and solve charging issues. We test charging speed and connection stability.'
    },
    {
      icon: <FaCamera />,
      title: 'Camera Replacement',
      description: 'Professional camera repair and replacement',
      time: '30-60 min',
      details: 'Fix blurry cameras, flash issues, or replace damaged camera modules. We ensure proper focus, image quality, and all camera functions work perfectly.'
    },
    {
      icon: <FaLaptop />,
      title: 'Software Issues',
      description: 'OS updates, virus removal, and performance optimization',
      time: '30 min',
      details: 'Solve software problems including operating system issues, app crashes, virus removal, performance optimization, and data recovery services.'
    },
    {
      icon: <FaUnlock />,
      title: 'Phone Unlocking',
      description: 'Carrier unlocking for all phone models',
      time: '15-30 min',
      details: 'Unlock your phone from any network carrier legally and safely. Use any SIM card worldwide. Permanent unlocking with no side effects.'
    },
    {
      icon: <FaWifi />,
      title: 'Network Issues',
      description: 'Network and signal problem solutions',
      time: '20-40 min',
      details: 'Fix network connectivity issues, poor signal reception, Wi-Fi problems, Bluetooth connectivity, and all network-related malfunctions.'
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setSelectedService(null);
  };

  return (
    <>
      <section className="services" id="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Professional Services</h2>
            <p className="section-subtitle">Expert repairs with 6-month warranty on all services</p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-time">
                  <FaClock /> {service.time}
                </div>
                <button 
                  className="service-btn"
                  onClick={() => setSelectedService(service)}
                >
                  View Details <FaArrowRight />
                </button>
              </div>
            ))}
          </div>

          {/* CHANGED: Better CTA section */}
          <div className="services-cta">
            <div className="cta-icon">
              <FaTools />
            </div>
            <h3>Can't Find Your Specific Issue?</h3>
            <p>We fix all phone problems! Contact us for any repair not listed above</p>
            <button className="cta-button" onClick={scrollToContact}>
              Contact Us for Any Repair
            </button>
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="close-modal"
              onClick={() => setSelectedService(null)}
            >
              <FaTimes />
            </button>
            
            <div className="modal-icon">
              {selectedService.icon}
            </div>
            
            <h3>{selectedService.title}</h3>
            <p className="modal-description">{selectedService.description}</p>
            
            <div className="service-details">
              <div className="detail-item">
                <strong>Repair Time:</strong> 
                <span>{selectedService.time}</span>
              </div>
              
              <div className="detail-item">
                <strong>Service Details:</strong> 
                <p>{selectedService.details}</p>
              </div>
              
              <div className="detail-item">
                <strong>Warranty:</strong> 
                <span>6 months on all repairs</span>
              </div>
              
              <div className="detail-item">
                <strong>Quality:</strong> 
                <span>Genuine or high-quality compatible parts</span>
              </div>
            </div>
            
            <div className="modal-actions">
              <button className="secondary-btn" onClick={() => setSelectedService(null)}>
                Back to Services
              </button>
              <button className="primary-btn" onClick={scrollToContact}>
                Get This Repair
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;