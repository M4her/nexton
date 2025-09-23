import React, { useState, useEffect } from "react";
import CommonHead from "./CommonHead";
import axios from "axios";
import ProductCard from "./ProductCard";

const Sellers = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setAllProducts(res.data.products);
    });
  }, []);

  console.log(allProducts);

  return (
    <>
      <section className="mt-[177px]">
        <div className="container">
          <CommonHead
            content1={"Best Sellers.."}
            content2={" Best selling of the month"}
          />

          <div className="flex gap-5 items-center mt-10">
            {allProducts.slice(0, 4).map((item) => (
              <ProductCard
                key={item.id}
                pImage={item.thumbnail}
                pTittle={item.title}
                pPrice={item.price}
                pCat={item.category}
                pDis={item.discountPercentage}
                pRate={item.rating}
                pStock={item.stock}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sellers;
