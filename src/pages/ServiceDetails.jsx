import React from "react";
import { useLoaderData } from "react-router-dom";
import AddReview from "./AddReview";
import Review from "./Review";

const ServiceDetails = () => {
  const service = useLoaderData().data;
  const { img, title, description, _id } = service;
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
        <AddReview id={_id} />
        <div className="h-[2px] mt-20 bg-slate-500"></div>

        <Review id={_id} />
      </div>
      <div className="col-span-2"></div>
    </div>
  );
};

export default ServiceDetails;
