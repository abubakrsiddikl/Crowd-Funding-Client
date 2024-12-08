import React, { useContext } from "react";
import { data, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";

const CampaignDetails = () => {
  const {user} = useContext(AuthContext)
  const campaign = useLoaderData();
  const {email, displayName} = user;
  const handleDonate = ()=>{
    const donations = {displayName, email};
    console.log(donations)
    fetch(`http://localhost:5000/myDonations`,{
      method: "POST",
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify(donations)
    })
    .then(res => res.json())
    .then(data => {console.log(data)})
  }
  return (
    <div>
      <div className="w-11/12 mx-auto my-10 border-4 border-base-300 rounded-2xl">
        <div className="card bg-base-200 ">
          <figure>
            <img
              src={campaign.image}
              alt={campaign.campaignTitle}
              className="w-full h-96"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-3xl font-bold">{campaign.campaignTitle}</h2>
            <p className="text-gray-600">{campaign.description}</p>
            <p className="text-lg font-semibold">Name : {campaign.name}</p>
            <p className="text-lg font-semibold">Email : {campaign.email}</p>
            <p className="text-lg font-semibold">
              Minimum Donation : ${campaign.amount}
            </p>
            <p className="text-lg font-semibold">Deadline : {campaign.date}</p>

            <div className="card-actions justify-end">
              <button onClick={handleDonate} className="btn btn-neutral">Donate</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
