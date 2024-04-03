import React from "react";
import Slider from "react-slick";
import "../src/sliderLIVRAISON.css";
import { Box } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { Typography } from "antd";

function SliderNosServices() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Box
      className="slider-wrapper"
      sx={{ marginTop: { xs: "5rem", sm: "8rem" } }}
    >
      <div className="slider-container">
        <Slider {...settings}>
          <Link className="no-underline-link" to={"/livraison"}>
            <Box
              className="livraison"
              sx={{ position: "relative" }}
            >
              <Typography 
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  color: "white",
                  position: "absolute",
                  bottom: 80,
                  right: 0,
                }}

              >
                The{" "}
                <span style={{ fontWeight: "bold", color: "#659a9a" }}>
                  TFC card
                </span>{" "}
                enables you to refuel
                <br /> economically at up to 4,600 petrol stations.
                <br /> Our network covers{" "}
                <span style={{ fontWeight: "bold", color: "#659a9a" }}>
                  {" "}
                  18 European countries{" "}
                </span>
                <br /> and continues to expand.
              </Typography>
            </Box>
          </Link>
          <NavLink to={"/cartecarburant"}>
            <div className="carte-carburant-toute-marque-ASF">
              <h3></h3>
            </div>
          </NavLink>
          <div className="abonnement-telepage">
            <h3></h3>
          </div>
        </Slider>
      </div>
    </Box>
  );
}

export default SliderNosServices;
