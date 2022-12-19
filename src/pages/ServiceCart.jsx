import React from "react";
import { Link } from "react-router-dom";
import "./styles/styles.css";
import { PhotoView } from "react-photo-view";

const ServiceCart = ({ service }) => {
  const { _id, img, title, fee, description } = service;
  return (
    <div className="service-cart h-[390px] md:h-[450px] lg:h-[410px] rounded-md shadow-md bg-green-50 relative">
      <PhotoView src={img}>
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-44"
        />
      </PhotoView>
      <div className="flex flex-col justify-between p-3">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold tracking-wide">{title}</h2>
          <p className="">
            Fee:{" "}
            <span className="text-[#00F0B5] font-bold text-lg">${fee}</span>
          </p>
          <p className="text-base">
            <span className="font-semibold mr-1">Rakib's Consultancy</span>
            {description.length > 65
              ? description.slice(0, 65) + "..."
              : description}
          </p>
        </div>
      </div>
      <div className="absolute bottom-5 w-full text-center">
        <Link
          to={`/services/${_id}`}
          className="px-5 py-1 uppercase text-white text-sm font-semibold bg-[#00F0B5] rounded-full shadow-md transition duration-700 hover:bg-white hover:text-[#00F0B5]"
        >
          see details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCart;
