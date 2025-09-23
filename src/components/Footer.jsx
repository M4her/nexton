import React from "react";
import { Link } from "react-router";
import logo from "../assets/images/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";




const Footer = () => {
  return (
    <>
      <footer className=" border border-[#E5E7EB]">
        <div className="container">
          <div className="footer_row flex justify-center gap-[205px] py-[60px] ">
            <div className="logos">
              <Link to={"/"} className="w-[119px]">
                <img src={logo} alt="logo" />
              </Link>

              <div className="flex items-center mt-[22px]">
                <a className="bg-[#FFFFFF] text-[#4676ED] text-xl" href="#">
                  <FaFacebook />
                </a>
                <h2 className="ml-7 text-base text-[#4B5563] font-pop font-normal">
                  Facebook
                </h2>
              </div>
              <div className="flex items-center mt-3">
                <a className="bg-[#FFFFFF] text-[#DA0000] text-xl" href="#">
                  <FaYoutube />
                </a>
                <h2 className="ml-7 text-base text-[#4B5563] font-pop font-normal">
                  Facebook
                </h2>
              </div>
              <div className="flex items-center mt-3">
                <a className="bg-[#FFFFFF] text-[#1D93D2] text-xl" href="#">
                  <FaTelegram />
                </a>
                <h2 className="ml-7 text-base text-[#4B5563] font-pop font-normal">
                  Facebook
                </h2>
              </div>
              <div className="flex items-center mt-3">
                <a className="bg-[#FFFFFF] text-[#5A99EC] text-xl" href="#">
                  <AiFillTwitterCircle />
                </a>
                <h2 className="ml-7 text-base text-[#4B5563] font-pop font-normal">
                  Facebook
                </h2>
              </div>
            </div>
            <div className="Getting started">
              <h2 className="text-base text-[#111827] font-semibold font-pop mb-5">
                Getting started
              </h2>
              <p className="text-base text-[#4B5563] font-normal font-pop ">
                Release Notes
              </p>
              <p className="text-base text-[#4B5563] font-normal font-pop mt-4">
                Upgrade Guide
              </p>
              <p className="text-base text-[#4B5563] font-normal font-pop mt-4">
                Browser Support
              </p>
              <p className="text-base text-[#4B5563] font-normal font-pop mt-4">
                Dark Mode
              </p>
            </div>
            <div className="Explore">
              <h2 className="text-base text-[#111827] font-semibold font-pop mb-5">
                {" "}
                Explore
              </h2>
              <p className="text-base text-[#4B5563] font-normal font-pop">
                Prototyping
              </p>
              <p className="text-base text-[#4B5563] font-normal font-pop mt-4">
                Design systems
              </p>
              <p className="text-base text-[#4B5563] font-normal font-pop mt-4">
                Pricing
              </p>
              <p className="text-base text-[#4B5563] font-normal font-pop mt-4">
                Security
              </p>
            </div>
            <div className="Community">
              <h2 className="text-base text-[#111827] font-semibold font-pop mb-5">
                Community
              </h2>
              <p className="text-base text-[#4B5563] font-normal font-pop">
                Discussion Forums
              </p>
              <p className="text-base text-[#4B5563] font-normal font-pop mt-4">
                Code of Conduct
              </p>
              <p className="text-base text-[#4B5563] font-normal font-pop mt-4">
                Contributing
              </p>
              <p className="text-base text-[#4B5563] font-normal font-pop mt-4">
                API Reference
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright ">
        <div className="container">
          <div className="">
            <h2>Nexton eCommerce. © 2024</h2>
          </div>
          <div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
