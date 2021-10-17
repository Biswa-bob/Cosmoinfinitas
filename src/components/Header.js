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

              {/* <div className="container"> */}
              {/* <div className="row">
                <div className="col-lg-6 justify-content-end">
                  <div className="btns">
                    <a
                      href="#book-a-table"
                      class="btn-book animated fadeInUp scrollto"
                    >
                      Get Started
                    </a>
                   
                  </div>
                  <div className="btn">
                    <a
                      href="#book-a-table"
                      class="btn-book animated fadeInUp scrollto"
                    >
                      Join Our Discord
                    </a>
                  </div>
                </div> */}
              {/* <div className="col-lg-6 justify-content-start" id="btn">
                  <div className="btns">
                    <a
                      href="#book-a-table"
                      class="btn-book animated fadeInUp scrollto"
                    >
                      Join Our Discord
                    </a>
                  </div>
                </div> */}
              {/* </div> */}
              {/* </div> */}
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
