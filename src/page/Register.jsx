import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { Navigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

export const Register = ({ user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  
  const onRegister = (e) => {
    e.preventDefault();
    const userName = e.target[0].value
    
    if (!email || !password) {
      return toast.error(`Error: Please fill the form.`);
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user, displayName);
      })
      .catch((err) => {
        const errCode = err.code;
        const errMessage = err.message;
        toast.error(`Error: ${errCode}`);
        console.log(errCode, errMessage);
      });
      return userName;
  };
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  if (user) {
    return <Navigate to="/Home"></Navigate>;
  }
  return (
    <div className="w-full h-dvh flex justify-center items-center -z-10  absolute top-0 left-0">
      <div className="max-w-md w-11/12 h-[580px] bg-gray-100 rounded-xl p-12">
        <form onSubmit={onRegister}>
          <h1 className="text-3xl font-extrabold tracking-tighter">
            Create an account
          </h1>
          <p className="tracking-tight text-gray-500 mt-2">
            Enter your details below to get started.
          </p>
          <div className="flex flex-col my-4 gap-2">
            {/* Name */}
            <div className="flex flex-col">
              <label className="font-bold m-1" htmlFor="email">
                Name
              </label>
              <input
                className="p-2 px-4 rounded-lg"
                type="name"
                name="name"
                id="name"
                placeholder="Jag Jeevan Ricky"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="font-bold m-1" htmlFor="email">
                Email
              </label>
              <input
                className="p-2 px-4 rounded-lg"
                type="email"
                name="email"
                id="email"
                placeholder="j@example.com"
                onChange={handleEmailChange}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <div className="flex justify-between items-center m-1">
                <label className="font-bold" htmlFor="email">
                  Password
                </label>
              </div>
              <input
                className="p-2 px-4 rounded-lg"
                type="password"
                name="password"
                id="password"
                onChange={handlePasswordChange}
              />
            </div>

            <div className="flex justify-center items-center mt-4">
              <button className="btn-AltDark capitalize w-full">
                Register
              </button>
            </div>
          </div>
        </form>
        <div>
          <div className="flex items-center justify-center gap-2">
            <div className=" bg-gray-300 w-full h-0.5" />
            <div>
              <h1 className="text-gray-300">OR</h1>
            </div>
            <div className=" bg-gray-300 w-full h-0.5" />
          </div>
          <div className="flex justify-center items-center gap-12 mt-4">
            <button className="btn-Text bg-white ring-1 ring-gray-300 capitalize">
              Google
            </button>
            <button className="btn-Text bg-white ring-1 ring-gray-300 capitalize">
              Git Hub
            </button>
          </div>
        </div>
        <p className="text-center text-sm mt-6">
          Have an account?{" "}
          <span className="underline">
            <a href="login">Log In here</a>
          </span>
        </p>
      </div>
      <Toaster richColors />
    </div>
  );
};
