// import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";
import DealCard from "./components/deal-card/deal-card";
import dealList from "./deal-list";
function App() {
  return (
    <div className="App">
      <SimpleSlider />
    </div>
  );
}
function SimpleSlider() {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  const settings = {
    customPaging: function (i) {
      return (
        // <img src="/latest.png" width="10px" />
        <div className="dots"></div>
      );
    },
    dots: true,
    // dotsClass: "slick-dots slick-thumb",
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    rows: 2,
    // adaptiveHeight: true,
    // variableWidth: true,
    // swipeToSlide: true,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     rows: 1,
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      {
        breakpoint: 600,
        settings: {
          rows: 1,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container-container">
      <div className="slider-container">
        <Slider {...settings}>
          {dealList?.map(({ id, imgUrl, title, details }) => (
            <div className="card-container">
              <div className="deal-card-container">
                <DealCard
                  id={id}
                  imgUrl={imgUrl}
                  title={title}
                  details={details}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
export default App;
