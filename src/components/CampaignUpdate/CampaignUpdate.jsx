import React, { useState } from "react";
import { Zoom } from "react-awesome-reveal";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const CampaignUpdate = () => {
  const [campaignType, setCampaignType] = useState("");
  const loadedCampaigns = useLoaderData();
  const { email, name, _id, image, campaignTitle, description, amount, date } =
    loadedCampaigns;
  //   console.log(loadedCampaigns);
  const handleUpdate = (e) => {
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
    const updatedCampaign = {
      image,
      campaignTitle,
      description,
      amount,
      date,
      email,
      name,
    };
    // post data to database
    fetch(`https://assignment-server-10-cyan.vercel.app/campaign/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount == 1) {
          toast.success("Campaign update successfully.");
          // console.log(data);
        }
      });
  };
  return (
    <div className="w-11/12 mx-auto">
      <div className="card w-full shrink-0">
        <form onSubmit={handleUpdate} className="card-body bg-base-200">
          <Zoom>
            <h1 className="text-center text-3xl font-bold">
              Update Your Campaign
            </h1>
          </Zoom>
          {/* row 1 */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                name="image"
                defaultValue={image}
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
                defaultValue={campaignTitle}
                placeholder="Enter Campaign Title"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* row 2 */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
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
                defaultValue={description}
                placeholder="Enter Description"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* row 3 */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Minimum Donation Amount</span>
              </label>
              <input
                type="number"
                name="amount"
                defaultValue={amount}
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
                defaultValue={date}
                placeholder="Campaign Deadline"
                className="input input-bordered w-60"
                required
              />
            </div>
          </div>

          {/* row 4 */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={email}
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
                placeholder="Enter Name"
                value={name}
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* btn div*/}
          <div className="form-control mt-6 flex justify-center items-center">
            <button type="submit" className="btn w-[180px] btn-neutral">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignUpdate;
