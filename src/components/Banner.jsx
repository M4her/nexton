import React from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import hero from "../assets/images/hero.png";
import { Link } from "react-router";
import { CiSearch } from "react-icons/ci";
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <div className="slider-container banner_slider hidden lg:block ">
        <Slider {...settings}>
          <div>
            <Link to="#">
              <img className="w-full" src={hero} alt="BannerImg" />
            </Link>
          </div>
          <div>
            <Link to="#">
              <img className="w-full" src={hero} alt="BannerImg" />
            </Link>
          </div>
        </Slider>
      </div>
      {/* ------------phone banner */}
      <div className="resBanner pt-[163px] pb-[199px] bg-[#F8F8F8] lg:hidden">
        <div className="container px-6">
          <Slider {...settings}>
            <div>
              <h2 className="text-sm font-pop font-medium text-[#4B5563]">
                Starting from: $49.99
              </h2>
              <h1 className="text-3xl font-pop font-semibold text-primary mt-2 mb-10">
                Exclusive collection for everyone
              </h1>
              <button className="py-3 px-6 bg-primary rounded-[9999px] text-sm font-pop font-medium text-[#fff] flex items-center gap-2 ">
                Explore now
                <CiSearch className="text-xl" />
              </button>
            </div>

            <div>
              <h2 className="text-sm font-pop font-medium text-[#4B5563]">
                Starting from: $49.99
              </h2>
              <h1 className="text-3xl font-pop font-semibold text-primary mt-2 mb-10">
                Exclusive collection for everyone
              </h1>
              <button className="py-3 px-6 bg-primary rounded-[9999px] text-sm font-pop font-medium text-[#fff] flex items-center gap-2">
                Explore now
                <CiSearch className="text-xl" />
              </button>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Banner;
