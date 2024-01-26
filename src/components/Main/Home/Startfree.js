import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import text from "../../../assets/images/startfree/text.png";
import button from "../../../assets/images/startfree/button.png";
import Frame from "../../../assets/images/startfree/Frame.png";

const Startfree = () => {
  return (
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
      <div>
        <div className="col-lg-12 col-12 d-flex flex-column gap-5 ">
          <span>
            <button className=" button_start_free d-flex justify-content-center gap-1 shadow-sm   d-block ">
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
      <div>
        <LazyLoadImage
          alt={"hi"}
          effect="blur"
          src={Frame}
          className="h-auto  w-100 mt-5 "
          opacity="true"
          placeholderSrc={Frame}
        />
      </div>
    </div>
  );
};

export default Startfree;
