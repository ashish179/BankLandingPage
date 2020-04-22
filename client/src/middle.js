import React, { Fragment } from "react";

function Middle() {
  return (
    <Fragment>
      <div className="middle">
        <h2 className="Middle-heading"> Why choose Easybank? </h2>

        <div class="container-fluid">
          <div className="row cards">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title"> Online Banking</h5>
                <p class="card-text">
                  Our modern web and mobile applications allow you to keep track
                  of your finances wherever you are in the world.
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
              <img
                src=" https://images.pexels.com/photos/36104/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Simple Budgeting</h5>
                <p class="card-text">
                  See exactly where your money goes each month. Receive
                  notifications when you’re close to hitting your limits.
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://images.pexels.com/photos/318820/pexels-photo-318820.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Fast Onboarding</h5>
                <p class="card-text">
                  We don’t do branches. Open your account in minutes online and
                  start taking control of your finances right away.
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://images.pexels.com/photos/45111/pexels-photo-45111.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title"> Open API</h5>
                <p class="card-text">
                  Manage your savings, investments, pension, and much more from
                  one account. Tracking your money has never been easier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Middle;
