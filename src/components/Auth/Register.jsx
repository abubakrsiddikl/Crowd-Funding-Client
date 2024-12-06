import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createNewUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // register new user
    createNewUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfile(result.user, { displayName: name, photoURL: photo });
        toast.success("Registration successfully.");
        navigate("/")
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-4">Register Now </h1>
      <div className="flex justify-center items-center p-9">
        <div className="card bg-base-100 w-full shrink-0 max-w-sm border">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo-URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter Profile Url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-12  btn-xs "
              >
                {showPassword ? <FaEyeSlash /> : <FaEye></FaEye>}
              </button>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <button className="btn btn-neutral ">
              Signup with Google <FcGoogle />
            </button>
          </form>

          <p className="p-3 pt-0">
            You have All ready Account Please ?{" "}
            <Link to="/login" className="text-red-500 underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
