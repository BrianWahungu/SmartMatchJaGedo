// src/components/Testimonials.jsx
import React from 'react';
import Slider from 'react-slick';
import '../styles/Testimonials.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import client1 from '../assets/client1.jpg';
import client2 from '../assets/client2.jpg';
import client3 from '../assets/client3.jpg';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    role: 'Interior Designer',
    image: client1,
    feedback:
      'This platform made finding the right builder so easy. The professionalism and quality of work exceeded my expectations!',
  },
  {
    id: 2,
    name: 'David K.',
    role: 'Homeowner',
    image: client2,
    feedback:
      'A seamless experience from start to finish. I was matched with a builder who perfectly understood my vision.',
  },
  {
    id: 3,
    name: 'Jane W.',
    role: 'Architect',
    image: client3,
    feedback:
      'Super intuitive and helpful. The builders I connected with were top-notch. Highly recommend this service!',
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <Slider {...settings} className="carousel-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p className="quote">“{testimonial.feedback}”</p>
            <div className="client-info">
              <img src={testimonial.image} alt={testimonial.name} className="client-image" />
              <div>
                <h4>{testimonial.name}</h4>
                <small>{testimonial.role}</small>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
