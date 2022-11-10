import React from "react";
import bannerImg from "../assets/banner/workplace-results-professional-report-accounting-during_1418-61.webp";

const Banner = () => {
  return (
    <div className="relative mt-10">
      <img
        src={bannerImg}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-60 md:h-[500px]">
        <div className="px-4 py-16 h-full mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-white flex justify-center items-center">
          <div className="w-[550px]">
            <h1 className="text-xl font-bold uppercase text-center">
              Welcome to{" "}
              <span className="text-4xl font-extrabold text-[#00F0B5] block">
                Rakib's Consultancy
              </span>
            </h1>
            <p className="text-center">
              Rakib's consultancy, based in Dhaka, Bangladesh focuses on
              representing clients with cases involving arbitration, business
              law, banking and finance, corporate finance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
