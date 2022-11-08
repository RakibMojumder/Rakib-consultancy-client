import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const MyReview = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>This is my review page</h1>
    </div>
  );
};

export default MyReview;
