import React, { useEffect } from "react";
import ReviewCart from "./ReviewCart";

const Review = ({ reviews, setReviews, id }) => {
  useEffect(() => {
    fetch(`https://rakib-consultancy-server.vercel.app/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => {
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
        <ReviewCart
          key={review._id}
          review={review}
          setReviews={setReviews}
          reviews={reviews}
        />
      ))}
    </div>
  );
};

export default Review;
