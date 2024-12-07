import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Link } from "react-router-dom";

const MyCampaign = () => {
  const { user } = useContext(AuthContext);
  const [myCampaign, setMyCampaign] = useState([]);
  const userEmail = user?.email;
  useEffect(() => {
    fetch(`http://localhost:5000/myCampaign?email=${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setMyCampaign(data);
      });
  }, [userEmail]);
  return (
    <div className="w-full overflow-x-auto mt-6">
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
          {myCampaign.map((campaign, idx) => (
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
                <Link className="btn btn-sm btn-neutral">Update</Link>
                <Link className="btn btn-sm btn-error">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCampaign;
