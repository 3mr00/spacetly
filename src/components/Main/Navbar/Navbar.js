import React, { useLayoutEffect, useState } from "react";
import "./navbar.css";
import logo from "../../../assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoClose } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
  const [expend, setexpend] = useState(false);
  const [bg, setBg] = useState("unset");

  const listenScrollEvent = () => {
    if (window.scrollY > 10) {
      setBg("scroll_nav");
    } else {
      setBg("unset");
    }
  };
  useLayoutEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <section className=" ftco-section z-2">
      <div className="container">
        <nav
          className={`${bg} bg_moblie_nav transition_nav ar navbar navbar-expand-xl ftco_navbar ftco-navbar-light`}
        >
          <div className="container">
            <Link to={"/"} className="navbar-brand">
              <LazyLoadImage
                alt={"hi"}
                effect="blur"
                src={logo}
                className="h-auto  w-75"
                opacity="true"
                placeholderSrc={logo}
              />
            </Link>
            <div className=" d-flex gap-2 order-xl-last order-first">
              <button className="shadow-sm button_nav_home d-block ">
                أبدأ مجانا
              </button>
              <button className="shadow-sm button_nav_home d-xl-block d-none">
                تسجيل دخول
              </button>
            </div>

            {expend ? (
              <IoClose
                className=" color_pink fs-1 button_toggle "
                onClick={() => setexpend(!expend)}
              />
            ) : (
              <HiMenuAlt2
                className="color_pink fs-1 button_toggle "
                onClick={() => setexpend(!expend)}
              />
            )}

            <div
              className={`${
                expend ? "d_flex" : "d_none"
              } navbar-collapse  nav_toggle `}
            >
              <ul className="me-lg-0 me-4 mt-xl-0 mt-4 navbar-nav ml-auto mr-md-3">
                <NavLink to={"/"} className="nav-item ">
                  <span className="nav-link">الرئيسية</span>
                </NavLink>
                <NavLink to={"/cc"} className="nav-item ">
                  <span className="nav-link">مميزاتنا</span>
                </NavLink>
                <NavLink to={"/cc"} className="nav-item ">
                  <span className="nav-link">حالات الاستخدام</span>
                </NavLink>
                <NavLink to={"/cc"} className="nav-item ">
                  <span className="nav-link">الباقات</span>
                </NavLink>
                <NavLink to={"/cc"} className="nav-item ">
                  <span className="nav-link">تواصل معنا</span>
                </NavLink>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
