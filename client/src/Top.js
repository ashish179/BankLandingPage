import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function Top() {
  const navstyle = {
    color: "white",
  };
  return (
    <Fragment>
      <div className=" top">
        <div class="row">
          <div class="col col-lg-6 ">
            <h2 className="top-heading">Next generation digital banking</h2>
            <p className="top-para">
              {" "}
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>

            <button
              type="button"
              class="btn btn-secondary btn-dark btn-lg button"
              src="/login"
            >
              <Link style={navstyle} to="/login">
                Apply here
              </Link>
            </button>
          </div>

          <div class="col col-lg-6 ">
            <img
              className="img-two"
              src="https://images.pexels.com/photos/2058152/pexels-photo-2058152.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Top;
