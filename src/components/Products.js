import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaHeadphones, FaMobileAlt, FaBolt, FaShieldAlt } from 'react-icons/fa';

const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Premium Phone Cases',
      description: 'High-quality protective cases with military-grade drop protection and stylish designs.',
      price: 'Various Models',
      icon: <FaMobileAlt />,
      image: '📱',
      features: ['Shock Absorption', 'Slim Design', 'Multiple Colors']
    },
    {
      id: 2,
      name: 'Wireless Earbuds Pro',
      description: 'Crystal clear sound with noise cancellation and long battery life for all-day use.',
      price: 'Premium Quality',
      icon: <FaHeadphones />,
      image: '🎧',
      features: ['Noise Cancelling', '8hr Battery', 'Touch Controls']
    },
    {
      id: 3,
      name: 'Fast Charging Kit',
      description: 'Rapid charging solution with certified safety features for fast and safe charging.',
      price: 'Fast & Safe',
      icon: <FaBolt />,
      image: '⚡',
      features: ['30W Charging', 'Safety Certified', 'Durable Cable']
    },
    {
      id: 4,
      name: 'Tempered Glass Protectors',
      description: 'Crystal clear screen protection with maximum touch sensitivity and easy installation.',
      price: 'Clear Protection',
      icon: <FaShieldAlt />, // Changed from FaShield to FaShieldAlt
      image: '🛡️',
      features: ['9H Hardness', 'Bubble-Free', 'Easy Install']
    },
    {
      id: 5,
      name: 'Power Banks',
      description: 'High-capacity portable charging for your devices when you are on the go.',
      price: 'Portable Power',
      icon: <FaBolt />,
      image: '🔋',
      features: ['10000mAh', 'Fast Charge', 'Compact Design']
    },
    {
      id: 6,
      name: 'Phone Accessories Bundle',
      description: 'Complete set of essential accessories including cables, adapters, and more.',
      price: 'Complete Set',
      icon: <FaMobileAlt />,
      image: '🎁',
      features: ['Multiple Items', 'Great Value', 'All-in-One']
    }
  ];

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-header">
          <h2>Premium Phone Accessories</h2>
          <p className="section-subtitle">Enhance your mobile experience with our quality accessories</p>
        </div>
        
        <div className="products-grid">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="product-card"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="product-badge">Popular</div>
              
              <div className="product-image">
                <div className="product-emoji">{product.image}</div>
              </div>
              
              <div className="product-content">
                <div className="product-icon">{product.icon}</div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                
                <div className="product-features">
                  {product.features.map((feature, index) => (
                    <span key={index} className="feature-tag">✓ {feature}</span>
                  ))}
                </div>
                
                <div className="product-meta">
                  <span className="product-price">{product.price}</span>
                </div>
                
                <button 
                  className="product-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProductClick(product.id);
                  }}
                >
                  <FaShoppingCart /> View Details
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
  );
};

export default Products;