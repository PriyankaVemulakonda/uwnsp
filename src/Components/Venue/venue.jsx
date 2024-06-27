import React, { useEffect, useRef } from 'react';
import './venue.css';

const Venue = () => {
  const venueRef = useRef(null);

  useEffect(() => {
    const venueElement = venueRef.current;

    const handleScroll = () => {
      const top = venueElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight) {
        venueElement.classList.add('visible');
      } else {
        venueElement.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='venue' id='venue' ref={venueRef}>
      <h1>IIT Delhi Research and Innovation Park, New Delhi </h1> <hr />
      <p>Navigating the Depths: Innovations in Underwater Navigation," a pivotal one-day seminar hosted by our Technology Innovation Hub (TIH) in collaboration with the Indian Navy. This event is focused on highlighting the leading edge of underwater navigation technologies, from the latest breakthroughs to practical applications in the field of underwater exploration. As a leader in positioning and precision technologies, our TIH plays a crucial role in bringing together industry experts, academics, and technologists to explore and expand the boundaries of what is possible in underwater navigation. The seminar will cover a wide range of topics from current and emerging technologies to practical insights in underwater navigation, and the vibrant ecosystem of startups and funding opportunities.  By facilitating this gathering, we aim to contribute significantly to creating a robust ecosystem for underwater navigation, promoting innovation, and fostering collaboration among professionals. Whether you are deeply embedded in the field or newly interested, join us at IIT Delhi Research and Innovation Park, New Delhi to connect with and learn from the pioneers shaping the future of underwater exploration.</p>
    </div>
  );
};

export default Venue;
