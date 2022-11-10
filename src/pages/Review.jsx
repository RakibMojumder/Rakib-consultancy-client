import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthProvider";
import { reviewDelete } from "../utilities/utils";
import ReviewCart from "./ReviewCart";
import UpdateReview from "./UpdateReview";

const Review = ({ reviews, setReviews, id }) => {
  const { user } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  useEffect(() => {
    fetch(`https://rakib-consultancy-server.vercel.app/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data.data);
      });
  }, [setReviews, id]);

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
    <div className="my-20">
      {reviews.length > 0 ? (
        <>
          <h1 className="text-xl font-semibold mb-4">
            All reviews for this service{" "}
            <span className="text-[#00F0B5] text-2xl font-bold">
              ({reviews.length})
            </span>
          </h1>
        </>
      ) : (
        <h1 className="text-2xl text-center font-semibold my-4">
          No reviews were added for this service
        </h1>
      )}
      {reviews.map((review) => (
        <div
          key={review._id}
          className="mb-8 p-8 bg-gray-100 border rounded-lg"
        >
          {/* <div className="user-information md:flex">
            <div className="user-img mb-2 md:mb-0 w-14 mr-4 items-center">
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
              {review.userUid === user.uid ? <p>show</p> : <p>hidden</p>}
            </div>
          </div> */}
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
              {user.uid === review.userUid ? (
                <div>
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
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="h-[1px] my-3 bg-slate-400"></div>

          <p className="mt-2 text-justify">{review?.review}</p>
          {
            <div
              className={`${
                show && user.uid === review.userUid ? "Block" : "hidden"
              }`}
            >
              <UpdateReview
                review={review}
                reviews={reviews}
                setReviews={setReviews}
                show={show}
                setShow={setShow}
              />
            </div>
          }
        </div>
      ))}
    </div>
  );
};

export default Review;
