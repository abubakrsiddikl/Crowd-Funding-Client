import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const MyDonation = () => {
  const { user } = useContext(AuthContext);
  const [donations, setDonations] = useState([]);
  const email = user?.email;
  console.log(email);
  useEffect(() => {
    fetch(`http://localhost:5000/myDonations?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-4xl">My Donation .jsx</h1>
    </div>
  );
};

export default MyDonation;
