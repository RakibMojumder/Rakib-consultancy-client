import { Avatar } from "flowbite-react";
import React, { useEffect } from "react";

const Review = ({ reviews, setReviews, id }) => {
  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data.data);
      });
  }, [setReviews, id]);

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
          <div className="user-information md:flex">
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
            </div>
          </div>
          <p className="mt-2 text-justify">{review?.review}</p>
        </div>
      ))}
    </div>
  );
};

export default Review;
