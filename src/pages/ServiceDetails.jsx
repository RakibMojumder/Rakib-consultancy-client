import React, { useContext, useState } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useTitle from "../Hooks/useTitle";
import AddReview from "./AddReview";
import Review from "./Review";
import ReviewCart from "./ReviewCart";

const ServiceDetails = () => {
  useTitle("Service Details");
  const { user } = useContext(AuthContext);
  const service = useLoaderData().data;
  const location = useLocation();
  const [reviews, setReviews] = useState([]);
  const { img, title, description, _id } = service;
  console.log(service);

  return (
    <div className="grid grid-cols-12 my-20">
      <div className="col-span-2"></div>
      <div className="col-span-12 md:col-span-8">
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
        <div className="h-[1px] mt-20 bg-slate-500"></div>
        {user ? (
          <AddReview reviews={reviews} setReviews={setReviews} id={_id} />
        ) : (
          <div className="h-[300px] flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-base text-slate-700 font-bold uppercase">
                You are not logged in 🙂
              </h3>
              <h1 className="text-2xl font-bold text-slate-700 uppercase mb-3">
                You need to log in to add review
              </h1>
              <Link
                to="/login"
                state={{ from: location }}
                replace
                type="submit"
                className="px-14 py-2 uppercase text-white text-sm font-bold bg-[#00F0B5] rounded-full shadow-md transition duration-700 hover:bg-white hover:text-[#00F0B5] hover:border hover:border-[#00F0B5]"
              >
                Log in
              </Link>
            </div>
          </div>
        )}
        <div className="h-[1px] bg-slate-500"></div>
        <Review reviews={reviews} setReviews={setReviews} id={_id} />
      </div>
      <div className="col-span-2"></div>
    </div>
  );
};

export default ServiceDetails;
