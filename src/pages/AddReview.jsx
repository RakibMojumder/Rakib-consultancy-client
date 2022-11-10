import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthProvider";
import useTitle from "../Hooks/useTitle";

const AddReview = ({ reviews, setReviews, id }) => {
  useTitle("Add Review");
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
          required
        ></textarea>
        <button
          type="submit"
          className="px-5 py-1 mt-2 block uppercase text-white text-sm font-bold bg-[#00F0B5] rounded-full shadow-md transition duration-700 hover:bg-white hover:text-[#00F0B5]"
        >
          Add review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
