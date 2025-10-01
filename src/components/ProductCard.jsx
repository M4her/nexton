import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { BsCartPlus } from "react-icons/bs";
// import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router";
import { TbListDetails } from "react-icons/tb";

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
      <div className="w-[312px] lg:w-[309px] h-[448px] relative group overflow-hidden">
        <div className="absolute top-4 right-[-40px] flex flex-col gap-5 group-hover:right-4 duration-[.4s] ">
          <button className="p-2 rounded-full bg-white text-2xl active:scale-[1.1] hover:bg-black hover:text-white duration-[.4s]">
            <BsCartPlus />
          </button>
          <Link
            to={"/"}
            className="p-2 rounded-full bg-white text-2xl active:scale-[1.1] hover:bg-black hover:text-white duration-[.4s]"
          >
            <TbListDetails />
          </Link>
        </div>
        <div className="w-full h-[347px] bg-[#F8FAFC] rounded-2xl overflow-hidden">
          <img src={pImage} alt="product img" />
        </div>
        <div className="flex items-center justify-between mt-5 ">
          <h2 className="text-sm lg:text-base font-pop font-semibold text-primary truncate w-44 ">
            {pTittle}
          </h2>
          <h2 className="text-sm lg:text-base font-pop font-semibold text-primary">
            ${pPrice}
          </h2>
        </div>
        <div className="flex items-center justify-between mb-[15px]">
          <p className="text-xs lg:text-sm font-pop font-normal text-primary">{pCat}</p>
          <p className="text-xs lg:text-sm font-pop font-normal text-primary ">{pDis}%</p>
        </div>
        <div className="flex items-center gap-1">
          <TiStarFullOutline className="text-[#FBBF24] text-xl" />
          <p className="text-xs lg:text-sm font-pop font-normal text-primary  ">
            {pRate} ({pStock})
          </p>
        </div>
      </div>

    </>
  );
};

export default ProductCard;
