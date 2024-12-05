import React from "react";
import Banner from "../Banner/Banner";
import { Outlet } from "react-router-dom";
import RunningCampaign from "./RunningCampaign";

const Home = () => {
  return (
    <div >
      <section className="w-11/12 mx-auto">
        <Banner></Banner>
      </section>
      <RunningCampaign></RunningCampaign>
    </div>
  );
};

export default Home;
