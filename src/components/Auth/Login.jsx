import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email,password)
  };
  return (
    <div className="flex justify-center items-center p-9">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 border">
        <form onSubmit={handleLogIn} className="card-body">
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
            <label className="label">
              <Link to="/forget" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <button className="btn btn-neutral ">
            Login with Google <FcGoogle />
          </button>
        </form>

        <p className="pl-7">
          You Have Not Account Please ?{" "}
          <Link to={"/register"} className="text-red-600 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
