// import React from 'react';
// import { FaTools, FaShoppingCart, FaClock, FaShieldAlt, FaWrench, FaScrewdriver, FaMobile, FaBolt } from 'react-icons/fa';

// const Hero = () => {
//   return (
//     <section className="hero">
//       {/* Animated Background Elements */}
//       <div className="hero-background">
//         <div className="floating-tool wrench">
//           <FaWrench />
//         </div>
//         <div className="floating-tool screwdriver">
//           <FaScrewdriver />
//         </div>
//         <div className="floating-tool mobile">
//           <FaMobile />
//         </div>
//         <div className="floating-tool bolt">
//           <FaBolt />
//         </div>
//         <div className="floating-tool tools">
//           <FaTools />
//         </div>
        
//         {/* Background Circles */}
//         <div className="floating-circle pink"></div>
//         <div className="floating-circle teal"></div>
//         <div className="floating-circle yellow"></div>
//       </div>
      
//       <div className="container">
//         <div className="hero-content">
//           <div className="hero-text">
//             <h1 className="hero-title">
//               Phone Lab Zone
//             </h1>
//             <p className="hero-slogan">Fix and Go</p>
            
//             <p className="hero-description">
//               Your trusted partner for fast, reliable phone repairs and premium accessories. 
//               Expert service with guaranteed results - because your phone deserves the best care.
//             </p>
            
//             <div className="hero-features">
//               <div className="feature">
//                 <FaClock className="feature-icon" />
//                 <span>Quick 1-2 Hour Repairs</span>
//               </div>
//               <div className="feature">
//                 <FaShieldAlt className="feature-icon" />
//                 <span>90-Day Warranty</span>
//               </div>
//               <div className="feature">
//                 <FaTools className="feature-icon" />
//                 <span>Expert Technicians</span>
//               </div>
//             </div>

//             <div className="hero-buttons">
//               <a href="#services" className="btn btn-primary">
//                 <FaTools /> View Services
//               </a>
//               <a href="#products" className="btn btn-secondary">
//                 <FaShoppingCart /> Shop Accessories
//               </a>
//             </div>
//           </div>
          
//           <div className="hero-visual">
//             <div className="phone-showcase">
//               <div className="animated-phone">
//                 <div className="phone-screen">
//                   <div className="phone-icon">🔧</div>
//                   <p className="phone-text">Fast Phone Repairs</p>
//                   <p className="phone-text">Fix & Go!</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from 'react';
import { FaTools, FaShoppingCart, FaClock, FaShieldAlt, FaWrench, FaScrewdriver, FaMobile, FaBolt, FaArrowRight, FaStar } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero">
      {/* Enhanced Animated Background */}
      <div className="hero-background">
        {/* Animated Tools */}
        <div className="floating-tool wrench">
          <FaWrench />
        </div>
        <div className="floating-tool screwdriver">
          <FaScrewdriver />
        </div>
        <div className="floating-tool mobile">
          <FaMobile />
        </div>
        <div className="floating-tool bolt">
          <FaBolt />
        </div>
        <div className="floating-tool tools">
          <FaTools />
        </div>
        
        {/* Enhanced Background Elements */}
        <div className="floating-circle pink"></div>
        <div className="floating-circle teal"></div>
        <div className="floating-circle yellow"></div>
        
        {/* Particle Background */}
        <div className="particles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}></div>
          ))}
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            {/* Badge */}
            <div className="hero-badge">
              <FaStar className="badge-icon" />
              <span>Trusted by 10,000+ Customers</span>
            </div>
            
            <h1 className="hero-title">
              Phone Lab Zone
            </h1>
            <p className="hero-slogan">Come Fix and Go!</p>
            
            <p className="hero-description">
              Your trusted partner for <span className="highlight">fast, reliable phone repairs</span> and premium accessories. 
              Expert service with guaranteed results.
            </p>
            
            <div className="hero-features">
              <div className="feature">
                <div className="feature-icon-container">
                  <FaClock className="feature-icon" />
                </div>
                <div className="feature-content">
                  <span className="feature-title">Quick 1-2 Hour Repairs</span>
                  <span className="feature-subtitle">Get back to your life fast</span>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon-container">
                  <FaShieldAlt className="feature-icon" />
                </div>
                <div className="feature-content">
                  <span className="feature-title">90-Day Warranty</span>
                  <span className="feature-subtitle">Peace of mind guaranteed</span>
                </div>
              </div>
            </div>

            <div className="hero-buttons">
              <a href="#services" className="btn btn-primary">
                <FaTools /> Book Repair Now
                <FaArrowRight className="btn-arrow" />
              </a>
              <a href="#products" className="btn btn-secondary">
                <FaShoppingCart /> Shop Accessories
              </a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="phone-showcase">
              <div className="animated-phone">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  <div className="phone-icon">🔧</div>
                  <p className="phone-text">Fast Phone Repairs</p>
                  <p className="phone-subtext">Fix & Go!</p>
                  <div className="phone-status">
                    <div className="status-dot"></div>
                    <span>Ready in 1-2 hours</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements Around Phone */}
              <div className="floating-element repair-tag">
                <span>FIXED!</span>
              </div>
              <div className="floating-element warranty-tag">
                <span>90 DAY WARRANTY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;