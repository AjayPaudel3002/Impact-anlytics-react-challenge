import React from "react";
import { Link, useHistory } from "react-router-dom";

const Nav = ({ searchUser, setSearchUser, search }) => {
  const history = useHistory();
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand">
            <Link to={`/`} style={{ textDecoration: "none", color: "black" }}>
              <b>Impact Analytics</b>
            </Link>
          </a>
          <form className="d-flex pl-5" onSubmit={search}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchUser}
              onChange={(e) => {
                setSearchUser(e.target.value);
              }}
            />
            <button
              className="btn btn-outline-success ml-4"
              type="submit"
              onClick={search}
            >
              Search
            </button>
          </form>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto ">
              <li className="nav-item mr-5">
                <Link
                  to={`/shortlisted`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <b>Shortlisted</b>
                </Link>
              </li>
              <li className="nav-item mr-5">
                <Link
                  to={`/rejected`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <b>Rejected</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
