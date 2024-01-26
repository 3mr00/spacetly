import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Header from "./Header";
import SliderHeader from "./SliderHeader";
import MidSection from "./MidSection";
import Slidermidsec from "./Slidermidsec";
import VideoSec from "./VideoSec";
import Startfree from "./Startfree";
import Phoneapp from "./Phoneapp";
import Package from "./Package";
import FeaturesHome from "./FeaturesHome";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="bg_header">
      <Navbar />
      <Header />
      <SliderHeader />
      <MidSection />
      <Slidermidsec />
      <VideoSec />
      <Startfree />
      <Phoneapp />
      <Package />
      <FeaturesHome />
      <Footer />
    </div>
  );
};

export default Home;
