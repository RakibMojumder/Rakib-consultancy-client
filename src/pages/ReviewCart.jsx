import { Avatar } from "flowbite-react";
import React from "react";

const ReviewCart = ({ review }) => {
  return (
    <div key={review._id} className="mb-8 p-8 bg-gray-100 border rounded-lg">
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
          <button className="px-5 py-1 text-sm uppercase bg-green-400 text-white rounded-full mr-4">
            Update
          </button>
          <button className="px-5 py-1 text-sm uppercase bg-red-400 text-white rounded-full">
            Delete
          </button>
        </div>
      </div>
      <div className="h-[1px] bg-slate-400 mt-5 mb-3"></div>
      <p className="mt-2 text-justify">{review?.review}</p>
    </div>
  );
};

export default ReviewCart;
