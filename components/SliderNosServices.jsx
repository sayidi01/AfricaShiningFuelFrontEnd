import React from 'react';
import Slider from "react-slick";
import '../src/sliderLIVRAISON.css';
import { Box } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { Typography } from 'antd';

function SliderNosServices() {
 
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  };

 

  return (
    <Box className="slider-wrapper" sx={{marginTop: {xs: '5rem', sm: '8rem'}}}>
      <div className="slider-container" >
        <Slider {...settings}>
            <Link to={'/livraison'}>
          <div className='livraison'>
            <Typography> The TFC card enables you to refuel economically at up to 4,600 petrol stations. Our network covers 18 European countries and continues to expand.  </Typography>
          </div>
            </Link>
           <NavLink to={'/cartecarburant'}>
          <div className='carte-carburant-toute-marque-ASF'>
            <h3></h3>
          </div>
           </NavLink>
          <div className='abonnement-telepage'>
            <h3></h3>
          </div>
        </Slider>
      </div>
    </Box>
  );
}

export default SliderNosServices;
