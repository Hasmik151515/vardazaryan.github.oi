import React, { useState, useEffect } from 'react';

// Նկարների import (փոխարինիր քո իսկական նկարներով)
import img1 from '../assets/phonebackground.jpg';
import img2 from '../assets/shake.jpg';
import img3 from '../assets/WiFi.jpg';
import img4 from '../assets/odaparik.jpg';
import img5 from '../assets/bifri.jpg';

function ImageSlide() {
  const images = [img1, img2, img3, img4, img5];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3000 միլիսեկունդ = 3 վայրկյան

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{ width: '100%', overflow: 'hidden', height: '620px' }}>
      <img
        src={images[index]}
        alt={`Slide ${index}`}
        style={{ width: '100%', height: '620px', objectFit: 'cover' }}
      />
    </div>
  );
}

export default ImageSlide;
