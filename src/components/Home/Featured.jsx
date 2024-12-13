import React from "react";
import Rina from "../../assets/rina.jpeg"
import Mehmet from "../../assets/mehmet.jpeg"
const Featured = () => {
  return (
    <section className="featured-stories py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Featured Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="story bg-white shadow-lg rounded-lg p-6">
            <img
              src={Rina}
              alt="Story 1"
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Meet Rina</h3>
            <p>
              Rina, a mother of three, started her small business with the
              support from our campaign.
            </p>
          </div>
          <div className="story bg-white shadow-lg rounded-lg p-6">
            <img
              src={Mehmet}
              alt="Story 2"
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
            Meet Mehmet
            </h3>
            <p>
            Started her small business with the support from our campaign.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
