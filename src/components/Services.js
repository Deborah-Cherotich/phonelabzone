import React from 'react';
import { 
  FaMobile, FaBatteryFull, FaChargingStation, 
  FaCamera, FaTint, FaLaptop, FaUnlock,
  FaClock, FaWifi
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaMobile />,
      title: 'Phone Screen Replacement',
      description: 'Professional screen replacement for all phone models',
      time: '60-90 min'
    },
    {
      icon: <FaBatteryFull />,
      title: 'Battery Replacement',
      description: 'Long-lasting battery replacements with warranty',
      time: '30-45 min'
    },
    {
      icon: <FaTint />,
      title: 'Water Inlet Maintenance',
      description: 'Emergency water damage repair and prevention',
      time: '2-3 hours'
    },
    {
      icon: <FaChargingStation />,
      title: 'Charging Problem Repair',
      description: 'Fix all charging port and cable issues',
      time: '45-60 min'
    },
    {
      icon: <FaCamera />,
      title: 'Camera Replacement',
      description: 'Professional camera repair and replacement',
      time: '30-60 min'
    },
    {
      icon: <FaLaptop />,
      title: 'Software Upgrade',
      description: 'OS updates, virus removal, and performance optimization',
      time: '30 min'
    },
    {
      icon: <FaUnlock />,
      title: 'Phone Unlock',
      description: 'Carrier unlocking for all phone models',
      time: '15-30 min'
    },
    {
      icon: <FaWifi />,
      title: 'Network Unlock',
      description: 'Network carrier unlocking services',
      time: '20-40 min'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Professional Services</h2>
          <p className="section-subtitle">Expert repairs for all your phone needs</p>
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
              <button className="service-btn">Get Quote</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;