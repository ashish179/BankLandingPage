import React, { Fragment } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
function Footer() {
  const navstyle = {
    color: "white",
  };
  return (
    <Fragment>
      <footer class="white-section" id="footer">
        <div class="container-fluid">
          <p className="footer-para">Developer Ashish Torane</p>
        </div>

        <p className="footer-para">follow us on</p>

        <div className="icons">
          <a style={navstyle} href="https://www.facebook.com/ashish.torane.9 ">
            {" "}
            <FacebookIcon />{" "}
          </a>
          <a style={navstyle} href=" ">
            {" "}
            <InstagramIcon />
          </a>
          <a style={navstyle} href=" ">
            {" "}
            <LinkedInIcon />
          </a>
          <a style={navstyle} href=" ">
            {" "}
            <TwitterIcon />
          </a>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;
