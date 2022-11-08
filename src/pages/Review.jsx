import { Avatar } from "flowbite-react";
import React, { useEffect, useState } from "react";

const Review = ({ id }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data.data);
      });
  }, [id]);

  return (
    <div className="my-20">
      {reviews.length > 0 ? (
        <>
          <h1 className="text-xl font-semibold">
            All reviews for this service
          </h1>
          <p className="text-lg text-slate-600 font-semibold mb-4">
            <span className="text-[#00F0B5] font-bold">{reviews.length}</span>{" "}
            reviews for this service
          </p>
        </>
      ) : (
        <h1 className="text-xl text-center font-semibold my-4">
          Here is no reviews for this service
        </h1>
      )}
      {reviews.map((review) => (
        <div
          key={review._id}
          className="mb-8 p-8 bg-green-50 border rounded-lg"
        >
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
          <p className="mt-2 text-justify">{review?.review}</p>
        </div>
      ))}
    </div>
  );
};

export default Review;
