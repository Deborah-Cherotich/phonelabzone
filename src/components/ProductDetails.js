import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaArrowLeft, FaStar, FaCheck } from 'react-icons/fa';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  // Sample product data - replace with your actual products
  const products = {
    1: {
      name: 'Premium Phone Cases',
      description: 'High-quality protective cases for all phone models with military-grade drop protection.',
      fullDescription: 'Our premium phone cases offer superior protection without compromising on style. Made with shock-absorbent materials and featuring raised edges to protect your screen and camera.',
      price: 'From KSh 1,500',
      images: ['📱', '🌈', '⚡'], // Replace with actual image imports
      features: [
        'Military-grade drop protection',
        'Wireless charging compatible',
        'Scratch-resistant coating',
        'Multiple color options',
        'Easy installation'
      ],
      rating: 4.8,
      reviews: 127
    },
    2: {
      name: 'Wireless Earbuds Pro',
      description: 'Premium sound quality with active noise cancellation and long battery life.',
      fullDescription: 'Experience crystal-clear audio with our Wireless Earbuds Pro. Featuring advanced noise cancellation technology and 8-hour battery life with charging case.',
      price: 'KSh 4,999',
      images: ['🎧', '🔊', '📦'], // Replace with actual image imports
      features: [
        'Active noise cancellation',
        '8-hour battery life',
        'IPX5 water resistance',
        'Touch controls',
        'Fast charging'
      ],
      rating: 4.6,
      reviews: 89
    },
    3: {
      name: 'Fast Charging Kit',
      description: 'Rapid charging solution with certified safety features for all devices.',
      fullDescription: 'Charge your devices at lightning speed with our certified fast charging kit. Includes 30W adapter and durable braided cable with overcharge protection.',
      price: 'KSh 2,500',
      images: ['⚡', '🔌', '🔋'], // Replace with actual image imports
      features: [
        '30W fast charging',
        'Braided durable cable',
        'Overcharge protection',
        'Multi-device compatible',
        '1-year warranty'
      ],
      rating: 4.7,
      reviews: 203
    },
    4: {
      name: 'Tempered Glass Screen Protectors',
      description: 'Crystal clear protection with maximum touch sensitivity and easy installation.',
      fullDescription: 'Keep your screen pristine with our 9H hardness tempered glass protectors. Easy bubble-free installation with full touch sensitivity maintained.',
      price: 'KSh 800',
      images: ['🛡️', '📱', '✨'], // Replace with actual image imports
      features: [
        '9H hardness rating',
        'Bubble-free installation',
        'Oleophobic coating',
        'Full touch sensitivity',
        'Crystal clear clarity'
      ],
      rating: 4.9,
      reviews: 156
    }
  };

  const product = products[id];

  if (!product) {
    return (
      <div className="product-details">
        <div className="container">
          <div className="product-not-found">
            <h2>Product Not Found</h2>
            <button onClick={() => navigate('/products')} className="btn btn-primary">
              <FaArrowLeft /> Back to Products
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="product-details">
      <div className="container">
        <button onClick={() => navigate('/products')} className="back-button">
          <FaArrowLeft /> Back to Products
        </button>

        <div className="product-details-content">
          <div className="product-gallery">
            <div className="main-image">
              {product.images[selectedImage]}
            </div>
            <div className="image-thumbnails">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  {image}
                </button>
              ))}
            </div>
          </div>

          <div className="product-info">
            <h1>{product.name}</h1>
            
            <div className="product-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < Math.floor(product.rating) ? 'filled' : ''} />
                ))}
              </div>
              <span className="rating-text">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="product-full-description">{product.fullDescription}</p>

            <div className="product-features">
              <h3>Features:</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>
                    <FaCheck className="feature-check" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="product-price-section">
              <span className="price">{product.price}</span>
              <button className="add-to-cart-btn">
                <FaShoppingCart /> Add to Cart
              </button>
            </div>

            <div className="product-meta">
              <div className="meta-item">
                <strong>Delivery:</strong> Same day within Nairobi
              </div>
              <div className="meta-item">
                <strong>Warranty:</strong> 1 year
              </div>
              <div className="meta-item">
                <strong>In Stock:</strong> Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;