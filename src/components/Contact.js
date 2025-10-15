import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock, FaEnvelope, FaUser, FaMobile } from 'react-icons/fa';

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

  const handleCall = () => {
    window.location.href = 'tel:0713970395';
  };

  const handleWhatsApp = () => {
    const message = `Hello! I need help with my phone repair.`;
    window.open(`https://wa.me/254713970395?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p className="contact-description">
              Ready to fix your phone? Contact us today for a free quote or walk in for immediate service. 
              We're here to help with all your phone repair needs.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div className="contact-text">
                  <strong>Visit Our Shop</strong>
                  <span>Nairobi, Kenya</span>
                  <span>Walk-ins Welcome</span>
                </div>
              </div>
              
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div className="contact-text">
                  <strong>Call Us Now</strong>
                  <span>0713 970 395</span>
                  <span>Fast Response</span>
                </div>
              </div>
              
              <div className="contact-item">
                <FaClock className="contact-icon" />
                <div className="contact-text">
                  <strong>Business Hours</strong>
                  <span>Monday - Friday: 8:00 AM - 6:00 PM</span>
                  <span>Saturday: 9:00 AM - 4:00 PM</span>
                  <span>Sunday: Closed</span>
                </div>
              </div>
              
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div className="contact-text">
                  <strong>Email Us</strong>
                  <span>info@phonelabzone.com</span>
                  <span>We'll reply within 2 hours</span>
                </div>
              </div>
            </div>

            <div className="cta-buttons" style={{ marginTop: '2rem' }}>
              <button onClick={handleCall} className="btn btn-primary">
                <FaPhone /> Call Now
              </button>
              <button onClick={handleWhatsApp} className="btn btn-secondary">
                💬 WhatsApp
              </button>
            </div>
          </div>

          <div className="contact-form">
            <h3>Get a Free Quote</h3>
            <p>Describe your phone issue and we'll get back to you with a solution and pricing.</p>
            
            {isSubmitted && (
              <div className="success-message">
                <h3>Thank You! 🎉</h3>
                <p>We've received your message and will contact you shortly.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className={isSubmitting ? 'loading' : ''}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="0712 345 678"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="device">Phone Model</label>
                <select 
                  id="device" 
                  name="device" 
                  value={formData.device} 
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
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
              
              <div className="form-group">
                <label htmlFor="problem">What's the problem?</label>
                <textarea
                  id="problem"
                  name="problem"
                  placeholder="Describe the issue with your phone..."
                  rows="4"
                  value={formData.problem}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
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