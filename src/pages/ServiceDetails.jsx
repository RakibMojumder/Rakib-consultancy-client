import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData().data;
  const { img, title, description, fee } = service;
  console.log(service);

  return (
    <div>
      <div className="service-img">
        <img src={img} alt="" />
      </div>
      <div className="service-details">
        <h1>{title}</h1>
        <p>
          <span className="font-semibold mr-1">Rakib's Consultancy</span>{" "}
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceDetails;
