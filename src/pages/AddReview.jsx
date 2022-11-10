import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthProvider";
import useTitle from "../Hooks/useTitle";

const AddReview = ({ reviews, setReviews, id }) => {
  useTitle("Add Review");
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
      userUid: user.uid,
      date: new Date().toLocaleTimeString(),
    };

    fetch("https://rakib-consultancy-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success("Successfully add a review");
          e.target.reset();
          const newReviews = data.data;
          setReviews([newReviews, ...reviews]);
        }
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
          className="h-20 md:h-32 w-80 md:w-[500px] rounded-lg border border-slate-300 focus:border-[#00F0B5] focus:ring-0"
          name="review"
          placeholder="Type here"
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
          Add review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
