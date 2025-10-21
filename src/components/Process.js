import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaArrowLeft, FaWhatsapp, FaPhone, FaCheck, FaShieldAlt } from 'react-icons/fa';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Product data - same as in Products component
  const products = [
    {
      id: 1,
      name: 'Premium Phone Cases',
      description: 'High-quality protective cases with military-grade drop protection and stylish designs.',
      fullDescription: 'Our premium phone cases offer military-grade protection against drops and impacts. Made with shock-absorbent materials and reinforced corners to keep your phone safe. Available in various colors and designs to match your style.',
      icon: '📱',
      features: ['Military-Grade Protection', 'Shock Absorption', 'Slim Design', 'Multiple Colors', 'Wireless Charging Compatible'],
      benefits: ['Protects from drops up to 6 feet', 'Prevents scratches and scuffs', 'Maintains phone resale value', 'Easy to install and remove']
    },
    {
      id: 2,
      name: 'Wireless Earbuds Pro',
      description: 'Crystal clear sound with noise cancellation and long battery life for all-day use.',
      fullDescription: 'Experience premium sound quality with our Wireless Earbuds Pro. Featuring active noise cancellation, touch controls, and up to 8 hours of battery life. Perfect for music, calls, and workouts.',
      icon: '🎧',
      features: ['Active Noise Cancelling', '8hr Battery Life', 'Touch Controls', 'IPX5 Water Resistant', 'Fast Charging'],
      benefits: ['Immersive sound experience', 'Clear call quality', 'Sweat and water resistant', 'Compact charging case']
    },
    {
      id: 3,
      name: 'Fast Charging Kit',
      description: 'Rapid charging solution with certified safety features for fast and safe charging.',
      fullDescription: 'Charge your devices faster and safer with our certified Fast Charging Kit. Includes high-quality cables and adapters that support fast charging protocols for various devices.',
      price: 'KSh 1,200 - 2,000',
      icon: '⚡',
      features: ['30W Fast Charging', 'Safety Certified', 'Durable Cable', 'Universal Compatibility', 'Overcharge Protection'],
      benefits: ['Charges 50% faster', 'Prevents battery damage', 'Works with all phones', 'Long-lasting cables']
    },
    {
      id: 4,
      name: 'Tempered Glass Protectors',
      description: 'Crystal clear screen protection with maximum touch sensitivity and easy installation.',
      fullDescription: 'Protect your phone screen from scratches and cracks with our premium tempered glass screen protectors. 9H hardness rating ensures maximum protection while maintaining perfect touch sensitivity.',
      icon: '🛡️',
      features: ['9H Hardness', 'Bubble-Free Installation', 'HD Clarity', 'Oleophobic Coating', 'Easy Alignment'],
      benefits: ['Prevents screen cracks', 'Reduces fingerprints', 'Maintains touch sensitivity', 'Easy to install']
    },
    {
      id: 5,
      name: 'Power Banks',
      description: 'High-capacity portable charging for your devices when you are on the go.',
      fullDescription: 'Never run out of battery with our high-capacity power banks. Compact design with fast charging capability, perfect for travel, work, or emergency power needs.',
      icon: '🔋',
      features: ['10000mAh Capacity', 'Fast Charge Support', 'Compact Design', 'Dual USB Ports', 'LED Power Indicator'],
      benefits: ['Multiple phone charges', 'Fast charging support', 'Pocket-friendly size', 'Travel-safe design']
    },
    {
      id: 6,
      name: 'Phone Accessories Bundle',
      description: 'Complete set of essential accessories including cables, adapters, and more.',
      fullDescription: 'Get everything you need in one bundle! Includes charging cables, adapter, car charger, and screen protectors. Perfect value package for new phone owners.',
      icon: '🎁',
      features: ['Multiple Accessories', 'Great Value', 'All-in-One Package', 'Quality Guaranteed', 'Compatible with Most Phones'],
      benefits: ['Save money on bundle', 'All essentials included', 'Perfect for new phones', 'Quality guaranteed']
    }
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <section className="product-details">
        <div className="container">
          <div className="error-page">
            <h2>Product Not Found</h2>
            <p>The product you're looking for doesn't exist.</p>
            <button onClick={() => navigate('/products')} className="btn btn-primary">
              <FaArrowLeft /> Back to Products
            </button>
          </div>
        </div>
      </section>
    );
  }

  const handleWhatsApp = () => {
    const message = `Hello! I'm interested in: ${product.name} (${product.price})`;
    window.open(`https://wa.me/254713970395?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:0713970395';
  };

  return (
    <section className="product-details">
      <div className="container">
        <button onClick={() => navigate('/products')} className="back-button">
          <FaArrowLeft /> Back to Products
        </button>

        <div className="product-detail-content">
          <div className="product-detail-image">
            <div className="product-emoji-large">{product.icon}</div>
            <div className="product-badge-detail">Premium Quality</div>
          </div>

          <div className="product-detail-info">
            <h1>{product.name}</h1>
            <p className="product-description">{product.fullDescription}</p>
            
            <div className="product-price-detail">
              <span className="price">{product.price}</span>
              <span className="price-note">(Price varies by model)</span>
            </div>

            <div className="product-features-detail">
              <h3>Key Features:</h3>
              <div className="features-list">
                {product.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <FaCheck className="feature-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="product-benefits">
              <h3>Benefits:</h3>
              <div className="benefits-list">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="benefit-item">
                    <FaShieldAlt className="benefit-icon" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="product-actions">
              <button onClick={handleWhatsApp} className="btn btn-whatsapp">
                <FaWhatsapp /> Inquire on WhatsApp
              </button>
              <button onClick={handleCall} className="btn btn-call">
                <FaPhone /> Call to Order
              </button>
            </div>

            <div className="product-guarantee">
              <FaShieldAlt className="guarantee-icon" />
              <span><strong>Quality Guarantee:</strong> 3-month warranty on all accessories</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;