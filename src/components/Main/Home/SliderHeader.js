import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider_header1 from "../../../assets/images/sliderHeader/slider_header1.svg";
import slider_header2 from "../../../assets/images/sliderHeader/slider_header2.svg";
import slider_header3 from "../../../assets/images/sliderHeader/slider_header3.svg";
import slider_header4 from "../../../assets/images/sliderHeader/slider_header4.svg";
import slider_header5 from "../../../assets/images/sliderHeader/slider_header5.svg";
import slider_header6 from "../../../assets/images/sliderHeader/slider_header6.svg";
import slider_header7 from "../../../assets/images/sliderHeader/slider_header7.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function SliderHeader() {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 7,
    // slidesToScroll: 1,

    autoplay: true,
    speed: 3500,
    autoplaySpeed: 5000, // Increase the autoplaySpeed to avoid quick transitions
    cssEase: "linear",
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const logos = [
    { id: 1, src: slider_header1, alt: "Logo 1" },
    { id: 2, src: slider_header2, alt: "Logo 2" },
    { id: 3, src: slider_header3, alt: "Logo 3" },
    { id: 4, src: slider_header4, alt: "Logo 4" },
    { id: 5, src: slider_header5, alt: "Logo 5" },
    { id: 6, src: slider_header6, alt: "Logo 6" },
    { id: 7, src: slider_header7, alt: "Logo 7" },
    // Add more logos as needed
  ];
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="slider mt-4">
      <Slider {...settings}>
        {duplicatedLogos.map((logo) => (
          <div key={logo.id} className="div_slider ">
            <LazyLoadImage
              alt={logo.alt}
              effect="blur"
              src={logo.src}
              className="w-75 h-auto "
              opacity="true"
              placeholderSrc={slider_header1}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
