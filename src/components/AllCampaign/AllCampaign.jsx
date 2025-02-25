import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";

const AllCampaign = () => {
  const loadedCampaigns = useLoaderData();
  const [campaigns, setCampaigns] = useState(loadedCampaigns);
  const handleSortAsc = () => {
    const sortedCampaigns = [...campaigns]; 
    sortedCampaigns.sort((a, b) => a.amount - b.amount);
    setCampaigns(sortedCampaigns); 
    toast.success("Sorted Sucessfull .")
  };
  return (
    <div className="w-full overflow-x-auto mt-6">
      <button className="btn btn-neutral mb-6 ml-2" onClick={handleSortAsc}>
        Sort By Min Donation
      </button>
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">#</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Campaign Title
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Organizer
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Deadline
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Min Donation
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{idx + 1}</td>
              <td className="border border-gray-300 px-4 py-2">
                {campaign.campaignTitle}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {campaign.name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {campaign.date}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ${campaign.amount}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <Link
                  to={`/campaign/${campaign._id}`}
                  className="btn btn-sm btn-neutral"
                >
                  See More
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllCampaign;
