import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Elem from './styles';

import anniversaryArtBirthday from '../../assets/images/anniversary-art-birthday.png';
import lidyaNada from '../../assets/images/lidyaNada.png';
import slider3 from '../../assets/images/slider3.png';
import slider4 from '../../assets/images/slider4.png';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 25,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 20,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const MultiItemSlider = () => {
  
  return (
    <Elem.MultiItemSliderWrapper>
        <h4>Popular Celebrations</h4>
        <Carousel 
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={false}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={'desktop'}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          partialVisible={true}
        >
          <Elem.MultiItemSliderItem>
            <img src={anniversaryArtBirthday} alt={"slider"} />
            <span>Gifts Packages</span>
          </Elem.MultiItemSliderItem>
          <Elem.MultiItemSliderItem>
            <img src={lidyaNada} alt={"slider"} />
            <span>Gifts Packages</span>
          </Elem.MultiItemSliderItem>
          <Elem.MultiItemSliderItem>
            <img src={slider3} alt={"slider"} />
            <span>Gifts Packages</span>
          </Elem.MultiItemSliderItem>
          <Elem.MultiItemSliderItem>
            <img src={slider4} alt={"slider"} />
            <span>Gifts Packages</span>
          </Elem.MultiItemSliderItem>
        </Carousel>
    </Elem.MultiItemSliderWrapper>
  );
}

export default MultiItemSlider;
