import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../assets/error/error-img.webp";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <img className="h-80" src={errorImg} alt="" />
      <Link
        to="/"
        className="w-[200px] py-2 text-center mt-10 uppercase text-white text-sm font-bold bg-[#00F0B5] rounded-full shadow-md transition duration-700 hover:bg-white hover:text-[#00F0B5]"
      >
        Back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
