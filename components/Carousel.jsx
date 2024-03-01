import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../src/Caroussel.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "block",
        width: "20px",
        height: "30px",
        borderRadius: "10%",
        position: "absolute",
        top: "50%",
        right: "20px",
        transform: "translateY(-50%)",
        zIndex: "1",
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "block",
        width: "20px",
        height: "30px",
        borderRadius: "10%",
        position: "absolute",
        top: "50%",
        left: "-40px",
        transform: "translateY(-50%)",
        zIndex: "100",
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
}

function Carousel() {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: dots => (
      <div style={{ marginLeft: '-60px' }}> 
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true, 
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div style={{ marginTop: 80, marginLeft: 40 }}>
      <div className="slider-container">
        <Slider {...settings} className="custom-slider">
          <div className="Gazoil">
            <div
              className="text-gazoil"
              style={{
                color: "white",
                fontSize: 25,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              Gazoil
            </div>
          </div>
          <div className="Fuel2">
            <div
              className="text-fuel2"
              style={{
                color: "white",
                fontSize: 25,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              Fuel 2
            </div>
          </div>
          <div className="Lubrifiant">
            <div
              className="text-Lubrifiant"
              style={{
                color: "white",
                fontSize: 25,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              Lubrifiant
            </div>
          </div>
          <div className="Citerne">
            <div
              className="text-citerne"
              style={{
                color: "white",
                fontSize: 25,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              Citerne
            </div>
          </div>
          <div className="bElectrique">
            <div
              className="text-bElectrique"
              style={{
                color: "white",
                fontSize: 25,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              Borne Electrique
            </div>
          </div>
          <div className="CarteMM">
            <div
              className="text-carteMM"
              style={{
                color: "white",
                fontSize: 25,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              Carte MM
            </div>
          </div>
          <div className="prdHygiene">
            <div
              className="text-prdHygiene"
              style={{
                color: "white",
                fontSize: 25,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              Produit Hygiene
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
