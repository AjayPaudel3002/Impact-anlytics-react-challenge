import React from "react";
import CardView from "./CardView";

const User = ({ users }) => {
  return (
    <>
      <div className="container mt-5">
        <CardView users={users} />
      </div>
    </>
  );
};

export default User;
