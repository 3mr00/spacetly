import React from "react";
import Apple from "../../../assets/images/phoneapp/Apple.png";
import Google from "../../../assets/images/phoneapp/Google.png";
import phones from "../../../assets/images/phoneapp/phones.png";
import text1 from "../../../assets/images/phoneapp/text1.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Phoneapp = () => {
  return (
    <div className="ar mt-5 container ">
      <div className=" bg_phone pe-lg-5 px-4  container container d-flex justify-content-lg-between justify-content-center">
        <div className=" d-flex flex-column justify-content-center p-lg-0 p-3 col-lg-5 col-12 ">
          <LazyLoadImage
            alt={"hi"}
            effect="blur"
            src={text1}
            className="h-auto  w-100 mt-lg-5 mt-2 "
            opacity="true"
            placeholderSrc={text1}
          />
          <p className="  text-fs mt-lg-3 mt-3  ">
            يوفر التطبيق واجهة مستخدم مميزه للوصول إلى{" "}
            <span className="font_en">ChatGPT</span> و{" "}
            <span className="font_en"> GPT-4 </span> و{" "}
            <span className="font_en">Google</span>
            <span className="font_en"> PaLM 2 </span> دون أي حدود للاستخدام
            اليومي، كل ذلك بسعر مناسب مع عضوية واحدة.
          </p>
          <div className="mt-lg-1 mt-5 d-flex gap-2 justify-content-lg-start justify-content-center">
            <a href="#/">
              <LazyLoadImage
                alt={"hi"}
                effect="blur"
                src={Apple}
                className="h-auto  w-100 mt-lg-5"
                opacity="true"
                placeholderSrc={Apple}
              />
            </a>
            <a href="#/">
              <LazyLoadImage
                alt={"hi"}
                effect="blur"
                src={Google}
                className="h-auto  w-100 mt-lg-5 "
                opacity="true"
                placeholderSrc={Google}
              />
            </a>
          </div>
        </div>
        <div
          className=" col-lg-7 d-lg-block d-none col-12 "
          style={{ marginTop: "-15%" }}
        >
          <LazyLoadImage
            alt={"hi"}
            effect="blur"
            src={phones}
            className="h-auto  w-100  "
            opacity="true"
            placeholderSrc={phones}
          />
        </div>
      </div>
    </div>
  );
};

export default Phoneapp;
