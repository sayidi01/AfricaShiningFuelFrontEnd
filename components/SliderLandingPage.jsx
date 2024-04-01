import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "../src/SliderLandingPage.css";
import { Typography, Button } from "@mui/material";

function SliderLandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide === 2) {
        sliderRef.current.slickGoTo(0);
      } else {
        sliderRef.current.slickNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    ref: sliderRef,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const navigate = useNavigate();
  return (
    <div>
      <Slider {...settings} className="slider-parent">
        <div className="slider-gazoil">
          <Typography
            sx={{
              fontFamily: "Montserrat",
              color: "#659a9a",
              fontWeight: "bold",
              textDecoration: "none !important",
              fontSize: { xs: 10, sm: 20 },
              marginTop: { xs: "1rem", sm: "5rem" },
              marginLeft: { xs: "1rem", sm: "3rem" },
            }}
          >
            La qualité supérieure du gazoil assure
            <br /> une performance optimale
          </Typography>
          <Button
            onClick={() => navigate("/gazoil")}
            sx={{
              borderRadius: "35px",
              textTransform: "none",
              fontSize: { xs: 15, sm: 18 },
              backgroundColor: "#659a9a",
              margin: "0 auto",
              color: "white",
              fontFamily: "Myriad Pro Condensed",
              marginTop: { xs: "1rem", sm: "2rem" },
              marginLeft: { xs: "0rem", sm: "7rem" },
              fontWeight: "bold",
            }}
          >
            En savoir plus
          </Button>
        </div>
        <Link to={'/Fuel2'}>
        <div className="slider-fuel">
        </div>

        </Link>

        <Link to={"/hydrogenevert"}>
          <div className="slider-hydrogene-vert"></div>
        </Link>
      </Slider>
    </div>
  );
}

export default SliderLandingPage;
