// import React from 'react';
// import { FaPhone } from 'react-icons/fa'; // ✅ Added for the phone icon
// import Hero from './Hero';
// import Services from './Services';
// import Process from './Process';
// import Testimonials from './Testimonials';
// import Products from './Products';

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
//     </main>
//   );
// };

// export default Home;

import React from 'react';
import { FaPhone } from 'react-icons/fa';
import Hero from './Hero';
import Services from './Services';
import Process from './Process';
import Testimonials from './Testimonials';
import Products from './Products';
import Contact from './Contact'; // ✅ Import the Contact component

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <Products />
      <Testimonials />

      {/* ✅ CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Fix Your Phone?</h2>
            <p>Don't wait any longer! Get your phone repaired today with our fast and reliable service.</p>
            <div className="cta-buttons">
              <a href="tel:0713970395" className="cta-btn primary">
                <FaPhone /> Call Now
              </a>
              <a href="#contact" className="cta-btn secondary">
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Add Contact Section Here */}
      <Contact />
    </main>
  );
};

export default Home;