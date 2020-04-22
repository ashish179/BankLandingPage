import React, { Fragment } from "react";

function Slide() {
  return (
    <Fragment>
      <section class="colored-section" id="testimonials">
        <div
          id="testimonial-carousel"
          class="carousel slide"
          data-interval="1000"
        >
          <div class="carousel-inner">
            <div class="carousel-item active container-fluid">
              <h2 class="testimonial-text">
                Banking can be defined as the business activity of accepting and
                safeguarding money owned by other individuals and entities, and
                then lending out this money in order to earn a profit.
              </h2>
              <img
                class="testimonial-image"
                src="https://images.pexels.com/photos/618613/pexels-photo-618613.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="dog-profile"
              />
              <em>Pebbles, New York</em>
            </div>
            <div class="carousel-item container-fluid">
              <h2 class="testimonial-text">
                Unit banking refers to a bank that is a single, usually small
                bank that provides financial services to its local community.
              </h2>
              <img
                class="testimonial-image"
                src="https://images.pexels.com/photos/164636/pexels-photo-164636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="lady-profile"
              />
              <em>RBI, india</em>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#testimonial-carousel"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a
            class="carousel-control-next"
            href="#testimonial-carousel"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
      </section>
    </Fragment>
  );
}

export default Slide;
