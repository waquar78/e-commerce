import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, Typography, Divider } from '@mui/material';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

export const Slides = ({ products = [], newItems = [],ladyItems=[],title ,timer }) => {
    // Decide which array to use
    const displayItems = products.length ? products : newItems;
    const displayladyItems = products.length ? products : ladyItems;

    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds }) => (
        <Box variant="span">{hours} : {minutes} : {seconds} Left</Box>
    );

    return (
        <Box className='mt-2 bg-white'>
            <Box className='pt-[15px] pb-[15px] pl-[20px] pr-[20px] flex gap-2'>
                <Typography style={{ marginRight: 16, fontWeight: "bold" }}>{title}</Typography>
                {
                   timer &&
                   <>
                    <img src={timerURL} style={{ width: 24 }} alt='time clock' />
                    <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                    </>
                }

            </Box>
            <Divider />
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                centerMode={true}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {displayItems.map((product, index) => (
                    <Link to={`/product/${product.id}`} state={{ product }}>
                    <Box key={index} alignItems={'center'} style={{ padding: "25px 15px" }}>
                      <img style={{ height: 160 }} src={product.url} alt="product" />
                      <Typography style={{ marginTop: 3, fontWeight: 600 }}>{product.title.shortTitle}</Typography>
                      <Typography style={{ marginTop: 3, color: 'green' }}>{product.discount}</Typography>
                      <Typography style={{ marginTop: 3, color: 'gray' }}>{product.tagline}</Typography>
                    </Box>
                  </Link>
                  
                ))}
            </Carousel>
        </Box>
    );
};
