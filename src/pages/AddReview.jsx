import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const AddReview = ({ id }) => {
  const { user } = useContext(AuthContext);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isReadOnly, setIsReadOnly] = useState(true);

  useEffect(() => {
    if (user) {
      setIsDisabled(false);
      setIsReadOnly(false);
    } else {
      setIsDisabled(true);
      setIsReadOnly(true);
    }
  }, [user]);

  const handleAddReview = (e) => {
    e.preventDefault();
    const review = e.target.review.value;

    const reviewData = {
      service_id: id,
      name: user.displayName,
      email: user.email,
      img: user.photoURL,
      review: review,
      date: new Date().toLocaleTimeString(),
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
    <div className="review-section my-14">
      {user ? (
        <h3 className="text-xl text-slate-700 font-semibold mb-3">
          Add a review
        </h3>
      ) : (
        <h2 className="uppercase text-xs mb-2">
          Please log in to add a review{" "}
          <span className="text-2xl font-semibold text-red-500">*</span>
        </h2>
      )}

      <form onSubmit={handleAddReview}>
        <textarea
          className="rounded-lg border border-slate-300 focus:border-[#00F0B5] focus:ring-0"
          name="review"
          placeholder="Type here"
          cols="60"
          rows="3"
          readOnly={isReadOnly}
        ></textarea>
        <button
          type="submit"
          disabled={isDisabled}
          className={`w-[150px] block py-2 mt-4 uppercase text-sm font-bold rounded-full shadow-md text-slate-500 ${
            isDisabled
              ? "bg-[#00F0B5]"
              : "text-white bg-[#00F0B5] transition duration-700 hover:bg-white hover:text-[#00F0B5]"
          }`}
        >
          {isDisabled ? "Disabled" : "Add review"}
        </button>
      </form>
    </div>
  );
};

export default AddReview;
