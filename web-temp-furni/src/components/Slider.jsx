import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
function Slider() {
  return (
    <>
      <div className="testimonial-slider">
        <Swiper
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          autoplay={{
            delay: 2500,
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item">
              <div className="row justify-content-center">
                <div className="col-lg-8 mx-auto">
                  <div className="testimonial-block text-center">
                    <blockquote className="mb-5">
                      <p>
                        “Donec facilisis quam ut purus rutrum lobortis. Donec
                        vitae odio quis nisl dapibus malesuada. Nullam ac
                        aliquet velit. Aliquam vulputate velit imperdiet dolor
                        tempor tristique. Pellentesque habitant morbi tristique
                        senectus et netus et malesuada fames ac turpis egestas.
                        Integer convallis volutpat dui quis scelerisque.”
                      </p>
                    </blockquote>
                    <div className="author-info">
                      <div className="author-pic">
                        <img
                          src="images/person-1.png"
                          alt="Maria Jones"
                          className="img-fluid"
                        />
                      </div>
                      <h3 className="font-weight-bold">John Jones</h3>
                      <span className="position d-block mb-3">
                        CEO, Co-Founder, XYZ Inc.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <div className="row justify-content-center">
                <div className="col-lg-8 mx-auto">
                  <div className="testimonial-block text-center">
                    <blockquote className="mb-5">
                      <p>
                        “Donec facilisis quam ut purus rutrum lobortis. Donec
                        vitae odio quis nisl dapibus malesuada. Nullam ac
                        aliquet velit. Aliquam vulputate velit imperdiet dolor
                        tempor tristique. Pellentesque habitant morbi tristique
                        senectus et netus et malesuada fames ac turpis egestas.
                        Integer convallis volutpat dui quis scelerisque.”
                      </p>
                    </blockquote>
                    <div className="author-info">
                      <div className="author-pic">
                        <img
                          src="images/person-1.png"
                          alt="Maria Jones"
                          className="img-fluid"
                        />
                      </div>
                      <h3 className="font-weight-bold">John Jones</h3>
                      <span className="position d-block mb-3">
                        CEO, Co-Founder, XYZ Inc.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <div className="row justify-content-center">
                <div className="col-lg-8 mx-auto">
                  <div className="testimonial-block text-center">
                    <blockquote className="mb-5">
                      <p>
                        “Donec facilisis quam ut purus rutrum lobortis. Donec
                        vitae odio quis nisl dapibus malesuada. Nullam ac
                        aliquet velit. Aliquam vulputate velit imperdiet dolor
                        tempor tristique. Pellentesque habitant morbi tristique
                        senectus et netus et malesuada fames ac turpis egestas.
                        Integer convallis volutpat dui quis scelerisque.”
                      </p>
                    </blockquote>
                    <div className="author-info">
                      <div className="author-pic">
                        <img
                          src="images/person-1.png"
                          alt="Maria Jones"
                          className="img-fluid"
                        />
                      </div>
                      <h3 className="font-weight-bold">John Jones</h3>
                      <span className="position d-block mb-3">
                        CEO, Co-Founder, XYZ Inc.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Slider;
