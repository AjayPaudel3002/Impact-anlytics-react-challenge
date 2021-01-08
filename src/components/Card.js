import React from "react";
import { useHistory } from "react-router-dom";

const Card = ({
  user,
  button,
  setShortlistedUser,
  setRejectedUser,
  shortlistedUser,
  rejectedUser,
}) => {
  const history = useHistory();

  const handleShortlist = () => {
    const newUser =
      rejectedUser &&
      rejectedUser.filter((item) => {
        return item.id !== user.id;
      });
    if (newUser) {
      setRejectedUser(newUser);
    }
  };

  const handleRejection = () => {
    const newUser =
      shortlistedUser &&
      shortlistedUser.filter((item) => {
        return item.id !== user.id;
      });
    if (newUser) {
      setShortlistedUser(newUser);
    }
  };
  return (
    <>
      <div className="card shadow-lg p-3 mb-5 bg-white rounded">
        <div style={{ display: "flex" }}>
          <div className="img-square-wrapper">
            <img
              className=""
              src={user.Image}
              style={{ height: "100%", width: "140px", maxHeight: "140px" }}
              alt="user"
            />
          </div>
          <div className="card-body" style={{ height: "140px" }}>
            <h4
              style={{ fontFamily: "Ropa Sans, sans-serif" }}
              className="card-title"
            >
              {user.name}
            </h4>
            <p
              style={{ fontFamily: "Livvic, sans-serif" }}
              className="card-text"
            >
              {user.id}
            </p>
            {button && (
              <div className="d d-flex">
                <button
                  className="btn btn-primary "
                  onClick={() => {
                    setShortlistedUser((prevState) => {
                      const isAvailable =
                        prevState &&
                        prevState.length &&
                        prevState.find((item) => item.id === user.id);
                      if (!isAvailable) {
                        return [...prevState, user];
                      }
                      return [...prevState];
                    });
                    handleShortlist();
                    history.push("/");
                  }}
                >
                  ShortList
                </button>
                <button
                  className="btn btn-primary ml-2"
                  onClick={() => {
                    setRejectedUser((prevState) => {
                      const isAvailable =
                        prevState &&
                        prevState.length &&
                        prevState.find((item) => item.id === user.id);
                      if (!isAvailable) {
                        return [...prevState, user];
                      }
                      return [...prevState];
                    });
                    handleRejection();
                    history.push("/");
                  }}
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
