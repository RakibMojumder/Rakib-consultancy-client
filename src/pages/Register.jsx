import React, { useContext, useEffect, useId, useState } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../assets/img/6769264_60111-removebg-preview.png";
import { AuthContext } from "../contexts/AuthProvider";
import HashLoader from "react-spinners/HashLoader";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, googleSignIn, gitHubSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // set loading
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const displayName = `${form.fname.vlaue} ${form.lname.value}`;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setError("Your confirm password dose not match with password");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        toast.success("Successfully register your account");
        form.reset();
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        toast.success("Successfully register your account");
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };

  // Github log in
  const handleGithubLogIn = () => {
    gitHubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully register your account");
      })
      .catch((e) => {
        console.log(e);
        setError(e.message);
      });
  };

  return (
    <div>
      {loading ? (
        <div className="min-h-screen flex justify-center items-center">
          <HashLoader size={150} color="#00F0B5" />
        </div>
      ) : (
        <div className="grid items-center grid-cols-2 my-20 lg:min-h-[530px]">
          <div className="flex flex-col justify-center items-center h-full bg-green-300">
            <img className="h-64" src={img} alt="" />
            <h1 className="text-3xl font-bold text-slate-800">
              Lets Connect With Us
            </h1>
            <p className="font-semibold mt-2">
              It should only take you a minute to connect 🙂
            </p>
          </div>

          <div className="bg-green-100 h-full flex items-center">
            <div className="w-full px-10">
              <form onSubmit={handleSubmit}>
                <div className="flex justify-between mb-5">
                  <div className="input-box w-[46%]">
                    <input
                      className="input-field w-full focus:ring-0"
                      type="text"
                      name="fname"
                      placeholder="First Name"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="input-box w-[46%]">
                    <input
                      className="input-field w-full focus:ring-0"
                      type="text"
                      name="lname"
                      placeholder="Last Name"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className="input-box mb-5 w-full">
                  <input
                    className="input-field w-full focus:ring-0"
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="input-box mb-5 w-full">
                  <input
                    className="input-field w-full focus:ring-0"
                    type="text"
                    name="photoURL"
                    placeholder="photoURL"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="input-box mb-5 w-full">
                  <input
                    className="input-field w-full focus:ring-0"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="input-box mb-5 w-full">
                  <input
                    className="input-field w-full focus:ring-0"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    required
                  />
                </div>

                {error && <p className="mb-5 text-red-500">{error}</p>}

                <div className="text-center">
                  <button
                    type="submit"
                    className="w-[170px] py-2 uppercase text-white text-sm font-bold bg-[#00F0B5] rounded-full shadow-md transition duration-700 hover:bg-white hover:text-[#00F0B5]"
                  >
                    Register
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
                  <FaGoogle onClick={handleGoogleSignIn} className="text-3xl" />
                  <FaGithub
                    onClick={handleGithubLogIn}
                    className="text-3xl mx-3"
                  />
                  <FaFacebook className="text-3xl" />
                </div>
              </div>
              <p className="text-center">
                Already have an account?{" "}
                <Link
                  className="text-[#25be98] font-semibold hover:underline"
                  to="/login"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
