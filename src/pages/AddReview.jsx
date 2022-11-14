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
    <div className="review-section lg:w-[70%] lg:mx-auto my-14">
      <h3 className="text-xl font-semibold mb-3">Add a review</h3>

      <form onSubmit={handleAddReview}>
        <textarea
          className="h-20 md:h-32 w-80 md:w-full rounded-lg border border-slate-300 focus:border-[#00F0B5] focus:ring-0"
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
