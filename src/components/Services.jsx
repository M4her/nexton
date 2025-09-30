import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import servicesimage2 from "../assets/images/serviceImage2.png";
import servicesimage4 from "../assets/images/serviceImage4.png";

import { TbWorld } from "react-icons/tb";

const Services = () => {
  return (
    <>
      <section id="Services" className="mt-[52px]  ">
        <div className="container px-6 lg:px-0">
          <h2 className="text-base font-pop font-semibold text-primary lg:hidden mb-6">Nexton® always with you</h2>
          <div className="lg:border lg:border-[#E5E7EB] lg:py-6 lg:px-10 rounded-2xl flex lg:justify-between gap-6 flex-wrap ">
            {/* ---------single services 1 */}
            <div className="w-fit lg:w-[303px]  lg:border-r border-[#E5E7EB] flex gap-2 lg:gap-4 items-center">
              <LiaShippingFastSolid className="text-base lg:text-3xl text-primary" />
              <div>
                <h2 className="text-sm lg:text-lg text-primary font-normal lg:font-semibold font-pop">
                  Free shipping
                </h2>
                <p className="text-sm text-[#4B5563] font-normal font-pop hidden lg:block">
                  On orders over $50.00
                </p>
              </div>
            </div>

            {/* ---------single services 2 */}
            <div className="w-fit lg:w-[303px]  lg:border-r border-[#E5E7EB] flex gap-2 lg:gap-4  items-center">
              <img className="w-4 h-4 lg:w-6 lg:h-6 " src={servicesimage2} alt="cubes" />
              <div>
                <h2 className="text-sm lg:text-lg text-primary font-normal lg:font-semibold font-pop">
                  Very easy to return
                </h2>
                <p className="text-sm text-[#4B5563] font-normal font-pop hidden lg:block">
                  Just phone number
                </p>
              </div>
            </div>

            {/* ---------single services 3 */}
            <div className="w-fit lg:w-[303px]  lg:border-r border-[#E5E7EB] flex gap-2 lg:gap-4  items-center">
              <TbWorld className="text-base lg:text-3xl text-primary" />
              <div>
                <h2 className="text-sm lg:text-lg text-primary font-normal lg:font-semibold font-pop">
                  Worldwide delivery
                </h2>
                <p className="text-sm text-[#4B5563] font-normal font-pop hidden lg:block">
                  Fast delivery worldwide
                </p>
              </div>
            </div>

            {/* ---------single services 4 */}
            <div className="w-[303px]  flex gap-2 lg:gap-4  items-center">
              <img className="w-4 h-4 lg:w-6 lg:h-6"  src={servicesimage4} alt="dollarsign" />
              <div>
                <h2 className="text-sm lg:text-lg text-primary font-normal lg:font-semibold font-pop">
                  Refunds policy
                </h2>
                <p className="text-sm text-[#4B5563] font-normal font-pop hidden lg:block">
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
