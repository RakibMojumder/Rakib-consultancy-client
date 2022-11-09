import React from "react";
import { toast } from "react-toastify";
import useTitle from "../Hooks/useTitle";

const AddService = () => {
  useTitle("Add Service");
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
      .then((data) => {
        console.log(data);
        toast.success("Successfully add a new service");
        form.reset();
      });
  };

  return (
    <div className="md:w-4/5 lg:w-3/5 min-h-screen mx-auto flex justify-center items-center my-10 md:my-20">
      <div className="w-full p-7 bg-green-100 rounded-2xl">
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
    </div>
  );
};

export default AddService;
