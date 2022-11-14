import { Avatar } from "flowbite-react";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import UpdateReview from "./UpdateReview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { reviewDelete } from "../utilities/utils";
import { AuthContext } from "../contexts/AuthProvider";

const ReviewCart = ({ review, reviews, setReviews }) => {
  const { user } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleShowUpdateReview = () => {
    setShow(!show);
  };

  const handleDeleteReview = (id) => {
    reviewDelete(id, reviews, setReviews);
    toast.success("Successfully delete the review");
  };

  const handleShowDeleteModal = () => {
    setShowModal(!showModal);
    // }
  };

  return (
    <div
      key={review._id}
      className="mb-8 p-5 md:p-8 mx-auto bg-gray-50 border border-slate-400 rounded-lg relative"
    >
      <div className="flex justify-between items-center relative">
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

          {user?.uid === review.userUid ? (
            <div className="flex justify-end md:block md:text-end">
              <FontAwesomeIcon
                onClick={handleShowUpdateReview}
                className="text-xs px-2 py-1 rounded-md border border-slate-500 hover:bg-gray-300"
                icon={faPen}
                title="Edit"
              />
              <FontAwesomeIcon
                onClick={() => handleShowDeleteModal(review._id)}
                className="text-xs px-2 py-1 rounded-md border border-slate-500 transition-all hover:bg-gray-300 ml-3"
                icon={faTrash}
                title="Delete"
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="h-[1px] bg-slate-400 mt-5 mb-3"></div>
      <p className={`mt-2 text-justify ${show ? "hidden" : "block"}`}>
        {review?.review}
      </p>

      <div className={`${show ? "Block" : "hidden"}`}>
        <UpdateReview
          review={review}
          reviews={reviews}
          setReviews={setReviews}
          show={show}
          setShow={setShow}
        />
      </div>
      <div
        className={`text-center w-[60%] h-[200px] px-5 rounded-xl flex justify-center items-center bg-gray-800 absolute -top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 ${
          showModal ? "block" : "hidden"
        }`}
      >
        <div>
          <h3 className="mb-5 text-base font-normal text-gray-100 dark:text-gray-400">
            Are you sure you want to delete this review?
          </h3>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => handleDeleteReview(review._id)}
              className="bg-red-500 px-5 py-1 rounded-md text-white"
            >
              Yes, I'm sure
            </button>
            <button
              onClick={() => setShowModal(!showModal)}
              className="bg-gray-100 px-5 py-1 rounded-md"
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCart;
