import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
import img1 from '../assets/jerome-bertaux-t4FktEy8bP4-unsplash.jpg';
import img2 from '../assets/kitai-jogia-zhvaeh-R9rA-unsplash.jpg';
import './Slide.css';

const Slider = () => {
  const properties = {
    indicators: true,
  };
  return (
    <div className="containerSlider">
      <Fade {...properties}>
        <div className="each-slide">
          <img src={img1} alt="slide1" />
        </div>
        <div className="each-slide">
          <img src={img2} alt="slide1" />
        </div>
      </Fade>
    </div>
  );
};

export default Slider;
