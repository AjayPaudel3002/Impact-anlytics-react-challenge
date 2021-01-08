import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./User";
import UserDetails from "./UserDetails";
import ShortlistedUser from "./ShortlistedUser";
import RejectedUser from "./RejectedUser";

function App() {
  const [searchUser, setSearchUser] = useState([]);
  const [users, setUsers] = useState([]);
  const [shortlistedUser, setShortlistedUser] = useState([]);
  const [rejectedUser, setRejectedUser] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(
          `https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json`
        );
        const res = await response.json();
        
        if (res.length) {
          setUsers(res);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  const search = (e) => {
    e.preventDefault();
    const searchData = users.filter((user) => {
      return searchUser === user.name;
    });
    if (searchData) {
      setUsers(searchData);
    } else {
      setUsers([]);
    }
  };


  return (
    <Router>
      <Nav
        searchUser={searchUser}
        setSearchUser={setSearchUser}
        search={search}
      />
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => <User {...props} users={users} />}
        />
        <Route
          path="/user/:id"
          exact
          render={(props) => (
            <UserDetails
              {...props}
              users={users}
              setUsers={setUsers}
              setShortlistedUser={setShortlistedUser}
              setRejectedUser={setRejectedUser}
              shortlistedUser={shortlistedUser}
              rejectedUser={rejectedUser}
            />
          )}
        />
        <Route
          path="/shortlisted"
          exact
          render={(props) => (
            <ShortlistedUser {...props} users={shortlistedUser} />
          )}
        />
        <Route
          path="/rejected"
          exact
          render={(props) => <RejectedUser {...props} users={rejectedUser} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
