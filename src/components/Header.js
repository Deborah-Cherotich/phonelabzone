// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';
// import logo from '../assets/images/logo2.png';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 50;
//       setScrolled(isScrolled);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className={`header ${scrolled ? 'scrolled' : ''}`}>
//       <div className="container">
//         <div className="logo-section">
//           <Link to="/">
//             <img src={logo} alt="Phone Lab Zone" className="logo" />
//           </Link>
//         </div>
        
//         <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
//           <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
//           <Link to="/services" onClick={() => setIsMenuOpen(false)}>Repairs</Link>
//           <Link to="/products" onClick={() => setIsMenuOpen(false)}>Accessories</Link>
//           <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
//         </nav>
        
//         <div className="header-actions">
//           <a href="tel:0713970395" className="cta-button">
//             <FaPhone /> Call Now
//           </a>
//           <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/images/logo2.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo-section">
          <Link to="/">
            <img src={logo} alt="Phone Lab Zone" className="logo" />
          </Link>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setIsMenuOpen(false)}>Repairs</Link>
          <Link to="/products" onClick={() => setIsMenuOpen(false)}>Accessories</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </nav>
        
        <div className="header-actions">
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;



