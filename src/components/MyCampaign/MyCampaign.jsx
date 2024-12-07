import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

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
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete user in database
        fetch(`http://localhost:5000/campaign/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your campaign has been deleted.",
                icon: "success",
              });
              const remaningUsers = myCampaign.filter((user) => user._id !== id);
              setMyCampaign(remaningUsers);
            }
          });
      }
    });
  };
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
                <Link
                  to={`/update/${campaign._id}`}
                  className="btn btn-sm btn-neutral mr-3"
                >
                  Update
                </Link>
                <Link
                  onClick={() => handleDelete(campaign._id)}
                  className="btn btn-sm btn-error btn-outline  text-xl text-red-600"
                >
                  <MdDeleteForever />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCampaign;
