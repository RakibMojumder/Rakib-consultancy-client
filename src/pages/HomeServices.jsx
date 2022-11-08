import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCart from "./ServiceCart";
import "./styles/styles.css";

const HomeServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services?limit=3`)
      .then((res) => res.json())
      .then((data) => setServices(data.data));
  }, []);
  return (
    <div className="grid gap-7 grid-cols-12 my-20">
      <div className="col-span-10 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCart key={service._id} service={service} />
        ))}
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <Link
          className="hover-animate-btn px-7 py-2 shadow-lg text-sm uppercase font-semibold rounded-full relative hover:text-slate-50"
          to="/services"
        >
          see more <FontAwesomeIcon className="ml-2" icon={faArrowRightLong} />
        </Link>
      </div>
    </div>
  );
};

export default HomeServices;
