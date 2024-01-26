import React from "react";
import chat1 from "../../../assets/images/homemidsec/chat1.png";
import chat2 from "../../../assets/images/homemidsec/chat2.png";
import chat3 from "../../../assets/images/homemidsec/chat3.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const VideoSec = () => {
  return (
    <section
      style={{ marginTop: "5rem" }}
      className=" ar d-flex flex-column container h-100 gap-5 "
    >
      <div className=" d-flex justify-content-center flex-wrap col-12 gap-lg-0 gap-5 ">
        <div className="col-lg-7 col-12 d-flex flex-column gap-5 ">
          <span>
            <button className="shadow-sm button_vid_home one d-block ">
              الخطوة الأولى
            </button>
          </span>

          <LazyLoadImage
            alt={"hi"}
            effect="blur"
            src={chat1}
            className="h-auto  w-75 "
            opacity="true"
            placeholderSrc={chat1}
          />

          <div>
            <p className=" fs-vid-h1 primary  fw-bolder ">
              مثال لمطالبات المستخدم:
            </p>
            <div className=" d-flex flex-wrap gap-3">
              <button className="shadow-sm button_vid_sec2 d-block ">
                ✍️ كتابة تدوينة حول...{" "}
              </button>
              <button className="shadow-sm button_vid_sec2 d-block ">
                📝 تلخيص النص التالي...{" "}
              </button>
              <button className="shadow-sm button_vid_sec2 d-block ">
                اكتب محتوى إعلانًا على الفيسبوك حول...{" "}
              </button>
              <button className="shadow-sm button_vid_sec2 d-block ">
                📕 ساعدني في كتابة قصة قصيرة عن...{" "}
              </button>
              <button className="shadow-sm button_vid_sec2 d-block ">
                💸 ما الذي يحفز العملاء على الشراء؟{" "}
              </button>
              <button className="shadow-sm button_vid_sec2 d-block ">
                💡 قم بإنشاء أفكار للعناوين الرئيسية حول...{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-12 d-flex video_div"></div>
      </div>
      <div className=" d-flex justify-content-center flex-wrap col-12 gap-lg-0 gap-5 ">
        <div className="col-lg-7 col-12 d-flex flex-column gap-5 ">
          <span>
            <button className="shadow-sm button_vid_home two d-block ">
              الخطوة الثانية
            </button>
          </span>

          <LazyLoadImage
            alt={"hi"}
            effect="blur"
            src={chat2}
            className="h-auto  w-75 "
            opacity="true"
            placeholderSrc={chat2}
          />

          <div>
            <p className=" fs-vid-h1 primary  fw-bolder ">
              أمثلة لردود المستخدم:{" "}
            </p>
            <div className=" d-flex flex-wrap gap-3">
              <button className="shadow-sm button_vid_sec2 d-block ">
                😀 أعد صياغة هذه الرسالة لتكون أكثر احترافية
              </button>
              <button className="shadow-sm button_vid_sec2 d-block ">
                اختصر هذه الفقرة إلى جملة واحدة{" "}
              </button>
              <button className="shadow-sm button_vid_sec2 d-block ">
                🤔 سبيس شات، ما رأيك في...{" "}
              </button>
              <button className="shadow-sm button_vid_sec2 d-block ">
                📝 أعد كتابة هذا البريد الإلكتروني ليكون أكثر وضوحا.{" "}
              </button>
              <button className="shadow-sm button_vid_sec2 d-block ">
                🎨 اقترح تحسينات لتصميم هذا الشعار لشركتي.{" "}
              </button>
              <button className="shadow-sm button_vid_sec2 d-block ">
                📑 قدم نصائح لإعداد تقرير فعّال وموجز.{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-12 d-flex video_div"></div>
      </div>
      <div className=" d-flex justify-content-center flex-wrap col-12 gap-lg-0 gap-5 ">
        <div className="col-lg-7 col-12 d-flex flex-column gap-5 ">
          <span>
            <button className="shadow-sm button_vid_home three d-block ">
              الخطوة الثالثة
            </button>
          </span>

          <LazyLoadImage
            alt={"hi"}
            effect="blur"
            src={chat3}
            className="h-auto  w-75 "
            opacity="true"
            placeholderSrc={chat3}
          />

          <div>
            <p className=" fs-vid-h1 primary  fw-bolder ">
              أمثلة لردود المستخدم:{" "}
            </p>
            <div className=" d-flex flex-wrap gap-3">
              <button className="shadow-sm button_vid_sec2 d-block ">
                توليد أفكار جديدة والحصول على أفكار إضافية{" "}
              </button>
              <button className="shadow-sm button_vid_sec2 d-block ">
                قم بتحديث المحتوى الخاص بك قبل النشر{" "}
              </button>
              <button className="shadow-sm button_vid_sec2 d-block ">
                قم بتوسيع نطاق المحتوى مع الحفاظ على الجودة العالية{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-12 d-flex video_div"></div>
      </div>
    </section>
  );
};

export default VideoSec;
