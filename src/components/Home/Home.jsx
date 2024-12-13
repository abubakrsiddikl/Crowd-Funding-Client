import React from "react";
import Banner from "../Banner/Banner";
import { Outlet } from "react-router-dom";
import RunningCampaign from "./RunningCampaign";
import Featured from "./Featured";
import Involved from "./Involved";

const Home = () => {
  return (
    <div id="dark">
      <section className="w-11/12 mx-auto">
        <Banner></Banner>
      </section>
      <RunningCampaign></RunningCampaign>
      <Featured></Featured>
      <Involved></Involved>
    </div>
  );
};

export default Home;
