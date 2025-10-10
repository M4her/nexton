import React, { useState, useEffect } from "react";
import CommonHead from "./CommonHead";
import axios from "axios";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import { useNavigate } from "react-router";

const Sellers = () => {
  const [allProducts, setAllProducts] = useState([]);
  const navigate = useNavigate();

  const handleDetails = (productID) => {
    navigate(`/productDetails/${productID}`);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
    .then((res) => {
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
     responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 757,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  
  };

  return (
    <>
      <section className="Product mt-[177px]">
        <div className="container px-6 lg:px-0">
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

export default Sellers;
