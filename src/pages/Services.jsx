import React, { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";
import HashLoader from "react-spinners/HashLoader";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <HashLoader size={150} color="#00F0B5" />
      </div>
    );
  }

  return (
    <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-20">
      {services.map((service) => (
        <ServiceCart key={service._id} service={service} />
      ))}
    </div>
  );
};

export default Services;
