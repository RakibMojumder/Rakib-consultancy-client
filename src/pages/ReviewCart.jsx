import { Avatar } from "flowbite-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import UpdateReview from "./UpdateReview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { reviewDelete } from "../utilities/utils";

const ReviewCart = ({ review, reviews, setReviews }) => {
  const [show, setShow] = useState(false);

  const handleShowUpdateReview = () => {
    setShow(!show);
  };

  const handleReviewDelete = (id) => {
    const confirm = window.confirm("Are you sure want to delete this review");

    if (confirm) {
      reviewDelete(id, reviews, setReviews);
      toast.success("Successfully delete review");
    }
  };

  return (
    <div
      key={review._id}
      className="mb-8 p-5 md:p-8 lg:w-[60%] mx-auto bg-gray-100 border rounded-lg relative"
    >
      <div className="flex justify-between items-center">
        <div className="user-information md:flex">
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
          <p className="mb-2 text-center text-xs md:text-sm font-semibold md:text-end">
            Time: {review.date}
          </p>
          <div className="flex justify-end md:block md:text-end">
            <FontAwesomeIcon
              onClick={handleShowUpdateReview}
              className="text-xs px-2 py-1 rounded-md border border-slate-500 transition-all hover:bg-gray-300"
              icon={faPen}
              title="Edit"
            />
            <FontAwesomeIcon
              onClick={() => handleReviewDelete(review._id)}
              className="text-xs px-2 py-1 rounded-md border border-slate-500 transition-all hover:bg-gray-300 ml-3"
              icon={faTrash}
              title="Delete"
            />
          </div>
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
