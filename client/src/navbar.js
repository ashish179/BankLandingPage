import React from "react";
import { Link } from "react-router-dom";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

function Navbar() {
  const navstyle = {
    color: "white",
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <Link className="nav-heading" style={navstyle} to="/">
        <AccountBalanceIcon /> EasyBank{" "}
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <Link className="nav-routes" style={navstyle} to="/">
            <li class="nav-item active">Home</li>
          </Link>
          <Link className="nav-routes" style={navstyle} to="/">
            <li class="nav-item active">Features</li>
          </Link>
          <Link className="nav-routes" style={navstyle} to="/login">
            <li class="nav-item active">Register</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
