import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import ReviewCart from "./ReviewCart";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data.data);
      });
  }, [user?.email]);

  return (
    <div className="my-20">
      <h1 className="text-2xl font-semibold my-5 uppercase">
        You have give{" "}
        <span className="text-green-400 text-3xl font-extrabold">
          {reviews.length}
        </span>{" "}
        reviews
      </h1>
      {reviews.map((review) => (
        <ReviewCart key={review._id} review={review} />
      ))}
    </div>
  );
};

export default MyReview;
