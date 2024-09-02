import React from "react";
import { PiGitlabLogoSimpleFill } from "react-icons/pi";
import { Outlet, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="mx-60 my-4 max-sm:mx-8">
      <nav className="flex w-full justify-between items-center">
        <NavLink to="/">
          <PiGitlabLogoSimpleFill className="size-8" />
        </NavLink>
        <div className="gap-6 flex">
          <NavLink to="Login" className="btn-Text ring-1 ring-gray-300 ">
            Login
          </NavLink>
          <NavLink to="Register" className="btn-AltDark ">
            Register
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
