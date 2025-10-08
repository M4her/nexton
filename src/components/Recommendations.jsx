import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import CommonHead from "./CommonHead";
import axios from "axios";
import Slider from "react-slick";
import { useNavigate } from "react-router";

const Recommendations = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setAllProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // ---------------slider settings
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
  // -------------productDetails handler--------
  const navigate = useNavigate();

  const handleDetails = (productID) => {
    navigate(`/productDetails/${productID}`);
  };

  return (
    <>
      <section className="Product mt-[176px] ">
        <div className="container p-6 lg:p-0">
          <div className="mb-10">
            <CommonHead
              content1={"Recommendations."}
              content2={" Best matching products for you"}
            />
          </div>

          <Slider {...settings}>
            {allProducts.map((item) => (
              <div key={item.id}>
                <ProductCard
                  pImage={item.thumbnail}
                  pTittle={item.title}
                  pPrice={item.price}
                  pCat={item.category}
                  pDis={item.discountPercentage}
                  pRate={item.rating}
                  pStock={item.stock}
                  detailsClick={() => handleDetails(item.id)}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Recommendations;
