import React from "react";
import CommonHead from "./CommonHead";
import { Link } from "react-router";
import { IoIosArrowRoundForward } from "react-icons/io";
import Slider from "react-slick";

const Exploring = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <section className="exploring mt-[120px] ">
        <div className="container">
          <CommonHead
            content1={"Start exploring."}
            content2={"Good things are waiting for you"}
          />

          <Slider {...settings}>
            {/*---------- single card */}
            <div>
              <div className="w-[418px] mt-10 p-10 border border-[#E5E7EB] rounded-2xl flex justify-between items-center ">
                <div>
                  <h2 className="text-2xl text-primary font-semibold font-pop">
                    For Men's
                  </h2>
                  <p className="text-sm text-[#4B5563] font-normal font-pop">
                    Starting at $24
                  </p>
                </div>

                <Link
                  to={"#"}
                  className="border-l-3 border-[#E5E7EB] pl-3 flex items-center gap-2"
                >
                  Shop Now <IoIosArrowRoundForward className="text-xl" />
                </Link>
              </div>
            </div>

            {/*---------- single card 2 */}
            <div>
              <div className="w-[418px] mt-10 p-10 border border-[#E5E7EB] rounded-2xl flex justify-between items-center ">
                <div>
                  <h2 className="text-2xl text-primary font-semibold font-pop">
                    For Women's
                  </h2>
                  <p className="text-sm text-[#4B5563] font-normal font-pop">
                    Starting at $19
                  </p>
                </div>

                <Link
                  to={"#"}
                  className="border-l-3 border-[#E5E7EB] pl-3 flex items-center gap-2"
                >
                  Shop Now <IoIosArrowRoundForward className="text-xl" />
                </Link>
              </div>
            </div>
            {/*---------- single card 3 */}
            <div>
              <div className="w-[418px] mt-10 p-10 border border-[#E5E7EB] rounded-2xl flex justify-between items-center ">
                <div>
                  <h2 className="text-2xl text-primary font-semibold font-pop">
                    Accessories
                  </h2>
                  <p className="text-sm text-[#4B5563] font-normal font-pop">
                    Explore accessories
                  </p>
                </div>

                <Link
                  to={"#"}
                  className="border-l-3 border-[#E5E7EB] pl-3 flex items-center gap-2"
                >
                  Shop Now <IoIosArrowRoundForward className="text-xl" />
                </Link>
              </div>
            </div>
            {/*---------- single card 1 */}
            <div>
              <div className="w-[418px] mt-10 p-10 border border-[#E5E7EB] rounded-2xl flex justify-between items-center ">
                <div>
                  <h2 className="text-2xl text-primary font-semibold font-pop">
                    For Men's
                  </h2>
                  <p className="text-sm text-[#4B5563] font-normal font-pop">
                    Starting at $24
                  </p>
                </div>

                <Link
                  to={"#"}
                  className="border-l-3 border-[#E5E7EB] pl-3 flex items-center gap-2"
                >
                  Shop Now <IoIosArrowRoundForward className="text-xl" />
                </Link>
              </div>
            </div>

            {/*---------- single card 2 */}
            <div>
              <div className="w-[418px] mt-10 p-10 border border-[#E5E7EB] rounded-2xl flex justify-between items-center ">
                <div>
                  <h2 className="text-2xl text-primary font-semibold font-pop">
                    For Women's
                  </h2>
                  <p className="text-sm text-[#4B5563] font-normal font-pop">
                    Starting at $19
                  </p>
                </div>

                <Link
                  to={"#"}
                  className="border-l-3 border-[#E5E7EB] pl-3 flex items-center gap-2"
                >
                  Shop Now <IoIosArrowRoundForward className="text-xl" />
                </Link>
              </div>
            </div>
            {/*---------- single card 3 */}
            <div>
              <div className="w-[418px] mt-10 p-10 border border-[#E5E7EB] rounded-2xl flex justify-between items-center ">
                <div>
                  <h2 className="text-2xl text-primary font-semibold font-pop">
                    Accessories
                  </h2>
                  <p className="text-sm text-[#4B5563] font-normal font-pop">
                    Explore accessories
                  </p>
                </div>

                <Link
                  to={"#"}
                  className="border-l-3 border-[#E5E7EB] pl-3 flex items-center gap-2"
                >
                  Shop Now <IoIosArrowRoundForward className="text-xl" />
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Exploring;
