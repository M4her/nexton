import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { useLocation, useParams } from "react-router";
import { Pagination } from "antd";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
  //   const myLocation = useLocation()
  //   const currentPage = myLocation.pathname.split("/")[1].split('-').join(' ')
  // console.log(currentPage)
  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };

  return (
    <>
      <section id="AllProducts">
        <div className="container">
          <Breadcrumbs pageName={"All Product"} />
          <div className="flex flex-wrap gap-5 mt-8">
            <ProductCard/>

          </div>
          <div className="flex justify-end mt-10 mb-10">

          <Pagination 
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={3}
            total={500}
            />
            </div>
        </div>
      </section>
    </>
  );
};

export default AllProducts;
