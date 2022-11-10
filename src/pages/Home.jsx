import { Timeline } from "flowbite-react";
import React from "react";
import useTitle from "../Hooks/useTitle";
import Banner from "./Banner";
import HomeServices from "./HomeServices";
import Stats from "./Stats";
import TimeLine from "./TimeLine";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner />
      <HomeServices />
      <TimeLine />
      <Stats />
    </div>
  );
};

export default Home;
