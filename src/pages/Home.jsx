import React from "react";
import useTitle from "../Hooks/useTitle";
import Banner from "./Banner";
import HomeServices from "./HomeServices";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner />
      <HomeServices />
    </div>
  );
};

export default Home;
