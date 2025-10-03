import React from "react";
import { Link } from "react-router";
import logo from "../assets/images/logo.png";
import { FaCcPaypal, FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import verSign from "../assets/images/verisign.png";
import visa from "../assets/images/visa.png";
import paypal from "../assets/images/paypal.png";
import stripe from "../assets/images/stripe.png";

const Footer = () => {
  return (
    <>
      <footer className="py-[60px] border-y border-[#E5E7EB] ">
        <div className="container px-6 lg:px-0 ">
          <div className="footer_row lg:flex justify-between">
            <div className="logos">
              <Link to={"/"} className="mb-[22px] block">
                <img src={logo} alt="logo" />
              </Link>

              <div>
                <a className="flex items-center gap-2 mb-[14px]" href="#">
                  <FaFacebook className="bg-[#FFFFFF] text-[#4676ED] text-xl" />
                  <h2 className=" text-base text-[#4B5563] font-pop font-normal">
                    Facebook
                  </h2>
                </a>
              </div>
              <div>
                <a className="flex items-center gap-2 mb-[14px]" href="#">
                  <FaYoutube className="bg-[#FFFFFF] text-[#DA0000] text-xl" />
                  <h2 className=" text-base text-[#4B5563] font-pop font-normal">
                    Youtube
                  </h2>
                </a>
              </div>
              <div>
                <a className="flex items-center gap-2 mb-[14px]" href="#">
                  <FaTelegram className="bg-[#FFFFFF] text-[#1D93D2] text-xl" />
                  <h2 className=" text-base text-[#4B5563] font-pop font-normal">
                    Telegram
                  </h2>
                </a>
              </div>
              <div className="">
                <a className="flex items-center gap-2 mb-[14px]" href="#">
                  <AiFillTwitterCircle className="bg-[#FFFFFF] text-[#5A99EC] text-xl" />
                  <h2 className=" text-base text-[#4B5563] font-pop font-normal">
                    Twitter
                  </h2>
                </a>
              </div>

              {/* ----------logos end */}
            </div>
            {/* ----------menu row----- */}
            <div className="Getting started mt-[60px] lg:mt-0">
              <h2 className="text-base text-[#111827] font-semibold font-pop mb-5">
                Getting started
              </h2>
              <Link
                to={"/"}
                className="text-base text-[#4B5563] font-normal font-pop block "
              >
                Release Notes
              </Link>
              <Link
                to={"/"}
                className="text-base text-[#4B5563] font-normal font-pop mt-4 block"
              >
                Upgrade Guide
              </Link>
              <Link
                to={"/"}
                className="text-base text-[#4B5563] font-normal font-pop mt-4 block"
              >
                Browser Support
              </Link>
              <Link
                to={"/"}
                className="text-base text-[#4B5563] font-normal font-pop mt-4 block"
              >
                Dark Mode
              </Link>
            </div>
            <div className="Explore mt-[60px]  lg:mt-0">
              <h2 className="text-base text-[#111827] font-semibold font-pop mb-5">
                {" "}
                Explore
              </h2>
              <Link
                to={"/"}
                className="text-base text-[#4B5563] font-normal font-pop block"
              >
                Prototyping
              </Link>
              <Link
                to={"/"}
                className="text-base text-[#4B5563] font-normal font-pop mt-4 block"
              >
                Design systems
              </Link>
              <Link
                to={"/"}
                className="text-base text-[#4B5563] font-normal font-pop mt-4 block"
              >
                Pricing
              </Link>
              <Link
                to={"/"}
                className="text-base text-[#4B5563] font-normal font-pop mt-4 block"
              >
                Security
              </Link>
            </div>
            <div className="Community mt-[60px] lg:mt-0">
              <h2 className="text-base text-[#111827] font-semibold font-pop mb-5">
                Community
              </h2>
              <Link
                to={"/"}
                className="text-base text-[#4B5563] font-normal font-pop block"
              >
                Discussion Forums
              </Link>
              <Link
                to={"/"}
                className="text-base text-[#4B5563] font-normal font-pop mt-4 block"
              >
                Code of Conduct
              </Link>
              <Link
                to={"/"}
                className="text-base text-[#4B5563] font-normal font-pop mt-4 block"
              >
                Contributing
              </Link>
              <Link
                to={"/"}
                className="text-base text-[#4B5563] font-normal font-pop mt-4 block"
              >
                API Reference
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright ">
        <div className="container">
          <div className="px-[82px] pt-5 pb-[55px] lg:py-8 lg:px-[120px] lg:flex justify-between items-center ">
            <h2 className=" text-sm lg:text-base text-[#4B5563] font-normal font-pop mb-3">
              Nexton eCommerce. © 2024
            </h2>
            <div className="flex gap-[4px] items-center">
              <a className=" text-[#111827] " href="#">
                <img src={visa} alt="veriSign" />
              </a>
              <a className=" text-[#111827]" href="#">
                <img src={paypal} alt="veriSign" />
              </a>
              <a className=" text-[#111827]" href="#">
                <img src={stripe} alt="veriSign" />
              </a>

              <a className=" text-[#111827]" href="#">
                <img src={verSign} alt="veriSign" />
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
