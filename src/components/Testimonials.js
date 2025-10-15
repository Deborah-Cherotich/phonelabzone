import React from 'react';
import { FaStar } from 'react-icons/fa';

// Import your testimonial images
import test1 from '../assets/images/test1.png';
import test2 from '../assets/images/test2.png';
import test3 from '../assets/images/test3.png';
import test4 from '../assets/images/test4.png';
import test5 from '../assets/images/test5.png';
import test6 from '../assets/images/test6.png';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dercy Dee.",
      rating: 5,
      comment: "Amazing service! Fixed my water-damaged phone in just 2 hours. Professional and affordable! Will definitely come back.",
      device: "Samsung S23 Ultra",
      image: test1
    },
    {
      name: "Jaycob jay.",
      rating: 5,
      comment: "Best screen replacement service! My phone looks brand new. The technicians were very professional and friendly.",
      device: "iPhone 14 Pro",
      image: test2
    },
    {
      name: "Spencer T.",
      rating: 5,
      comment: "Fast battery replacement service. My phone now lasts all day. Great work and excellent customer service!",
      device: "Google Pixel 7",
      image: test3
    },
    {
      name: "Mike M.",
      rating: 5,
      comment: "Professional software upgrade service. Fixed all my phone's performance issues quickly and efficiently.",
      device: "OnePlus 11",
      image: test4
    },
    {
      name: "Meggy G.",
      rating: 5,
      comment: "Quick network unlocking service. Now I can use any SIM card. Very knowledgeable staff!",
      device: "iPhone 13",
      image: test5
    },
    {
      name: "Lisa W.",
      rating: 5,
      comment: "Excellent camera repair! Photos are crystal clear again. Very satisfied with the quality and speed.",
      device: "Samsung S22",
      image: test6
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar key={i} className={i < rating ? "star filled" : "star"} />
    ));
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Customers Say</h2>
          <p className="section-subtitle">Don't just take our word for it - hear from our satisfied customers</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="testimonial-image"
                />
                <div className="testimonial-info">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.device}</span>
                </div>
              </div>
              
              <div className="rating">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="testimonial-text">"{testimonial.comment}"</p>
              
              <div className="testimonial-quote">
                ❝
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;