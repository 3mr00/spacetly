import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PricingCard1 from "../../../assets/images/packageHome/PricingCard1.png";
import PricingCard2 from "../../../assets/images/packageHome/PricingCard2.png";
import PricingCard3 from "../../../assets/images/packageHome/PricingCard3.png";
import text from "../../../assets/images/packageHome/text.png";

const Package = () => {
  return (
    <div className="bg_package">
      <div className="mt-5 gap-5 container d-flex flex-column align-items-center  justify-content-center">
        <div className=" col-lg-9 col-12 ">
          <LazyLoadImage
            alt={"hi"}
            effect="blur"
            src={text}
            className="h-auto  w-100 mt-5 "
            opacity="true"
            placeholderSrc={text}
          />
        </div>
        <div className="mt-lg-3 mt-1 d-flex flex-wrap col-12 justify-content-center ">
          <a href="#/" className="div2_mid_img bg-image hover-zoom">
            <LazyLoadImage
              alt={"hi"}
              effect="blur"
              src={PricingCard1}
              className="h-auto  w-100 mt-lg-0 mt-1  "
              opacity="true"
              placeholderSrc={PricingCard1}
            />
          </a>
          <a href="#/" className="div2_mid_img bg-image hover-zoom">
            <LazyLoadImage
              alt={"hi"}
              effect="blur"
              src={PricingCard2}
              className="h-auto  w-100 mt-lg-0 mt-1 "
              opacity="true"
              placeholderSrc={PricingCard2}
            />
          </a>

          <a href="#/" className="div2_mid_img bg-image hover-zoom">
            <LazyLoadImage
              alt={"hi"}
              effect="blur"
              src={PricingCard3}
              className="h-auto  w-100 mt-1 "
              opacity="true"
              placeholderSrc={PricingCard3}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Package;
