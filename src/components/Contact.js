
import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    device: '',
    problem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    console.log('Contact section loaded and visible');
  }, []);

  // Business hours function
  const isCurrentlyOpen = () => {
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hours + minutes / 60;

    if (day === 0) { // Sunday
      return currentTime >= 13 && currentTime < 20; // 1PM to 8PM
    } else if (day >= 1 && day <= 6) { // Monday to Saturday
      return currentTime >= 8 && currentTime < 21; // 8AM to 9PM
    }
    return false;
  };

  // Form handling functions
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        device: '',
        problem: ''
      });
      setIsSubmitted(false);
    }, 5000);
  };

  // Contact action functions
  const handleCall = () => {
    window.location.href = 'tel:0713970395';
  };

  const handleWhatsApp = () => {
    const message = `Hello! I need help with my phone repair.`;
    window.open(`https://wa.me/254713970395?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section 
      className="contact" 
      id="contact"
      style={{
        minHeight: '100vh',
        padding: '80px 0 60px',
        backgroundColor: '#fff5f5',
        fontFamily: 'Arial, sans-serif',
        position: 'relative',
        width: '100%',
        display: 'block'
      }}
    >
      <div className="container" style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 20px',
        position: 'relative',
        zIndex: 1
      }}>
        <h2 style={{ 
          textAlign: 'center', 
          color: '#dc2626', 
          marginBottom: '40px',
          fontSize: 'clamp(2rem, 5vw, 2.5rem)',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          Contact Us
        </h2>
        
        <div className="contact-content" style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr',
          gap: '40px',
          alignItems: 'start'
        }}>
          {/* Responsive grid for larger screens */}
          <style>
            {`
              @media (min-width: 768px) {
                .contact-content {
                  grid-template-columns: 1fr 1fr !important;
                  gap: 50px !important;
                }
              }
            `}
          </style>

          <div className="contact-info">
            <h3 style={{ 
              color: '#dc2626', 
              marginBottom: '20px', 
              fontSize: 'clamp(1.5rem, 4vw, 1.8rem)',
              textAlign: 'center'
            }}>
              Get In Touch
            </h3>
            
            <div className="contact-details">
              {[
                {
                  icon: <FaMapMarkerAlt />,
                  title: "Visit Our Shop",
                  details: ["Nairobi, Kenya", "Walk-ins Welcome"]
                },
                {
                  icon: <FaPhone />,
                  title: "Call Us Now",
                  details: ["0713 970 395", "Fast Response"]
                },
                {
                  icon: <FaClock />,
                  title: "Business Hours",
                  details: ["Monday - Saturday: 8:00 AM - 9:00 PM", "Sunday: 1:00 PM - 8:00 PM"]
                },
                {
                  icon: <FaEnvelope />,
                  title: "Email Us",
                  details: ["info@phonelabzone.com", "We'll reply within 2 hours"]
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    marginBottom: '20px',
                    padding: '20px',
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    boxShadow: '0 2px 10px rgba(220, 38, 38, 0.1)',
                    border: '1px solid #fecaca'
                  }}
                >
                  <div style={{ 
                    color: '#dc2626', 
                    fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', 
                    marginRight: '15px', 
                    marginTop: '2px',
                    minWidth: '24px'
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <strong style={{ 
                      display: 'block', 
                      color: '#dc2626', 
                      fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                      marginBottom: '5px'
                    }}>
                      {item.title}
                    </strong>
                    {item.details.map((detail, i) => (
                      <span 
                        key={i}
                        style={{ 
                          color: '#666', 
                          display: 'block',
                          fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                        }}
                      >
                        {detail}
                      </span>
                    ))}
                    {item.title === "Business Hours" && (
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '8px', 
                        marginTop: '10px',
                        padding: '8px 12px',
                        backgroundColor: '#fef2f2',
                        borderRadius: '5px',
                        border: '1px solid #fecaca'
                      }}>
                        <span style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: isCurrentlyOpen() ? '#16a34a' : '#dc2626'
                        }}></span>
                        <strong style={{ 
                          color: isCurrentlyOpen() ? '#16a34a' : '#dc2626',
                          fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                        }}>
                          {isCurrentlyOpen() ? "We're Open Now!" : "We're Currently Closed"}
                        </strong>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="cta-buttons" style={{ 
              marginTop: '2rem',
              display: 'flex',
              gap: '15px',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <button onClick={handleCall} style={{
                backgroundColor: '#dc2626',
                color: 'white',
                padding: 'clamp(12px, 3vw, 15px) clamp(20px, 4vw, 25px)',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)',
                flex: '1',
                minWidth: '140px',
                justifyContent: 'center'
              }}>
                <FaPhone /> Call Now
              </button>
              <button onClick={handleWhatsApp} style={{
                backgroundColor: '#25D366',
                color: 'white',
                padding: 'clamp(12px, 3vw, 15px) clamp(20px, 4vw, 25px)',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
                flex: '1',
                minWidth: '140px',
                justifyContent: 'center'
              }}>
                💬 WhatsApp
              </button>
            </div>
          </div>

          <div className="contact-form" style={{
            backgroundColor: 'white',
            padding: 'clamp(20px, 4vw, 40px)',
            borderRadius: '15px',
            boxShadow: '0 5px 20px rgba(220, 38, 38, 0.1)',
            height: 'fit-content',
            border: '1px solid #fecaca'
          }}>
            <h3 style={{ 
              color: '#dc2626', 
              marginBottom: '10px', 
              fontSize: 'clamp(1.5rem, 4vw, 1.8rem)',
              textAlign: 'center'
            }}>
              Get a Free Quote
            </h3>
            <p style={{ 
              color: '#666', 
              marginBottom: '25px', 
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              textAlign: 'center'
            }}>
              Describe your phone issue and we'll get back to you with a solution and pricing.
            </p>
            
            {isSubmitted && (
              <div className="success-message" style={{
                backgroundColor: '#f0fdf4',
                color: '#166534',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '25px',
                border: '1px solid #bbf7d0'
              }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#166534' }}>Thank You! 🎉</h3>
                <p style={{ margin: 0 }}>We've received your message and will contact you shortly.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="name" style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  color: '#dc2626', 
                  fontWeight: 'bold',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
                }}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: 'clamp(10px, 2.5vw, 12px) clamp(12px, 2.5vw, 15px)',
                    border: '1px solid #fecaca',
                    borderRadius: '8px',
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                    transition: 'all 0.3s ease',
                    backgroundColor: '#fef2f2'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="phone" style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  color: '#dc2626', 
                  fontWeight: 'bold',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
                }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="0712 345 678"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: 'clamp(10px, 2.5vw, 12px) clamp(12px, 2.5vw, 15px)',
                    border: '1px solid #fecaca',
                    borderRadius: '8px',
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                    transition: 'all 0.3s ease',
                    backgroundColor: '#fef2f2'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="device" style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  color: '#dc2626', 
                  fontWeight: 'bold',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
                }}>
                  Phone Model
                </label>
                <select 
                  id="device" 
                  name="device" 
                  value={formData.device} 
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: 'clamp(10px, 2.5vw, 12px) clamp(12px, 2.5vw, 15px)',
                    border: '1px solid #fecaca',
                    borderRadius: '8px',
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                    backgroundColor: '#fef2f2'
                  }}
                >
                  <option value="">Select your device</option>
                  <option value="iPhone">iPhone</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Huawei">Huawei</option>
                  <option value="Tecno">Tecno</option>
                  <option value="Infinix">Infinix</option>
                  <option value="Google Pixel">Google Pixel</option>
                  <option value="Other">Other Brand</option>
                </select>
              </div>
              
              <div style={{ marginBottom: '25px' }}>
                <label htmlFor="problem" style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  color: '#dc2626', 
                  fontWeight: 'bold',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
                }}>
                  What's the problem?
                </label>
                <textarea
                  id="problem"
                  name="problem"
                  placeholder="Describe the issue with your phone..."
                  rows="4"
                  value={formData.problem}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: 'clamp(10px, 2.5vw, 12px) clamp(12px, 2.5vw, 15px)',
                    border: '1px solid #fecaca',
                    borderRadius: '8px',
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                    resize: 'vertical',
                    minHeight: '100px',
                    backgroundColor: '#fef2f2'
                  }}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting} 
                style={{
                  width: '100%',
                  backgroundColor: isSubmitting ? '#9ca3af' : '#dc2626',
                  color: 'white',
                  padding: 'clamp(12px, 3vw, 15px)',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                  fontWeight: 'bold',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {isSubmitting ? 'Sending...' : 'Get Free Quote'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;