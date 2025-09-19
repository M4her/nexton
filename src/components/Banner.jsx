import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import hero from '../assets/images/hero.png'
import { Link } from 'react-router';
const Banner = () => {
     const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };
  return (
      <>
      <div className="slider-container banner_slider ">
      <Slider {...settings}>
        <div>
          <Link to='#'>
          <img className='w-full' src={hero} alt="BannerImg" />
          </Link>
        </div>
        <div>
          <Link to='#'>
          <img className='w-full' src={hero} alt="BannerImg" />
          </Link>
        </div>

      </Slider>
    </div>

      </>
  )
}

export default Banner