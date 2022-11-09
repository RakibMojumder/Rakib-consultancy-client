import { Avatar } from "flowbite-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import UpdateReview from "./UpdateReview";

const ReviewCart = ({ review, reviews, setReviews }) => {
  const [show, setShow] = useState(false);

  const handleShowUpdateReview = () => {
    setShow(!show);
  };

  const handleReviewDelete = (id) => {
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const remaining = reviews.filter((rev) => rev._id !== id);
          setReviews(remaining);
          toast.success("Successfully delete review");
        }
      });
  };

  return (
    <div
      key={review._id}
      className="mb-8 p-8 bg-gray-100 border rounded-lg relative"
    >
      <div className="flex justify-between items-center">
        <div className="user-information flex">
          <div className="user-img w-14 mr-4 items-center">
            {review?.img ? (
              <img
                className="border h-14 rounded-full"
                src={review.img}
                alt=""
              />
            ) : (
              <Avatar rounded={true} />
            )}
          </div>
          <div className="review-information">
            <h2 className="font-bold">{review?.name}</h2>
            <p>{review.email}</p>
          </div>
        </div>
        <div className="update-review-section">
          <p className="mb-2 text-end">Time: {review.date}</p>
          <button
            onClick={handleShowUpdateReview}
            className="px-5 py-1 text-sm uppercase bg-green-400 text-white rounded-full mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => handleReviewDelete(review._id)}
            className="px-5 py-1 text-sm uppercase bg-red-400 text-white rounded-full"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="h-[1px] bg-slate-400 mt-5 mb-3"></div>
      <p className="mt-2 text-justify">{review?.review}</p>

      <div className={`${show ? "Block" : "hidden"}`}>
        <UpdateReview
          review={review}
          reviews={reviews}
          setReviews={setReviews}
          show={show}
          setShow={setShow}
        />
      </div>
    </div>
  );
};

export default ReviewCart;
