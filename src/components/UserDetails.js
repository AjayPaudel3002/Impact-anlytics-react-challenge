import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";

const UserDetails = ({
  users,
  setUsers,
  setShortlistedUser,
  setRejectedUser,
  shortlistedUser,
  rejectedUser,
}) => {
  const [user, setUser] = useState([]);
  const params = useParams();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(
          `https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json`
        );
        const res = await response.json();

        if (res.length) {
          setUsers(res);
          const userData =
            res.length &&
            res.filter((item) => {
              return item.id == params.id;
            });

          if (userData.length) {
            setUser(userData);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (!users.length) {
      getUsers();
    } else {
      const userData =
        users.length &&
        users.filter((item) => {
          return item.id == params.id;
        });
      if (userData.length) {
        setUser(userData);
      }
    }
  }, [params.id]);

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-8 mt-3">
            {user && user.length && (
              <Card
                user={user[0]}
                button="true"
                setShortlistedUser={setShortlistedUser}
                setRejectedUser={setRejectedUser}
                shortlistedUser={shortlistedUser}
                rejectedUser={rejectedUser}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
