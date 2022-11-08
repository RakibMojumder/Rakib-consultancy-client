import React, { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => setServices(data.data));
  }, []);

  return (
    <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-20">
      {services.map((service) => (
        <ServiceCart key={service._id} service={service} />
      ))}
    </div>
  );
};

export default Services;
