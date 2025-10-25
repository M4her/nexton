import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosRemove } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { WiStars } from "react-icons/wi";
import ProductCard from "../components/ProductCard";
import CommonHead from "../components/CommonHead";
import axios from "axios";
import Slider from "react-slick";
import { useNavigate, useParams } from "react-router";
import { LuDot } from "react-icons/lu";
import Breadcrumbs from "../components/Breadcrumbs";

const ProductDetails = () => {
  // -------------productDetails navigate--------
  const navigate = useNavigate();

  const handleDetails = (productID) => {
    navigate(`/productDetails/${productID}`);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ----------------slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 757,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // -----------------Api product
  const [singleProduct, setSingleProduct] = useState("");
  const [images, setImages] = useState("");
  const paramsData = useParams();
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    // -------------single product
    axios
      .get(`https://dummyjson.com/products/${paramsData.pId}`)
      .then((res) => {
        (setSingleProduct(res.data), setImages(res.data.images?.[0]));
      })
      .catch((err) => console.log(err));
    // --------all products-------
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setAllProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);
  const categoryProducts = allProducts.filter(
    (item) => item?.category == singleProduct?.category
  );
  console.log(categoryProducts);

  return (
    <>
      <section id="productDetails " className="mt-10 px-6 lg:px-0 ">
        <div className="container ">
          <Breadcrumbs pageName={'Product Details'} pageLink={`/productDetails/${paramsData.pId}`} subPageName={singleProduct.title}/>
          <div className="product_row flex justify-between flex-wrap mt-5">
            {/* -------sekeleton code */}
            {singleProduct ? (
              <div className="product_images flex flex-wrap gap-[11px] lg:gap-6 lg:border-b lg:border-[#E5E7EB] pb-[64px] ">
                <div className="flex flex-col gap-4 ">
                  {singleProduct.images?.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setImages(item)}
                      className="w-[70px] h-[79px] lg:w-[140px] lg:h-[158px] rounded-[16px] overflow-hidden bg-[#F8FAFC] hidden lg:block"
                    >
                      <img src={item} alt="productImages" />
                    </button>
                  ))}
                </div>
                <div className="w-[312px] lg:w-[640px] h-[331px] lg:h-[678px] bg-[#F8FAFC] rounded-[16px] pb-4">
                  <img src={images} alt="productImages" />
                </div>
                {/* ---------resbuttons */}
                <div className="flex  gap-4 ">
                  {singleProduct.images?.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setImages(item)}
                      className="w-[70px] h-[79px] lg:w-[140px] lg:h-[158px] rounded-[16px] overflow-hidden bg-[#F8FAFC]  lg:hidden"
                    >
                      <img src={item} alt="productImages" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white product_images flex flex-wrap gap-[11px] lg:gap-6 lg:border-b lg:border-gray-300 pb-[64px]">
                <div className="flex flex-col gap-4 ">
                  <button className="w-[70px] h-[79px] lg:w-[140px] lg:h-[158px] rounded-[16px] overflow-hidden hidden lg:block bg-gray-200 animate-pulse"></button>
                  <button className="w-[70px] h-[79px] lg:w-[140px] lg:h-[158px] rounded-[16px] overflow-hidden hidden lg:block bg-gray-200 animate-pulse"></button>
                  <button className="w-[70px] h-[79px] lg:w-[140px] lg:h-[158px] rounded-[16px] overflow-hidden hidden lg:block bg-gray-200 animate-pulse"></button>
                </div>
                <div className="w-[312px] lg:w-[640px] h-[331px] lg:h-[678px] bg-gray-200 rounded-[16px] pb-4 animate-pulse"></div>
                <div className="flex gap-4 lg:hidden">
                  <button className="w-[70px] h-[79px] lg:w-[140px] lg:h-[158px] rounded-[16px] overflow-hidden bg-gray-200 animate-pulse"></button>
                  <button className="w-[70px] h-[79px] lg:w-[140px] lg:h-[158px] rounded-[16px] overflow-hidden bg-gray-200 animate-pulse"></button>
                  <button className="w-[70px] h-[79px] lg:w-[140px] lg:h-[158px] rounded-[16px] overflow-hidden bg-gray-200 animate-pulse"></button>
                </div>
              </div>
            )}

            {/* /* ----------options------ */}
            <div className="product_option w-[312px] lg:w-[460px] lg:p-[33px] lg:border lg:border-[#E5E7EB] h-fit rounded-2xl">
              <h1 className="text-2xl font-semibold font-pop text-primary w-[312px] lg:hidden">
                Black Automatic Watch
              </h1>
              <h2 className="text-xl font-semibold font-pop text-primary mt-3 lg:hidden">
                $68.00
              </h2>
              <p className="text-xs font-medium font-pop text-#[4B5563] line-through lg:hidden">
                $79.00
              </p>

              <div className="flex justify-between">
                <div className="flex items-center gap-1 h-fit">
                  <FaStar className="text-[#FBBF24] hidden lg:block " />
                  <FaStar className="text-[#FBBF24] mt-[26px] lg:hidden " />

                  <p className="text-base font-semibold font-pop text-[#4B5563] hidden lg:flex items-center">
                    {singleProduct.rating}
                    <LuDot className="mx-1" />
                    {singleProduct.reviews?.length} reviews
                  </p>
                  <p className="text-base font-semibold font-pop text-[#4B5563] mt-[26px]  lg:hidden flex items-center">
                    4.9
                    <LuDot className="mx-1" />
                    (98)
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold font-pop text-primary hidden lg:block truncate w-25">
                    $
                    {singleProduct.price -
                      (singleProduct.price * singleProduct.discountPercentage) /
                        100}
                  </h2>
                  <h3 className="text-sm font-medium font-pop text-[#4B5563] line-through hidden lg:block ml-[39px] ">
                    ${singleProduct.price}
                  </h3>
                </div>
              </div>
              {/* ------------product size */}
              <h2 className="text-sm lg:text-base font-semibold font-pop text-primary mt-8">
                Size: S
              </h2>
              <div className="flex flex-wrap gap-2 mt-3 mb-8">
                <button
                  className="w-[68px] h-[36px] lg:w-[72px] lg:h-[44px] border border-[#E5E7EB] rounded-xl text-xs
                 lg:text-base font-semibold font-pop text-[#4B5563] hover:bg-[#0EA5E9] hover:text-[#FFFFFF]"
                >
                  S
                </button>
                <button
                  className="w-[68px] h-[36px] lg:w-[72px] lg:h-[44px] border border-[#E5E7EB] rounded-xl text-xs
                 lg:text-base font-semibold font-pop text-[#4B5563] hover:bg-[#0EA5E9] hover:text-[#FFFFFF]"
                >
                  M
                </button>
                <button
                  className="w-[68px] h-[36px] lg:w-[72px] lg:h-[44px] border border-[#E5E7EB] rounded-xl text-xs
                tlg:ext-base font-semibold font-pop text-[#4B5563] hover:bg-[#0EA5E9] hover:text-[#FFFFFF]"
                >
                  L
                </button>
                <button
                  className="w-[68px] h-[36px] lg:w-[72px] lg:h-[44px] border border-[#E5E7EB] rounded-xl text-xs
                 lg:text-base font-semibold font-pop text-[#4B5563] hover:bg-[#0EA5E9] hover:text-[#FFFFFF]"
                >
                  XL
                </button>
                <button
                  className="w-[68px] h-[36px] lg:w-[72px] lg:h-[44px] border border-[#E5E7EB] rounded-xl text-xs
                 lg:text-base font-semibold font-pop text-[#4B5563] hover:bg-[#0EA5E9] hover:text-[#FFFFFF]"
                >
                  2XL
                </button>
              </div>
              {/* ------add to cart */}
              <div className="flex justify-between mb-5 lg:mb-8">
                {/* buttons part */}
                <div className=" w-[110px] h-[40px] py-2 px-3 rounded-[9999px] bg-[#E5E7EB] flex gap-3 lg:gap-4 items-center mt-2">
                  <button className="w-5 h-5 lg:w-6 lg:h-6 border border-[#E5E7EB] bg-[#fff] rounded-full flex justify-center items-center">
                    <IoIosRemove />
                  </button>
                  <h2 className="text-sm lg:text-base font-pop font-medium text-primary">
                    1
                  </h2>
                  <button className="w-5 h-5 lg:w-6 lg:h-6 border border-[#E5E7EB] bg-[#fff] rounded-full flex justify-center items-center">
                    <IoAdd />
                  </button>
                </div>
                {/* ------add to cart button */}
                <div
                  className="px-6 py-[10px] lg:py-4 lg:px-8 bg-[#111827] text-base font-medium font-pop text-[#fff] rounded-[9999px]
                 flex items-center gap-2 "
                >
                  <IoBagHandleOutline />
                  Add to cart
                </div>
              </div>
              {/*---------- sum total */}
              <div className="flex justify-between items-center ">
                <p className="text-base font-normal font-pop text-[#4B5563] hidden lg:block">
                  $
                  {singleProduct.price -
                    (singleProduct.price * singleProduct.discountPercentage) /
                      100}{" "}
                  x 1
                </p>
                <p className="text-base font-normal font-pop text-[#4B5563] hidden lg:block">
                  $
                  {singleProduct.price -
                    (singleProduct.price * singleProduct.discountPercentage) /
                      100}
                </p>
              </div>
              <div className="flex justify-between items-center mt-[10px] mb-4">
                <p className="text-base font-normal font-pop text-[#4B5563] hidden lg:block">
                  Tax estimate
                </p>
                <p className="text-base font-normal font-pop text-[#4B5563] hidden lg:block">
                  $0
                </p>
              </div>
              <div className="border border-[#E5E7EB] hidden lg:block"></div>
              <div className="flex justify-between items-center mt-4">
                <h2 className="text-base font-pop font-semibold text-primary hidden lg:block">
                  Total
                </h2>
                <h2 className="text-base font-pop font-semibold text-primary hidden lg:block">
                  $
                  {singleProduct.price -
                    (singleProduct.price * singleProduct.discountPercentage) /
                      100}
                </h2>
              </div>
            </div>
          </div>
          {/* ----------texts------ */}
          <div className="mt-[52px]">
            <h2 className="text-4xl font-semibold font-pop text-primary hidden lg:block">
              {singleProduct.title}
            </h2>
            <p className="text-sm lg:text-base font-normal font-pop text-[#4B5563] w-[312px] lg:w-[735px] mt-1">
              {singleProduct.description}
            </p>
            <h2 className="text-xl font-semibold font-pop text-primary lg:hidden">
              About this product
            </h2>
            <h2 className="text-xl lg:text-2xl font-semibold font-pop text-primary mt-10 lg:mt-[60px]">
              Fabric + Care
            </h2>
            <p className="text-sm lg:text-base font-normal font-pop text-[#4B5563]">
              Material: Soft wool blend
            </p>
            <p className="text-sm lg:text-base font-normal font-pop text-[#4B5563]">
              Color: Various
            </p>
            <h2 className="text-xl lg:text-2xl font-semibold font-pop text-primary mt-10 lg:mt-[60px]">
              Sale performance
            </h2>
            <p className="text-sm lg:text-base font-normal font-pop text-[#4B5563]">
              Sales: 0
            </p>
            <p className="text-sm lg:text-base font-normal font-pop text-[#4B5563]">
              Review Count: -
            </p>
            <p className="text-sm lg:text-base font-normal font-pop text-[#4B5563]">
              Review Average: -
            </p>
            {/* -----------keywords */}
            <h2 className="text-xl lg:text-2xl font-semibold font-pop text-primary mt-10 lg:mt-[60px] mb-2">
              Keywords
            </h2>
            <div className="flex gap-2 flex-wrap">
              <div className="px-[14px] py-2 border border-[#E5E7EB] bg-[#FFFFFF] rounded-2xl text-xs font-normal font-pop text-[#4B5563] flex items-center ">
                <WiStars className="text-xl" />
                men's fashion
              </div>
              <div className="px-[14px] py-2 border border-[#E5E7EB] bg-[#FFFFFF] rounded-2xl text-xs font-normal font-pop text-[#4B5563] flex items-center ">
                <WiStars className="text-xl" />
                winter hat
              </div>
              <div className="px-[14px] py-2 border border-[#E5E7EB] bg-[#FFFFFF] rounded-2xl text-xs font-normal font-pop text-[#4B5563] flex items-center ">
                <WiStars className="text-xl" />
                colorful accessory
              </div>
              <div className="px-[14px] py-2 border border-[#E5E7EB] bg-[#FFFFFF] rounded-2xl text-xs font-normal font-pop text-[#4B5563] flex items-center ">
                <WiStars className="text-xl" />
                warm headwear
              </div>
            </div>
          </div>
          {/* ----------Recommendations */}
          <div className="Product pt-[96px] pb-[72px] overflow-hidden">
            <div className="container p-6 lg:p-0">
              <div className="mb-10 hidden lg:block">
                <CommonHead content1={"Recommended products"} />
              </div>
              <div className="mb-10 lg:hidden">
                <CommonHead content1={"Recommendations"} />
              </div>

              <Slider {...settings}>
                {categoryProducts.map((item) => (
                  <div key={item.id}>
                    <ProductCard
                      pImage={item.thumbnail}
                      pTittle={item.title}
                      pPrice={
                        item.price - (singleProduct.price * singleProduct.discountPercentage) / 100
                      }
                      pCat={item.category}
                      pDis={item.price}
                      pRate={item.rating}
                      pStock={item.stock}
                      detailsClick={() => (
                        handleDetails(item.id),
                        setSingleProduct(item),
                        setImages(item.images?.[0])
                      )}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
