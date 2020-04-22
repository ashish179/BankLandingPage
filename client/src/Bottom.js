import React, { Fragment } from "react";

function Bottom() {
  return (
    <Fragment>
      <div className="bottom">
        <h2 className="Bottom-heading"> Latest Articles </h2>
        <div class="container-fluid">
          <div class="row cards">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://images.pexels.com/photos/3759115/pexels-photo-3759115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">By Claire Robinson</h5>
                <p class="card-text">
                  Receive money in any currency with no fees The world is
                  getting smaller and we’re becoming more mobile. So why should
                  you be forced to only receive money in a single …
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://images.pexels.com/photos/3649240/pexels-photo-3649240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">By Wilson Hutton</h5>
                <p class="card-text">
                  Treat yourself without worrying about money Our simple
                  budgeting feature allows you to separate out your spending and
                  set realistic limits each month. That means you …
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://images.pexels.com/photos/164666/pexels-photo-164666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title"> By Wilson Hutton</h5>
                <p class="card-text">
                  Take your Easybank card wherever you go We want you to enjoy
                  your travels. This is why we don’t charge any fees on
                  purchases while you’re abroad. We’ll even show you …
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://images.pexels.com/photos/1660613/pexels-photo-1660613.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">By Claire Robinson</h5>
                <p class="card-text">
                  Our invite-only Beta accounts are now live! After a lot of
                  hard work by the whole team, we’re excited to launch our
                  closed beta. It’s easy to request an invite through the site
                  ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Bottom;
