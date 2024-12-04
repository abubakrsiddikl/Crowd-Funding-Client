import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const navLink = (
    <>
      <ul className=" lg:flex items-center justify-center gap-3">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/allCampaign">All Campaign</NavLink>
        </li>
        <li>
          <NavLink to="/addNewCampaign">Add New Campaign</NavLink>
        </li>
        <li>
          <NavLink to="/myCampaign">My Campaign</NavLink>
        </li>
        <li>
          <NavLink to="/myDonation">My Donations</NavLink>
        </li>
      </ul>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLink}
          </ul>
        </div>
        <a className=" text-xl">
          <img src={logo} className="w-20 h-20" alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end gap-3">
        <Link to="/login" className="btn btn-info">
          Login
        </Link>
        <Link to="/register" className="btn btn-neutral">
          Register
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
