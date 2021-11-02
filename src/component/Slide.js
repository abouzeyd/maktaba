import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import img1 from '../assets/jerome-bertaux-t4FktEy8bP4-unsplash.jpg';
import img2 from '../assets/kitai-jogia-zhvaeh-R9rA-unsplash.jpg';
import './Slide.css';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
  return (
    <div className=" container">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="First slide"
            // style={{ height: 500 }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            // style={{ height: 500 }}
            src={img1}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Third slide"
            // style={{ height: 500 }}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
