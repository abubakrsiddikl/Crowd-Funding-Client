import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RunningCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  useEffect(() => {
    fetch("https://assignment-server-10-cyan.vercel.app/allCampaign")
      .then((res) => res.json())
      .then((data) => {
        const homeCampaign = data.slice(0, 6);
        setCampaigns(homeCampaign);
      });
  }, []);

  return (
    <div className="bg-base-300 py-4">
      <h1 className="text-3xl font-bold text-center mt-5 mb-3">
        Our Running Campaign
      </h1>

      <div className="grid lg:grid-cols-3 gap-3 w-11/12 mx-auto">
        {campaigns.map((campaign, idx) => (
          <div key={idx} className="card bg-base-100 shadow-xl w-full">
            <figure className="px-5 pt-5">
              <img
                src={campaign.image}
                alt={campaign.campaignTitle}
                className="rounded-xl w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary">
                {campaign.campaignTitle}
              </h2>

              <div className="mt-3">
                <p className="font-semibold">
                  Organizer:{" "}
                  <span className="text-gray-700">{campaign.name}</span>
                </p>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-sm text-gray-600">
                    Deadline:
                  </p>
                  <p className="text-gray-700">{campaign.date}</p>
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-600">
                    Minimum Donation:
                  </p>
                  <p className="text-gray-700">${campaign.amount}</p>
                </div>
              </div>
              <div className="card-actions justify-end mt-4">
                <Link
                  to={`/campaign/${campaign._id}`}
                  className="btn btn-neutral btn-sm"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunningCampaign;
