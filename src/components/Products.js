
import React, { useState } from 'react';
import { FaShoppingCart, FaHeadphones, FaMobileAlt, FaBolt, FaShieldAlt, FaTimes, FaWhatsapp, FaPhone } from 'react-icons/fa';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Premium Phone Cases',
      description: 'High-quality protective cases with military-grade drop protection and stylish designs.',
      fullDescription: 'Military-grade protection against drops and impacts. Made with shock-absorbent materials and reinforced corners. Available in various colors and designs.',
      price: 'KSh 800 - 1,500',
      icon: <FaMobileAlt />,
      image: '📱',
      features: ['Military-Grade Protection', 'Shock Absorption', 'Slim Design', 'Multiple Colors'],
      benefits: ['Protects from 6ft drops', 'Prevents scratches', 'Wireless charging compatible']
    },
    {
      id: 2,
      name: 'Wireless Earbuds Pro',
      description: 'Crystal clear sound with noise cancellation and long battery life for all-day use.',
      fullDescription: 'Premium sound quality with active noise cancellation, touch controls, and up to 8 hours of battery life. Perfect for music, calls, and workouts.',
      price: 'KSh 2,500 - 4,000',
      icon: <FaHeadphones />,
      image: '🎧',
      features: ['Active Noise Cancelling', '8hr Battery Life', 'Touch Controls', 'IPX5 Water Resistant'],
      benefits: ['Immersive sound experience', 'Clear call quality', 'Sweat and water resistant']
    },
    {
      id: 3,
      name: 'Fast Charging Kit',
      description: 'Rapid charging solution with certified safety features for fast and safe charging.',
      fullDescription: 'Charge your devices faster and safer with our certified Fast Charging Kit. Includes high-quality cables and adapters supporting fast charging protocols.',
      price: 'KSh 1,200 - 2,000',
      icon: <FaBolt />,
      image: '⚡',
      features: ['30W Fast Charging', 'Safety Certified', 'Durable Cable', 'Universal Compatibility'],
      benefits: ['Charges 50% faster', 'Prevents battery damage', 'Works with all phones']
    },
    {
      id: 4,
      name: 'Tempered Glass Protectors',
      description: 'Crystal clear screen protection with maximum touch sensitivity and easy installation.',
      fullDescription: 'Protect your phone screen from scratches and cracks with 9H hardness tempered glass. Maintains perfect touch sensitivity and clarity.',
      price: 'KSh 400 - 800',
      icon: <FaShieldAlt />,
      image: '🛡️',
      features: ['9H Hardness', 'Bubble-Free Installation', 'HD Clarity', 'Oleophobic Coating'],
      benefits: ['Prevents screen cracks', 'Reduces fingerprints', 'Easy to install']
    },
    {
      id: 5,
      name: 'Power Banks',
      description: 'High-capacity portable charging for your devices when you are on the go.',
      fullDescription: 'Never run out of battery with our high-capacity power banks. Compact design with fast charging capability, perfect for travel and emergencies.',
      price: 'KSh 1,500 - 3,500',
      icon: <FaBolt />,
      image: '🔋',
      features: ['10000mAh Capacity', 'Fast Charge Support', 'Compact Design', 'Dual USB Ports'],
      benefits: ['Multiple phone charges', 'Fast charging support', 'Pocket-friendly size']
    },
    {
      id: 6,
      name: 'Phone Accessories Bundle',
      description: 'Complete set of essential accessories including cables, adapters, and more.',
      fullDescription: 'Get everything you need in one bundle! Includes charging cables, adapter, car charger, and screen protectors. Perfect value package.',
      price: 'KSh 2,000 - 3,500',
      icon: <FaMobileAlt />,
      image: '🎁',
      features: ['Multiple Accessories', 'Great Value', 'All-in-One Package', 'Quality Guaranteed'],
      benefits: ['Save money on bundle', 'All essentials included', 'Perfect for new phones']
    }
  ];

  const handleWhatsApp = (productName, productPrice) => {
    const message = `Hello! I'm interested in: ${productName} (${productPrice})`;
    window.open(`https://wa.me/254713970395?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:0713970395';
  };

  return (
    <>
      <section className="products" id="products">
        <div className="container">
          <div className="section-header">
            <h2>Premium Phone Accessories</h2>
            <p className="section-subtitle">Enhance your mobile experience with our quality accessories</p>
          </div>
          
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-badge">Popular</div>
                
                <div className="product-image">
                  <div className="product-emoji">{product.image}</div>
                </div>
                
                <div className="product-content">
                  <div className="product-icon">{product.icon}</div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  
                  <div className="product-features">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="feature-tag">✓ {feature}</span>
                    ))}
                  </div>
                  
                  {/* REMOVED PRICE FROM MAIN CARD */}
                  
                  <button 
                    className="product-btn"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <FaShoppingCart /> View Details & Pricing
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="products-cta">
            <div className="cta-bubble">
              <h3>Need Help Choosing Accessories?</h3>
              <p>Our experts can help you select the perfect accessories for your device</p>
              <a href="#contact" className="btn btn-primary">Get Expert Advice</a>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content product-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="close-modal"
              onClick={() => setSelectedProduct(null)}
            >
              <FaTimes />
            </button>
            
            <div className="product-modal-header">
              <div className="product-modal-image">
                <div className="product-emoji-large">{selectedProduct.image}</div>
              </div>
              <div className="product-modal-info">
                <h2>{selectedProduct.name}</h2>
                <p className="product-modal-description">{selectedProduct.fullDescription}</p>
                <div className="product-modal-price">
                  <span className="price">{selectedProduct.price}</span>
                  <span className="price-note">(Price varies by specific model)</span>
                </div>
              </div>
            </div>

            <div className="product-modal-details">
              <div className="details-section">
                <h4>Key Features:</h4>
                <div className="features-list">
                  {selectedProduct.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <span>✓ {feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="details-section">
                <h4>Benefits:</h4>
                <div className="benefits-list">
                  {selectedProduct.benefits.map((benefit, index) => (
                    <div key={index} className="benefit-item">
                      <span>🎯 {benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="product-modal-actions">
              <button 
                className="btn btn-whatsapp"
                onClick={() => handleWhatsApp(selectedProduct.name, selectedProduct.price)}
              >
                <FaWhatsapp /> Inquire on WhatsApp
              </button>
              <button 
                className="btn btn-call"
                onClick={handleCall}
              >
                <FaPhone /> Call to Order
              </button>
            </div>

            <div className="product-guarantee">
              <FaShieldAlt />
              <span><strong>Quality Guarantee:</strong> 3-month warranty on all accessories</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;