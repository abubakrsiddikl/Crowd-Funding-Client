import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const MyDonation = () => {
  const { user } = useContext(AuthContext);
  const [donations, setDonations] = useState([]);
  const userEmail = user?.email;
  console.log(userEmail);
  useEffect(() => {
    fetch(`http://localhost:5000/myDonations?email=${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setDonations(data);
      });
  }, []);
  // console.log(donations)
  const validDonator = donations.filter(
    (donator) => donator.email === userEmail
  );
  const singleDonator = donations.map((single) => single.campaign);
  console.log(singleDonator);
  return (
    <div className="grid gap-2 bg-white w-11/12 mx-auto">
      {singleDonator.map((single, idx) => (
        <div
          key={idx}
          className="card w-full bg-base-200 border border-black"
        >
          <div className="card-body">
            <h2 className="card-title">{single.campaignTitle}</h2>
            <p>
              <strong>Description:</strong> {single.description}
            </p>
            <p>
              <strong>Amount Donated:</strong> ${single.amount}
            </p>
            <p>
              <strong>Date:</strong> {single.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyDonation;
