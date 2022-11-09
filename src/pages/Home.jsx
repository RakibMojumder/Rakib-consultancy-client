import React from "react";
import useTitle from "../Hooks/useTitle";
import Banner from "./Banner";
import HomeServices from "./HomeServices";
import Stats from "./Stats";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner />
      <HomeServices />
      <Stats />
    </div>
  );
};

export default Home;
