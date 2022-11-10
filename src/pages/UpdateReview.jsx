import React from "react";
import { toast } from "react-toastify";

const UpdateReview = ({ review, reviews, setReviews, show, setShow }) => {
  console.log(review);
  const handleUpdateReview = (e) => {
    e.preventDefault();
    const message = e.target.review.value;

    const date = new Date().toLocaleTimeString();

    fetch(`https://rakib-consultancy-server.vercel.app/reviews/${review._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        review: message,
        date: date,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setShow(!show);
          const remaining = reviews.filter((rev) => rev._id !== review._id);
          const updated = reviews.find((rev) => rev._id === review._id);
          updated.review = message;
          updated.date = date;
          setReviews([updated, ...remaining]);
          toast.success("Successfully edit the review");
          e.target.reset();
        }
      });
  };

  return (
    <div className="mt-8 ">
      <form onSubmit={handleUpdateReview}>
        <textarea
          className="h-20 md:h-32 w-80 md:w-[500px] rounded-lg border border-slate-300 focus:border-[#00F0B5] focus:ring-0"
          name="review"
          placeholder="Edit your review"
          defaultValue={review.review ? review.review : ""}
          required
        ></textarea>
        <button
          type="submit"
          className="px-7 py-1 mt-2 block uppercase text-white text-sm font-bold bg-[#00F0B5] rounded-full shadow-md transition duration-700 hover:bg-white hover:text-[#00F0B5]"
        >
          Done
        </button>
      </form>
    </div>
  );
};

export default UpdateReview;
