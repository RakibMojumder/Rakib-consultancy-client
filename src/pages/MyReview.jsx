import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthProvider";
import useTitle from "../Hooks/useTitle";
import ReviewCart from "./ReviewCart";

const MyReview = () => {
  useTitle("My Review");
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("user-access-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut();
          toast.error("Something is wrong. Please log in again");
        }

        return res.json();
      })
      .then((data) => {
        if (data?.data) {
          setReviews(data.data);
        }
      });
  }, [user?.email, logOut]);

  return (
    <div className="my-20">
      <h1 className="text-2xl font-semibold text-center my-5 uppercase tracking-wider">
        You give{" "}
        <span className="text-green-400 text-3xl font-extrabold">
          {reviews.length}
        </span>{" "}
        reviews
      </h1>
      {reviews.map((review) => (
        <ReviewCart
          key={review._id}
          review={review}
          reviews={reviews}
          setReviews={setReviews}
        />
      ))}
    </div>
  );
};

export default MyReview;
