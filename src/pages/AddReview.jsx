import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const AddReview = ({ id }) => {
  const { user } = useContext(AuthContext);
  const handleAddReview = (e) => {
    e.preventDefault();
    const review = e.target.review.value;

    const reviewData = {
      service_id: id,
      name: user.displayName,
      email: user.email,
      img: user.photoURL,
      review: review,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="review-section mt-14">
      <h3 className="text-xl text-slate-700 font-semibold mb-3">
        Add a review
      </h3>
      <form onSubmit={handleAddReview}>
        <textarea
          className="rounded-lg border border-slate-300 focus:border-[#00F0B5] focus:ring-0"
          name="review"
          placeholder="Type here"
          cols="60"
          rows="3"
        ></textarea>
        <button
          type="submit"
          className="w-[150px] block py-2 mt-4 uppercase text-white text-sm font-bold bg-[#00F0B5] rounded-full shadow-md transition duration-700 hover:bg-white hover:text-[#00F0B5]"
        >
          Add review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
