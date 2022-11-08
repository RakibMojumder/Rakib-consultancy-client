import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const AddService = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const service = {
      title: form.title.value,
      fee: form.fee.value,
      photoURL: form.photoURL.value,
      ratings: form.ratings.value,
      description: form.description.value,
    };

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="w-3/5 min-h-screen mx-auto flex justify-center items-center">
      {user && user.email ? (
        <div className="w-full p-7 bg-green-100">
          <h1 className="text-center text-3xl font-bold text-slate-700 mt-6 mb-14 uppercase">
            Add New Service
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="input-box mb-5 w-full">
              <input
                className="input-field w-full focus:ring-0"
                type="text"
                name="title"
                placeholder="Title"
                autoComplete="off"
                required
              />
            </div>
            <div className="input-box mb-5 w-full">
              <input
                className="input-field w-full focus:ring-0"
                type="text"
                name="fee"
                placeholder="Fee"
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
                type="text"
                name="ratings"
                placeholder="Ratings"
                autoComplete="off"
                required
              />
            </div>
            <div className="input-box mb-5 w-full">
              <textarea
                className="text-area-field focus:ring-0"
                name="description"
                id=""
                placeholder="Type here description"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-[200px] py-2 uppercase text-white text-sm font-bold bg-[#00F0B5] rounded-full shadow-md transition duration-700 hover:bg-white hover:text-[#00F0B5]"
              >
                Add service
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="text-center">
          <h3 className="text-xl text-slate-700 mb-2 font-bold uppercase">
            oppss!! <br /> you are not logged in 🙂
          </h3>
          <h1 className="text-4xl font-bold text-slate-700 uppercase mb-5">
            You need to log in to add service
          </h1>
          <Link
            to="/login"
            state={{ from: location }}
            replace
            type="submit"
            className="px-14 py-2 uppercase text-white text-sm font-bold bg-[#00F0B5] rounded-full shadow-md transition duration-700 hover:bg-white hover:text-[#00F0B5] hover:border hover:border-[#00F0B5]"
          >
            Log in
          </Link>
        </div>
      )}
    </div>
  );
};

export default AddService;
