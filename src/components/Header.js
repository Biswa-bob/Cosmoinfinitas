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
              <h3>An Infinity World of Entertainment</h3>

              <div id="container">
                <div>
                  <button
                    type="submit"
                    class="btn-book animated fadeInUp scrollto"
                  >
                    Get Started
                  </button>
                </div>
                <div>
                  <button
                    type="submit"
                    class="btn-book animated fadeInUp scrollto"
                  >
                    Join our discord
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
