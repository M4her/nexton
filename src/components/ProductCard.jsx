import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { BsCartPlus } from "react-icons/bs";


const ProductCard = ({
  pImage,
  pTittle,
  pPrice,
  pCat,
  pDis,
  pRate,
  pStock,
}) => {
  return (
    <>
      <div className="w-[309px] h-[448px] relative">
        <div className="absolute top-4 right-5">
          <button className="p-2 rounded-full bg-white text-2xl active:scale-[1.1] hover:bg-black hover:text-white duration-[.4s]">
            <BsCartPlus/>

          </button>
        </div>
        <div className="w-full h-[347px] bg-[#F8FAFC] rounded-2xl overflow-hidden">
          <img src={pImage} alt="product img" />
        </div>
        <div className="flex items-center justify-between mt-5">
          <h2 className="text-base font-pop font-semibold text-primary">
            {pTittle}
          </h2>
          <h2 className="text-base font-pop font-semibold text-primary">
            ${pPrice}
          </h2>
        </div>
        <div className="flex items-center justify-between mb-[15px]">
          <p className="text-sm font-pop font-normal text-primary">{pCat}</p>
          <p className="text-sm font-pop font-normal text-primary ">{pDis}%</p>
        </div>
        <div className="flex items-center gap-1">
          <TiStarFullOutline className="text-[#FBBF24] text-xl" />
          <p className="text-sm font-pop font-normal text-primary  ">
            {pRate} ({pStock})
          </p>
        </div>
      </div>

      {/* </section> */}
    </>
  );
};

export default ProductCard;
