import React from "react";
import { Link } from "react-router-dom";
import "./styles/styles.css";

const ServiceCart = ({ service }) => {
  const { _id, img, title, fee, description } = service;
  return (
    <div className="service-cart h-[428px] rounded-md shadow-md bg-green-50 relative">
      <img
        src={img}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-44"
      />
      <div className="flex flex-col justify-between p-3">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold tracking-wide">{title}</h2>
          <p className="">
            Price:{" "}
            <span className="text-[#00F0B5] font-bold text-lg">${fee}</span>
          </p>
          <p>
            <span className="font-semibold mr-1">Rakib's Consultancy</span>
            {description.length > 75
              ? description.slice(0, 75) + "..."
              : description}
          </p>
        </div>
      </div>
      <div className="absolute bottom-5 w-full text-center">
        <Link
          to={`/services/${_id}`}
          className="px-5 py-1 uppercase text-[#00F0B5] text-sm font-semibold bg-white rounded-full shadow-md transition duration-700 hover:bg-[#00F0B5] hover:text-white"
        >
          see details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCart;
