import React from "react";
import "./footer.css";
import logo from "../../../assets/images/footerHome/Logo.png";
import join from "../../../assets/images/footerHome/join.png";
import start from "../../../assets/images/footerHome/start.png";
import button from "../../../assets/images/startfree/button.png";

import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="ar footer ">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-box  ">
                <div className="d-flex align-items-center justify-content-start">
                  <Link to={"/"}>
                    <LazyLoadImage
                      alt={"hi"}
                      effect="blur"
                      src={logo}
                      className="h-auto  w-75"
                      opacity="true"
                      placeholderSrc={logo}
                    />
                  </Link>
                </div>
                <LazyLoadImage
                  alt={"hi"}
                  effect="blur"
                  src={join}
                  className="h-auto  w-75 mt-5"
                  opacity="true"
                  placeholderSrc={join}
                />
                <LazyLoadImage
                  alt={"hi"}
                  effect="blur"
                  src={start}
                  className="h-auto  w-75 mt-4"
                  opacity="true"
                  placeholderSrc={start}
                />
                <div className="my-5">
                  <button
                    style={{ border: "1px" }}
                    className=" button_start_free d-flex justify-content-center gap-1 shadow-sm   d-block "
                  >
                    ابدأ الأن مجانا
                    <LazyLoadImage
                      alt={"hi"}
                      effect="blur"
                      src={button}
                      width={30}
                      height={30}
                      opacity="true"
                      placeholderSrc={button}
                    />
                  </button>
                </div>{" "}
                <div className="card-area mt-2">
                  <span>
                    <FaFacebookF className="iconsvg" />
                  </span>
                  <span>
                    <FaInstagram className="iconsvg" />
                  </span>
                  <span>
                    <FaLinkedinIn className="iconsvg" />
                  </span>
                  <span>
                    <FaTwitter className="iconsvg" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-box">
                <h4 className=" text-white">المميزات</h4>
                <ul>
                  <li>
                    <a href="#/" className=" fw-medium">
                      مدعوم من{" "}
                      <span className="font_en fw-lighte ">ChatGPT</span>
                    </a>
                  </li>
                  <li>
                    <a href="#/" className=" fw-medium">
                      مدعوم بـ <span className="font_en  ">GPT-4</span>
                    </a>
                  </li>
                  <li>
                    <a href="#/" className=" fw-medium">
                      تكامل مع جوجل <span className="font_en ">PaLM 2</span>
                    </a>
                  </li>
                  <li>
                    <a href="#/" className=" fw-medium">
                      التوافق عبر الأنظمة الأساسية
                    </a>
                  </li>
                  <li>
                    <a href="#/" className=" fw-medium">
                      سجل دقيق
                    </a>
                  </li>
                  <li>
                    <a href="#/" className=" fw-medium">
                      بحث في الوقت الفعلي
                    </a>
                  </li>
                  <li>
                    <a href="#/" className=" fw-medium">
                      التفاعل الصوتي
                    </a>
                  </li>
                  <li>
                    <a href="#/" className=" fw-medium">
                      ردود مخصصة
                    </a>
                  </li>
                  <li>
                    <a href="#/" className=" fw-medium">
                      متعدد اللغات
                    </a>
                  </li>
                  <li>
                    <a href="#/" className=" fw-medium">
                      تحليل المشاعر
                    </a>
                  </li>
                  <li>
                    <a href="#/" className=" fw-medium">
                      اكتشف المزيد
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-box">
                <h4 className=" text-white">الحلول:</h4>
                <ul>
                  <li>
                    <a href="#/">كتابة المقالات</a>
                  </li>
                  <li>
                    <a href="#/">كتابة محتوي السوشيال ميديا</a>
                  </li>
                  <li>
                    <a href="#/">تحسين محركات البحث</a>
                  </li>
                  <li>
                    <a href="#/"> استراتيجيات المحتوى</a>
                  </li>
                  <li>
                    <a href="#/">التسويق عبر البريد الإلكتروني</a>
                  </li>
                  <li>
                    <a href="#/"> اكتشف المزيد</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="single-box">
                <h4 className=" text-white">الدعم:</h4>
                <ul>
                  <li>
                    <a href="#/">تواصل معانا </a>
                  </li>
                  <li>
                    <a href="#/">الإبلاغ عن خطأ</a>
                  </li>
                  <li>
                    <a href="#/">الإبلاغ عن عطل</a>
                  </li>
                  <li>
                    <a href="#/">طلب ميزة جديدة</a>
                  </li>
                  <li>
                    <a href="#/">المدونة</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
