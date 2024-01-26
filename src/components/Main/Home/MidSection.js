import React from "react";
import Frame1 from "../../../assets/images/homemidsec/Frame1.png";
import Frame2 from "../../../assets/images/homemidsec/Frame2.png";
import Frame3 from "../../../assets/images/homemidsec/Frame3.png";
import Frame4 from "../../../assets/images/homemidsec/Frame4.png";
import Frame5 from "../../../assets/images/homemidsec/Frame5.png";
import Frame6 from "../../../assets/images/homemidsec/Frame6.png";
import Frame7 from "../../../assets/images/homemidsec/Frame7.png";
import Frame8 from "../../../assets/images/homemidsec/Frame8.png";
import Frame9 from "../../../assets/images/homemidsec/Frame9.png";

import { LazyLoadImage } from "react-lazy-load-image-component";

const MidSection = () => {
  const divsimg = [
    { id: 1, src: Frame1, alt: "Logo 1" },
    { id: 2, src: Frame2, alt: "Logo 2" },
    { id: 3, src: Frame3, alt: "Logo 3" },
    { id: 4, src: Frame4, alt: "Logo 4" },
    { id: 5, src: Frame5, alt: "Logo 5" },
    { id: 6, src: Frame6, alt: "Logo 6" },
    { id: 7, src: Frame7, alt: "Logo 7" },
    { id: 8, src: Frame8, alt: "Logo 8" },
    { id: 9, src: Frame9, alt: "Logo 9" },
  ];

  return (
    <div className="mt-5 d-flex align-items-center flex-column container">
      <p className=" fs-mid-h1 primary  fw-bolder ">
        المنصة العربية رقم 1 لاستخدام الذكاء الاصطناعي بفاعلية
      </p>
      <div className=" d-flex flex-wrap col-lg-12 col-md-12 col-sm-12 col-11 justify-content-center ">
        {divsimg.map((logo) => (
          <div key={logo.id} className=" div_mid_img">
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
  );
};

export default MidSection;
