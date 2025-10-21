// import React from 'react';
// import { FaPhone, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
// import logo1 from '../assets/images/logo1.png';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="footer-content">
//           <div className="footer-brand">
//             <img src={logo1} alt="Phone Lab Zone" className="footer-logo" />
//             <h3>Phone Lab Zone</h3>
//             <p className="slogan">Come fix And Go</p>
//             <p>
//               Your trusted partner for fast, reliable phone repairs and premium accessories. 
//               Expert service with guaranteed results.
//             </p>
//           </div>
          
//           <div className="footer-links">
//             <h4>Quick Links</h4>
//             <ul>
//               <li><a href="#services">Our Services</a></li>
//               <li><a href="#products">Accessories</a></li>
//               <li><a href="#process">How It Works</a></li>
//               <li><a href="#contact">Contact Us</a></li>
//               <li><a href="#testimonials">Reviews</a></li>
//             </ul>
//           </div>
          
//           <div className="footer-contact">
//             <h4>Contact Info</h4>
//             <div className="contact-item">
//               <FaMapMarkerAlt />
//               <span>Nairobi, Kenya</span>
//             </div>
//             <div className="contact-item">
//               <FaPhone />
//               <span>0713 970 395</span>
//             </div>
//             <div className="contact-item">
//               <FaWhatsapp />
//               <span>WhatsApp Available</span>
//             </div>
//             <div className="contact-item">
//               <FaClock />
//               <span>Mon-Fri: 8AM-6PM</span>
//             </div>
//           </div>
//         </div>
        
//         <div className="footer-bottom">
//           <p>&copy; {currentYear} Phone Lab Zone. All rights reserved. | For And Go</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaClock, FaWhatsapp, FaTools, FaShieldAlt } from 'react-icons/fa';
import logo1 from '../assets/images/logo1.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={logo1} alt="Phone Lab Zone" className="footer-logo" />
            <h3>Phone Lab Zone</h3>
            <p className="slogan">Come fix And Go</p>
            <p>
              Your trusted partner for fast, reliable phone repairs and premium accessories. 
              Expert service with guaranteed results.
            </p>
            <div className="footer-features">
              <div className="feature-tag">
                <FaTools /> Same Day Repair
              </div>
              <div className="feature-tag">
                <FaShieldAlt /> Warranty Included
              </div>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#products">Accessories</a></li>
              <li><a href="#process">How It Works</a></li>
              <li><a href="#testimonials">Reviews</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Info</h4>
            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-text">
                <strong>Our Location</strong>
                <span>Nairobi, Kenya</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-text">
                <strong>Call Us</strong>
                <span>0713 970 395</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FaWhatsapp />
              </div>
              <div className="contact-text">
                <strong>WhatsApp</strong>
                <span>Available 24/7</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FaClock />
              </div>
              <div className="contact-text">
                <strong>Business Hours</strong>
                <span>Mon-Sat: 8:00 AM - 9:00 PM</span>
                <span>Sunday: 1:00 PM - 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Phone Lab Zone. All rights reserved. | <span className="highlight">Come fix And Go</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;