import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import def from "../../../assets/images/featuresHome/def.png";
import people from "../../../assets/images/featuresHome/people.png";
import text1 from "../../../assets/images/featuresHome/text1.png";
import text2 from "../../../assets/images/featuresHome/text2.png";
import button from "../../../assets/images/startfree/button.png";
import FAQ from "./FAQ";

const FeaturesHome = () => {
  return (
    <div className="bg_FeaturesHome">
      <div className="mt-5 gap-5 container d-flex flex-column align-items-center  justify-content-center">
        <div className=" col-lg-9 col-12 ">
          <LazyLoadImage
            alt={"hi"}
            effect="blur"
            src={def}
            className="h-auto  w-100 mt-5 "
            opacity="true"
            placeholderSrc={def}
          />
        </div>
        <div className=" col-12">
          <FAQ />
        </div>
        <div className=" d-flex flex-column align-items-center  justify-content-center  col-12 ">
          <div className="col-lg-2 col-12 d-flex flex-column align-items-center  justify-content-center">
            <LazyLoadImage
              alt={"hi"}
              effect="blur"
              src={people}
              className="h-auto  w-100 mt-5 "
              opacity="true"
              placeholderSrc={people}
            />
          </div>
          <div className="col-lg-9 col-12">
            <LazyLoadImage
              alt={"hi"}
              effect="blur"
              src={text1}
              className="h-auto  w-100 mt-5 "
              opacity="true"
              placeholderSrc={text1}
            />
            <LazyLoadImage
              alt={"hi"}
              effect="blur"
              src={text2}
              className="h-auto  w-100 mt-5 "
              opacity="true"
              placeholderSrc={text2}
            />
          </div>
          <div className="col-lg-9 col-12 d-flex justify-content-center mt-5 ">
            <span>
              <button
                style={{ border: "1px" }}
                className=" button_start_free d-flex justify-content-center gap-1 shadow-sm mb-5   d-block "
              >
                <LazyLoadImage
                  alt={"hi"}
                  effect="blur"
                  src={button}
                  width={30}
                  height={30}
                  opacity="true"
                  placeholderSrc={button}
                />
                ابدأ الأن مجانا
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesHome;
