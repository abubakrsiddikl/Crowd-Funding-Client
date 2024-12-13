import React from "react";
import { Link } from "react-router-dom";

const Involved = () => {
  return (
    <section className="get-involved py-10 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
        <p className="mb-6">
          Be a part of our journey! Your small actions can bring a big change.
          Here's how you can help:
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/allCampaign" className="btn btn-primary">Donate Now</Link>
          <button className="btn btn-success">Volunteer with Us</button>
          <button className="btn btn-outline btn-primary">
            Share on Social Media
          </button>
        </div>
      </div>
    </section>
  );
};

export default Involved;
