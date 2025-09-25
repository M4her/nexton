import React, { useState, useEffect } from "react";
import CommonHead from "./CommonHead";
import axios from "axios";
import ProductCard from "./ProductCard";
import Slider from "react-slick";

const Sellers = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setAllProducts(res.data.products);
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
  };

  return (
    <>
      <section className="Product mt-[177px]">
        <div className="container">
          <div className='mb-10'>

          <CommonHead 
            content1={"Best Sellers.."}
            content2={" Best selling of the month"}
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
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Sellers;
