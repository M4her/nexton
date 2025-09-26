import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import servicesimage2 from "../assets/images/serviceImage2.png";
import servicesimage4 from "../assets/images/serviceImage4.png";

import { TbWorld } from "react-icons/tb";

const Services = () => {
  return (
    <>
      <section id="Services" className="mt-[52px]  ">
        <div className="container">
          <div className="border border-[#E5E7EB] py-6 px-10 rounded-2xl flex justify-between flex-wrap ">
            {/* ---------single services 1 */}
            <div className="w-full lg:w-[303px]  border-r border-[#E5E7EB] flex gap-4 items-center">
              <LiaShippingFastSolid className="text-3xl text-primary" />
              <div>
                <h2 className="text-lg text-primary font-semibold font-pop">
                  Free shipping
                </h2>
                <p className="text-sm text-[#4B5563] font-normal font-pop">
                  On orders over $50.00
                </p>
              </div>
            </div>

            {/* ---------single services 2 */}
            <div className="w-[303px]  border-r border-[#E5E7EB] flex gap-4 items-center">
              <img className="w-6 h-6" src={servicesimage2} alt="cubes" />
              <div>
                <h2 className="text-lg text-primary font-semibold font-pop">
                  Very easy to return
                </h2>
                <p className="text-sm text-[#4B5563] font-normal font-pop">
                  Just phone number
                </p>
              </div>
            </div>

            {/* ---------single services 3 */}
            <div className="w-[303px]  border-r border-[#E5E7EB] flex gap-4 items-center">
              <TbWorld className="text-3xl text-primary" />
              <div>
                <h2 className="text-lg text-primary font-semibold font-pop">
                  Worldwide delivery
                </h2>
                <p className="text-sm text-[#4B5563] font-normal font-pop">
                  Fast delivery worldwide
                </p>
              </div>
            </div>

            {/* ---------single services 4 */}
            <div className="w-[303px]  flex gap-4 items-center">
              <img src={servicesimage4} alt="dollarsign" />
              <div>
                <h2 className="text-lg text-primary font-semibold font-pop">
                  Refunds policy
                </h2>
                <p className="text-sm text-[#4B5563] font-normal font-pop">
                  60 days return for any reason
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
