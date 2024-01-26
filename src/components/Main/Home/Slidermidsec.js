import React from "react";
import textrmid from "../../../assets/images/homemidsec/textrmid.png";
import Group1 from "../../../assets/images/homemidsec/Group1.png";
import Group2 from "../../../assets/images/homemidsec/Group2.png";
import Group3 from "../../../assets/images/homemidsec/Group3.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Slidermidsec = () => {
  const divs2img = [
    { id: 1, src: Group1, alt: "Group1" },
    { id: 2, src: Group2, alt: "Group2" },
    { id: 3, src: Group3, alt: "Group3" },
  ];

  return (
    <div className="bg_midsec ">
      <div className=" container d-flex flex-column align-items-center  justify-content-center">
        <span className=" col-lg-9 col-12 ">
          <LazyLoadImage
            alt={"hi"}
            effect="blur"
            src={textrmid}
            className="h-auto  w-100 mt-5 "
            opacity="true"
            placeholderSrc={textrmid}
          />
        </span>

        <div className="mt-5 d-flex flex-wrap col-12 justify-content-center ">
          {divs2img.map((logo) => (
            <div key={logo.id} className=" div2_mid_img">
              <LazyLoadImage
                alt={logo.alt}
                effect="blur"
                src={logo.src}
                className="h-auto  w-100 "
                opacity="true"
                placeholderSrc={logo.src}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slidermidsec;
