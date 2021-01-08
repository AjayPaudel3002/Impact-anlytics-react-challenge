import React from "react";
import { useHistory } from "react-router-dom";
import Card from "./Card";

const CardView = ({users}) => {
  
  const history = useHistory();
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {users && users.length
            ? users.map((user) => {
                return (
                  <div
                    className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mt-3"
                    onClick={() => history.push(`/user/${user.id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <Card user={user} key={user.id} />
                  </div>
                );
              })
            : "No user Available"}
        </div>
      </div>
    </>
  );
};

export default CardView;
