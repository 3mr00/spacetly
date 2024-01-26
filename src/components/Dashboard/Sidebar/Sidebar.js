import React from "react";
import "./sidebar.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import logodashboard from "../../../assets/images/logodashboard.svg";
import textlogodashboard from "../../../assets/images/textlogodashboard.svg";
import { NavLink, useLocation } from "react-router-dom";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { BsChatText } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const Sidebar = ({ expend, setexpend }) => {
  const { pathname } = useLocation();

  return (
    <>
      <span className=" w-100 h-25 bg-black"></span>

      <div
        className={`${
          expend ? "d_none" : " d_flex"
        } Sidebar   flex-column gap-2 col-xxl-2 col-xl-3 col-md-4 col-sm-6 col-9 sec_toggle
                  flex-column position-fixed h-100  bg-black `}
      >
        <IoClose
          className=" text-white fs-1 button_toggle margin_close"
          onClick={() => setexpend(!expend)}
        />
        <div className="d-flex flex-column gap-1 w-100">
          <div className="mt-4 d-flex flex-column  justify-content-center align-items-center gap-1 w-50 m-auto">
            <LazyLoadImage
              alt={"hi"}
              effect="blur"
              src={logodashboard}
              opacity="true"
              placeholderSrc={logodashboard}
            />
            <LazyLoadImage
              alt={"hi"}
              effect="blur"
              src={textlogodashboard}
              opacity="true"
              placeholderSrc={textlogodashboard}
            />
          </div>
          <ul className="ps-0 mt-5 gap-1  align-items-center d-flex flex-column justify-content-center ">
            <span
              className={`${
                pathname === "/" && "span_ul_sidebar"
              } span_lang w-100 d-flex justify-content-center`}
            >
              <NavLink
                to={"/"}
                className="li_sidebar d-flex  align-items-center gap-2"
              >
                <RxDashboard className="a_sidebar me-5" />
                <li className=" a_sidebar ">لوحة التحكم</li>
              </NavLink>
            </span>
            <span
              className={`${
                pathname === "/language" && "span_ul_sidebar"
              } span_lang w-100 d-flex justify-content-center`}
            >
              <NavLink
                to={"/language"}
                className="li_sidebar d-flex  align-items-center gap-2"
              >
                <FaWandMagicSparkles className="a_sidebar me-5" />
                <li className=" a_sidebar "> المدقق اللغوي</li>
              </NavLink>
            </span>
            <span
              className={`${
                pathname === "/" && "span_ul_sidebar"
              } span_lang w-100 d-flex justify-content-center`}
            >
              <NavLink
                to={"/"}
                className="li_sidebar d-flex  align-items-center gap-2"
              >
                <BsChatText className="a_sidebar me-5" />
                <li className=" a_sidebar ">ابدا محادثة جديدة</li>
              </NavLink>
            </span>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
