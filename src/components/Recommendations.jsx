import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import CommonHead from "./CommonHead";
import axios from "axios";

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

  console.log(allProducts);

  return (
    <>
      <section className="mt-[176px]">
        <div className="container">
          <div className="mb-10">
            <CommonHead
              content1={"Recommendations."}
              content2={" Best matching products for you"}
            />
          </div>
          <div className="flex items-center gap-5 flex-wrap">
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

export default Recommendations;
