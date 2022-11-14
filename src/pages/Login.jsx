import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../assets/img/6769264_60111-removebg-preview.png";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthProvider";
import HashLoader from "react-spinners/HashLoader";
import { toast } from "react-toastify";
import useTitle from "../Hooks/useTitle";

const Login = () => {
  useTitle("Log in");
  const { googleSignIn, gitHubSignIn, logIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  // use spinner when loading data
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

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
        toast.success("You successfully logged in");
        form.reset();

        fetch("https://rakib-consultancy-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: user.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("user-access-token", data.token);
            navigate(from, { replace: true });
          });
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
        toast.success("You successfully logged in");
        fetch("https://rakib-consultancy-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: user.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("user-access-token", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };

  // Github Log in
  const handleGithubLogIn = () => {
    gitHubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("You successfully logged in");
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
        <div className="grid items-center grid-cols-1 md:grid-cols-2 my-20 min-h-[500px]">
          <div className="py-8 md:py-0 flex flex-col justify-center items-center h-full bg-green-300">
            <img className="h-44 md:h-64" src={img} alt="" />
            <h1 className="text-3xl font-bold text-slate-800">
              Log In Your Account
            </h1>
            <p className="font-semibold mt-2">Connect with us again 🙂</p>
          </div>

          <div className="bg-green-100 h-full py-5 md:py-0 flex items-center">
            <div className="w-full px-4 md:px-10">
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
                <div className="input-box mb-1 w-full">
                  <input
                    className="input-field w-full focus:ring-0"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <button className="text-sm mb-6 hover:underline hover:text-[#25be98]">
                  Forget password?
                </button>

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
                  <div className="h-[1px] w-[23%] lg:w-[27%] bg-slate-400"></div>
                  <div className="text-xs lg:text-base">
                    Sign in with social account
                  </div>
                  <div className="h-[1px] w-[23%] lg:w-[27%] bg-slate-400"></div>
                </div>
                <div className="flex justify-center items-center mt-3">
                  <FaGoogle onClick={handleGoogleLogIn} className="text-3xl" />
                  <FaGithub
                    onClick={handleGithubLogIn}
                    className="text-3xl mx-3"
                  />
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
      )}
    </div>
  );
};

export default Login;
