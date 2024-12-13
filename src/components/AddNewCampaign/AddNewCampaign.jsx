import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Auth/AuthProvider";

const AddNewCampaign = () => {
  const {user} = useContext(AuthContext);
  const [campaignType, setCampaignType] = useState("");
  const userEmail = user?.email;
  const userName = user?.displayName;
  console.log(user)
  // console.log({userEmail,userName})
  const handleAdd = (e) => {
    e.preventDefault();

    // Collecting form data
    const form = new FormData(e.target);
    const image = form.get("image");
    const campaignTitle = form.get("campaign");
    const description = form.get("description");
    const amount = form.get("amount");
    const date = form.get("date");
    const email = form.get("email");
    const name = form.get("name");
    const newCampaign = {
      image,
      campaignTitle,
      description,
      amount,
      date,
      email,
      name,
    };
    // post data to database
    fetch("https://assignment-server-10-cyan.vercel.app/allCampaign", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Campaign added successfully.")
          // console.log(data);
        }
      });
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="card w-full shrink-0">
        <form onSubmit={handleAdd} className="card-body bg-base-200">
          {/* row 1 */}
          <div className="flex justify-center items-center gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Enter image URL"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Campaign Title</span>
              </label>
              <input
                type="text"
                name="campaign"
                placeholder="Enter Campaign Title"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* row 2 */}
          <div className="flex justify-center items-center gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Campaign Type</span>
              </label>
              <select
                className="select select-bordered w-60"
                value={campaignType}
                onChange={(e) => setCampaignType(e.target.value)}
                required
              >
                <option disabled value="">
                  Select Campaign Type
                </option>
                <option>Personal Issue</option>
                <option>Startup</option>
                <option>Business</option>
                <option>Creative Ideas</option>
                <option>Others</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Enter Description"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* row 3 */}
          <div className="flex justify-center items-center gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Minimum Donation Amount</span>
              </label>
              <input
                type="number"
                name="amount"
                placeholder="Enter Amount"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <input
                type="date"
                name="date"
                placeholder="Campaign Deadline"
                className="input input-bordered w-60"
                required
              />
            </div>
          </div>

          {/* row 4 */}
          <div className="flex justify-center items-center gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={userEmail}
                placeholder="Enter Email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={userName}
                placeholder="Enter Name"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* btn div*/}
          <div className="form-control mt-6 flex justify-center items-center">
            <button type="submit" className="btn w-[180px] btn-neutral">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewCampaign;
