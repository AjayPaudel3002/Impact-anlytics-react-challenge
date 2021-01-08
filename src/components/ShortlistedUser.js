import React from "react";
import CardView from "./CardView";

const ShortlistedUser = ({ users }) => {
  return (
    <>
      <div className="container ">
        <CardView users={users} />
      </div>
    </>
  );
};

export default ShortlistedUser;
