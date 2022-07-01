import React from 'react';
import styles from './styles.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          src="http://placekitten.com/800/400"
          alt="First slide"
        />
      </div>
      <div>
        <img
          src="http://placekitten.com/800/400"
          alt="Second slide"
        />
      </div>
      <div>
        <img
          src="http://placekitten.com/800/400"
          alt="Third slide"
        />
      </div>
    </Slider>
  );
}

export default function TestComponent() {
  return (
    <section className={styles.testFeatures}>
      <div className="container">
        <div className="row">
          <h2>Hello this is a test</h2>
        </div>
        <div className={styles.carousel} >
          <SimpleSlider />
        </div>
      </div>
    </section>
    
  );
}
