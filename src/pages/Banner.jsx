import { Carousel } from "flowbite-react";
import React from "react";
import imgOne from "../assets/slider/img-1.jpg";
import imgTwo from "../assets/slider/img-2.jpg";
import imgThree from "../assets/slider/img-3.jpg";
import imgFour from "../assets/slider/img-4.jpg";

const Banner = () => {
  return (
    <div className="h-56 sm:h-64 lg:h-[500px]">
      <Carousel slideInterval={5000}>
        <img src={imgOne} alt="..." />
        <img src={imgTwo} alt="..." />
        <img src={imgThree} alt="..." />
        <img src={imgFour} alt="..." />
      </Carousel>
    </div>
  );
};

export default Banner;
