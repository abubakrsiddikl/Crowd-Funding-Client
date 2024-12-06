import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const MyCampaign = () => {
  const { user } = useContext(AuthContext);
  const [myCampaign, setMyCampaign] = useState([]);
  const userEmail = user?.email;
  console.log(userEmail)
  useEffect(() => {
    fetch(`http://localhost:5000/myCampaign?email=${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-4xl">My Campaign.jsx </h1>
    </div>
  );
};

export default MyCampaign;
