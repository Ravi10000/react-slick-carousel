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
function LeftArrow({ className, style, onClick }) {
  return (
    <div
      className={className + " arrow"}
      style={{ ...style }}
      onClick={onClick}
    >
      <img src="/left.png" alt="" width="50px" />
    </div>
  );
}
function RightArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{ ...style, backgroundColor: "red" }}
      onClick={onClick}
    >
      <img src="/right.png" alt="" width="50px" />
    </div>
  );
}

function SimpleSlider() {
  const settings = {
    customPaging: function (i) {
      return <div className="dots"></div>;
    },
    // appendDots: (dots) => (
    //   <div
    //     // style={{
    //     //   backgroundColor: "#ddd",
    //     //   borderRadius: "10px",
    //     //   padding: "50px",
    //     //   opacity: 1
    //     // }}
    //   >
    //     <ul style={{ margin: "0px" }}> {dots} </ul>
    //   </div>
    // ),
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    // nextArrow: <RightArrow />,
    // prevArrow: <LeftArrow />,
    infinite: false,
    speed: 500,
    // indicator: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    rows: 2,
    // adaptiveHeight: true,
    // variableWidth: true,
    // swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          infinite: false,
          rows: 2,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          infinite: false,
          rows: 1,
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 500,
        settings: {
          rows: 1,
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
