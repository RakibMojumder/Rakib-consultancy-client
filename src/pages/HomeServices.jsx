import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { PhotoProvider } from "react-photo-view";
import { Link } from "react-router-dom";
import ServiceCart from "./ServiceCart";
import "./styles/styles.css";

const HomeServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`https://rakib-consultancy-server.vercel.app/services?limit=3`)
      .then((res) => res.json())
      .then((data) => setServices(data.data));
  }, []);
  return (
    <div className="my-32">
      <h1 className="text-4xl text-center text-slate-800 mb-20 font-bold">
        Our Services
      </h1>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-12 lg:col-span-9 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <PhotoProvider>
            {services.map((service) => (
              <ServiceCart key={service._id} service={service} />
            ))}
          </PhotoProvider>
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-3 flex justify-center items-center mt-7 lg:mt-0">
          <Link
            className="hover-animate-btn px-7 py-2 shadow-lg text-sm uppercase font-semibold rounded-full relative hover:text-slate-50"
            to="/services"
          >
            see more{" "}
            <FontAwesomeIcon className="ml-2" icon={faArrowRightLong} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
