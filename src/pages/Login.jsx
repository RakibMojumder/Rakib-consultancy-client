import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/img/6769264_60111-removebg-preview.png";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <div className="grid items-center grid-cols-2 my-20 min-h-[500px]">
      <div className="flex flex-col justify-center items-center h-full bg-green-300">
        <img className="h-64" src={img} alt="" />
        <h1 className="text-3xl font-bold text-slate-800">
          Log In Your Account
        </h1>
        <p className="font-semibold mt-2">Connect with us again 🙂</p>
      </div>

      <div className="bg-green-100 h-full flex items-center">
        <div className="w-full px-10">
          <form>
            <div className="input-box mb-6 w-full">
              <input
                className="input-field w-full focus:ring-0"
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
              />
            </div>
            <div className="input-box mb-6 w-full">
              <input
                className="input-field w-full focus:ring-0"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="text-center">
              <button className="px-9 py-1 text-white bg-green-500">
                Log in
              </button>
            </div>
          </form>
          <div className="social-account mt-8 mb-4">
            <div className="flex justify-between items-center">
              <div className="h-[1px] w-[25%] bg-slate-700"></div>
              <div>Sign in with social account</div>
              <div className="h-[1px] w-[25%] bg-slate-700"></div>
            </div>
            <div className="flex justify-center items-center mt-3">
              <FaGoogle className="text-3xl" />
              <FaGithub className="text-3xl mx-3" />
              <FaFacebook className="text-3xl" />
            </div>
          </div>
          <p className="text-center">
            Don't have an account?{" "}
            <Link
              className="text-green-600 font-semibold hover:underline"
              to="/register"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
