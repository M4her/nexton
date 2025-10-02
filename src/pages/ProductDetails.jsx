import React from "react";
import { FaStar } from "react-icons/fa";
import { IoIosRemove } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";

const ProductDetails = () => {
  return (
    <>
      <section id="productDetails " className="mt-10 px-6 lg:px-0 ">
        <div className="container ">
          <div className="product_row flex justify-between">
            <div className="product_images flex gap-6 border-b border-[#E5E7EB] pb-[64px] ">
              <div className="flex flex-col gap-4">
                <button className="w-[140px] h-[157px] rounded-[16px] overflow-hidden bg-[#F8FAFC]"></button>
                <button className="w-[140px] h-[157px] rounded-[16px] overflow-hidden bg-[#F8FAFC]"></button>
                <button className="w-[140px] h-[157px] rounded-[16px] overflow-hidden bg-[#F8FAFC]"></button>
                <button className="w-[140px] h-[157px] rounded-[16px] overflow-hidden bg-[#F8FAFC]"></button>
              </div>
              <div className="w-[640px] h-[678px] bg-[#F8FAFC] rounded-[16px]"></div>
            </div>
            {/* ----------options------ */}
            <div className="product_option w-[460px] p-[33px] border border-[#E5E7EB] h-fit rounded-2xl">
              <div className="flex justify-between">
                <div className="flex items-center gap-1 h-fit">
                  <FaStar className="text-[#FBBF24]" />
                  <p className="text-base font-semibold font-pop text-[#4B5563]">
                    4.9 . 142 reviews
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold font-pop text-primary">
                    $169.99
                  </h2>
                  <h3 className="text-sm font-medium font-pop text-[#4B5563] line-through">
                    $199.99
                  </h3>
                </div>
              </div>
              {/* ------------product size */}
              <h2 className="text-base font-semibold font-pop text-primary">
                Size: S
              </h2>
              <div className="flex gap-2 mt-3 mb-8">
                <button className="w-[72px] h-[44px] border border-[#E5E7EB] rounded-xl">
                  S
                </button>
                <button className="w-[72px] h-[44px] border border-[#E5E7EB] rounded-xl">
                  M
                </button>
                <button className="w-[72px] h-[44px] border border-[#E5E7EB] rounded-xl">
                  L
                </button>
                <button className="w-[72px] h-[44px] border border-[#E5E7EB] rounded-xl">
                  XL
                </button>
                <button className="w-[72px] h-[44px] border border-[#E5E7EB] rounded-xl">
                  2XL
                </button>
              </div>
              {/* ------add to cart */}
              <div className="flex justify-between">
                {/* buttons part */}
                <div className="py-2 px-3 rounded-[9999px] bg-[#E5E7EB] flex gap-4 items-center">
                  <button className="w-6 h-6 border border-[#E5E7EB] bg-[#fff] rounded-full flex justify-center items-center">
                    <IoIosRemove />
                  </button>
                  <h2 className="text-base font-pop font-medium text-primary">
                    1
                  </h2>
                  <button className="w-6 h-6 border border-[#E5E7EB] bg-[#fff] rounded-full flex justify-center items-center">
                    <IoAdd />
                  </button>
                </div>
                {/* ------add to cart button */}
                <div className="py-4 px-8 bg-[#111827] text-base font-medium font-pop text-[#fff] rounded-[9999px] flex items-center gap-2">
                  <IoBagHandleOutline />
                  Add to cart
                </div>
              </div>
            </div>
          </div>
          {/* ----------texts------ */}
          <div className="mt-[52px]">
            <h2 className="text-4xl font-semibold font-pop text-primary hidden lg:block">
              Black Automatic Watch
            </h2>
            <h2 className="text-xl font-semibold font-pop text-primary lg:hidden">
              About this product
            </h2>
            <p className="text-sm lg:text-base font-normal font-pop text-[#4B5563] w-[312px] lg:w-[735px] mt-1">
              The St. Louis Meramec Canoe Company was founded by Alfred Wickett
              in 1922. Wickett had previously worked for the Old Town Canoe Co
              from 1900 to 1914. Manufacturing of the classic wooden canoes in
              Valley Park, Missouri ceased in 1978.
            </p>
            <h2 className="text-xl lg:text-2xl font-semibold font-pop text-primary mt-10 lg:mt-[60px]">
              Fabric + Care
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
