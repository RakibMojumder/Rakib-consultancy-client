import React from "react";
import { useLoaderData } from "react-router-dom";
import Review from "./Review";

const ServiceDetails = () => {
  const service = useLoaderData().data;
  const { img, title, description, fee } = service;
  console.log(service);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2"></div>
      <div className="col-span-8">
        <div className="service-img">
          <img className="w-full h-[330px]" src={img} alt="" />
        </div>
        <div className="service-details">
          <h1 className="text-2xl my-3">{title}</h1>
          <p className="text-justify">
            <span className="font-semibold mr-1">Rakib's Consultancy</span>{" "}
            {description}
          </p>
        </div>

        <div className="h-[2px] mt-20 bg-slate-500"></div>

        <div className="review-section mt-14">
          <h3 className="text-xl text-slate-700 font-semibold mb-3">
            Add a review
          </h3>
          <div className="">
            <textarea
              className="rounded-lg border border-slate-300 focus:border-[#00F0B5] focus:ring-0"
              name=""
              placeholder="Type here"
              cols="60"
              rows="3"
            ></textarea>
            <button
              type="submit"
              className="w-[150px] block py-2 mt-4 uppercase text-white text-sm font-bold bg-[#00F0B5] rounded-full shadow-md transition duration-700 hover:bg-white hover:text-[#00F0B5]"
            >
              Add review
            </button>
          </div>
        </div>

        <div className="h-[2px] mt-20 bg-slate-500"></div>

        <Review />
      </div>
      <div className="col-span-2"></div>
    </div>
  );
};

export default ServiceDetails;
