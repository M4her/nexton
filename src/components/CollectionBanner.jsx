import React from "react";
import { Link } from "react-router";
import bannerContainer from "../assets/images/banner-container.png";

const CollectionBanner = () => {
  return (
    <>
      <section id="colletionBanner" className="mt-[140px] mb-[52px]">
        <div className="container">
          <div>
            <Link to="#">
              <img
                className="w-full"
                src={bannerContainer}
                alt="BannerContainer"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CollectionBanner;
