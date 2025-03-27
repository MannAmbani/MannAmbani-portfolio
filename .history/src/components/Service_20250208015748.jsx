import { Icon } from "@iconify/react";
import React from "react";
import SectionHeading from "./SectionHeading";
import Ratings from "./Ratings";
import Slider from "react-slick";

export default function Service({ data }) {
  const { sectionHeading, allService } = data;

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
    adaptiveHeight: true,
  };

  

  return (
    <section className="section service-section" id="services">
      <div className="container">
        <SectionHeading miniTitle={sectionHeading.miniTitle} title={sectionHeading.title} />
        <div className="row gy-5">
          {/* <Slider {...settings} className="slider-gap-24"> */}
          {allService?.map((item, index) => (
            <div
              className="col-sm-6 col-lg-3"
              key={index}
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-delay={index * 100}
            >
              <div
                className="services-box"
                style={{ backgroundImage: `url(${item.imgUrl})`, width: "300px" }}
              >
                <div className="services-body">
                  <div className="icon">
                    <Icon icon={item.icon} />
                  </div>
                  <h5>{item.title}</h5>
                  <p>{item.subTitle}</p>
                  <div className="rating-wrap">
                    <Ratings ratings={item.ratings} />
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* </Slider> */}
        </div>
      </div>
    </section>
  );
}
