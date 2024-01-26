import React from "react";
import start from "../../../assets/images/start.svg";
import imgheader3 from "../../../assets/images/headerhome/imgheader3.png";
import support from "../../../assets/images/support.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Header = () => {
  return (
    <>
      <header
        style={{ paddingTop: "140px" }}
        className="ar d-flex flex-column align-items-center justify-content-center  container"
      >
        <div className="header_home  text-center align-items-center d-flex flex-column justify-content-center">
          <h1 className=" primary  fw-bolder ">
            <span className="font_en fs_h1"> SpaceChat –</span>
            <span className="font_ar fs_h1"> أفضل بديل لـ</span>
            <span className="font_en fs_h1"> ChatGPT </span>
          </h1>
          <p className=" primary font_header_p ">
            يعد <span className="font_en"> SpaceChat </span>
            بديلاً مجانياً متميزًا لـ
            <span className="font_en"> ChatGPT، </span>
            مع مجموعة من المميزات المبتكرة التي تجعله الخيار الأمثل لرواد
            الأعمال الذين يتطلعون إلى تحسين تجربة الدردشة وإنشاء المحتوى بطريقة
            فعالة ومتطورة.
          </p>

          <div className=" container pink mt-4">
            <div className="row  d-flex justify-content-center align-items-center">
              <div className="col-md-11">
                <div className="ar search">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="قم بإنشاء خطة محتوي لوسائل التواصل الاجتماعي لبراند ملابس مدتها 3 أشهر بهدف زيادة المبيعات..."
                  />
                  <button className="btn btn-primary d-flex justify-content-center align-items-center g-1">
                    إبدأ{" "}
                    <LazyLoadImage
                      alt={"hi"}
                      effect="blur"
                      src={start}
                      width={50}
                      height={50}
                      opacity="true"
                      placeholderSrc={start}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="shadow-sm button_header_home mt-5  ">
            خصم 60% إبدأ الأن{" "}
          </button>
        </div>
        <div className=" d-block flex-column  align-items-center">
          <span>
            <LazyLoadImage
              alt={"hi"}
              effect="blur"
              src={imgheader3}
              className="h-auto  w-100 "
              opacity="true"
              placeholderSrc={imgheader3}
            />
          </span>

          <span className=" d-flex justify-content-center">
            <LazyLoadImage
              alt={"hi"}
              effect="blur"
              src={support}
              className="h-auto  w-100 "
              opacity="true"
              placeholderSrc={support}
            />
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
