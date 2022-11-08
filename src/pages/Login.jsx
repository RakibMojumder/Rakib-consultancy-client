import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../assets/img/6769264_60111-removebg-preview.png";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthProvider";

const Login = () => {
  const { googleSignIn, logIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };

  // Google Log in
  const handleGoogleLogIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };

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
          <form onSubmit={handleSubmit}>
            <div className="input-box mb-6 w-full">
              <input
                className="input-field w-full focus:ring-0"
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                required
              />
            </div>
            <div className="input-box mb-6 w-full">
              <input
                className="input-field w-full focus:ring-0"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>

            {error && <p className="text-red-500 my-4">{error}</p>}

            <div className="text-center">
              <button
                type="submit"
                className="w-[150px] py-2 uppercase text-white text-sm font-bold bg-[#00F0B5] rounded-full shadow-md transition duration-700 hover:bg-white hover:text-[#00F0B5]"
              >
                Log in
              </button>
            </div>
          </form>
          <div className="social-account mt-8 mb-4">
            <div className="flex justify-between items-center">
              <div className="h-[1px] w-[27%] bg-slate-400"></div>
              <div>Sign in with social account</div>
              <div className="h-[1px] w-[27%] bg-slate-400"></div>
            </div>
            <div className="flex justify-center items-center mt-3">
              <FaGoogle onClick={handleGoogleLogIn} className="text-3xl" />
              <FaGithub className="text-3xl mx-3" />
              <FaFacebook className="text-3xl" />
            </div>
          </div>
          <p className="text-center">
            Don't have an account?{" "}
            <Link
              className="text-[#25be98] font-semibold hover:underline"
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
