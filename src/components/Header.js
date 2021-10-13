import React from "react";

const Header = () => {
  return (
    <>
      <section id="hero" class="d-flex align-items-center">
        <div
          class="container position-relative text-center text-lg-start"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div class="row">
            <div class="col-lg-8">
              <h1>
                Welcome to <br />
                <span>CosmoInfinitas</span>
              </h1>
              <br />
              <h3>
                Create, Explore and Trade in the first ever
                <br /> virtual world owned by its users.
              </h3>

              {/* <div className="container"> */}
              <div className="row">
                <div className="col-6 justify-content-end">
                  <div class="btns">
                    <a
                      href="#book-a-table"
                      class="btn-book animated fadeInUp scrollto"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
                <div className="col-6 justify-content-start">
                  <div class="btns">
                    <a
                      href="#book-a-table"
                      class="btn-book animated fadeInUp scrollto"
                    >
                      Join Our Discord
                    </a>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
