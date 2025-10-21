

// import React from 'react';
// import { FaPhone } from 'react-icons/fa';
// import Hero from './Hero';
// import Services from './Services';
// import Process from './Process';
// import Testimonials from './Testimonials';
// import Products from './Products';
// import Contact from './Contact'; // ✅ Import the Contact component

// const Home = () => {
//   return (
//     <main>
//       <Hero />
//       <Services />
//       <Process />
//       <Products />
//       <Testimonials />

//       {/* ✅ CTA Section */}
//       <section className="cta-section">
//         <div className="container">
//           <div className="cta-content">
//             <h2>Ready to Fix Your Phone?</h2>
//             <p>Don't wait any longer! Get your phone repaired today with our fast and reliable service.</p>
//             <div className="cta-buttons">
//               <a href="tel:0713970395" className="cta-btn primary">
//                 <FaPhone /> Call Now
//               </a>
//               <a href="#contact" className="cta-btn secondary">
//                 Get Free Quote
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ✅ Add Contact Section Here */}
//       <Contact />
//     </main>
//   );
// };

// export default Home;


import React from 'react';
import { FaPhone, FaTools, FaArrowRight, FaShieldAlt, FaBolt, FaStar, FaClock } from 'react-icons/fa';
import Hero from './Hero';
import Services from './Services';
import Process from './Process';
import Testimonials from './Testimonials';
import Products from './Products';
import Contact from './Contact';

const Home = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <Products />
      <Testimonials />

      {/* 🔴⚫ RED & BLACK THEME CTA Section */}
      <section className="cta-section red-black-cta">
        <div className="container">
          <div className="cta-content">
            {/* Red Animated Icon */}
            <div className="red-icon-bubble">
              <FaTools className="red-icon" />
              <div className="sparkle">✨</div>
            </div>
            
            <h2>Ready to Fix Your Phone Today? 📱</h2>
            <p>Get instant professional repair service with our <span className="red-highlight">6-month warranty</span> and quality guarantee! 🛠️</p>
            
            <div className="cta-buttons">
              <a href="tel:0713970395" className="cta-btn red-primary">
                <FaPhone /> Call Now
              </a>
              <button onClick={scrollToContact} className="cta-btn black-secondary">
                Get Free Quote <FaArrowRight className="btn-arrow" />
              </button>
            </div>
            
            {/* Red & Black Feature Pills */}
            <div className="red-black-features">
              <span className="feature-pill red-pill">🛡️ 6-Month Warranty</span>
              <span className="feature-pill black-pill">⚡ Same-Day Service</span>
              <span className="feature-pill red-pill">⭐ Quality Parts</span>
              <span className="feature-pill black-pill">👨‍🔧 Expert Technicians</span>
            </div>
          </div>
        </div>
        
        {/* Floating decorative elements */}
        <div className="floating-emoji">🔧</div>
        <div className="floating-emoji">📞</div>
        <div className="floating-emoji">💫</div>
      </section>

      <Contact />
    </main>
  );
};

export default Home;