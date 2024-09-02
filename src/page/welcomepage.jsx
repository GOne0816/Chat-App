import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { Navigate } from "react-router-dom";

export default function welcomepage({user}) {
  if (user) {
    return <Navigate to="/Home"></Navigate>
  }
  return (
    <div className="px-12 max-sm:px-4 h-dvh w-full absolute top-0 left-0 -z-10 overflow-hidden">
      <div className="flex justify-center items-center flex-col w-full h-[90%]">
        <h1 className=" max-sm:text-4xl text-6xl tracking-tighter font-extrabold max-sm:text-center max-sm:mb-8">Welcome to Quixy</h1>
        <p className="max-sm:px-4 max-sm:py-0 text-gray-500 max-sm:text-center text-center px-96 py-8">
        <span className="font-bold">Quixy</span> is the chat app that makes conversations quick, easy, and fun. With a modern design and intuitive features, <span className="font-bold">Quixy</span> is where connections happen effortlessly. Dive into seamless chats and experience a touch of quirky charm. Welcome to <span className="font-bold">Quixy</span>—where every chat sparks connection.
        </p>
        <div className="flex gap-8 mt-8">
          <NavLink to="Login" className="btn-AltDark">Login</NavLink>
          <NavLink to="Register" className="btn-Text ring-1 ring-gray-300">Register</NavLink>
        </div>
      </div>
      <footer className="bg-gray-100 bottom-0 left-0 py-4 absolute px-60 w-full flex justify-between items-center max-sm:px-8 ">
        <p className="text-sm text-gray-500 max-sm:text-[10px]">© 2024 Jag Jeevan Ricky. All rights reserved.</p>
        <div className="flex gap-8">
        <FaInstagram className="size-4" />
        <FaLinkedin className="size-4" />
        <FaGithub className="size-4" />
        </div>
      </footer>
    </div>
  );
}
