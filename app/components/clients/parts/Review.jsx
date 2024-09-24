"use client";
import { Stack } from "@mui/system";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";

import hannah from "./assets/hannah.png";
import stars from "./assets/stars.png";
import quotes from "./assets/quotes.png";
import Image from "next/image";

const reviewData = [1, 2, 3, 4, 5];

export default function Reviews() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Stack margin={"100px 0 0 0"}>
      <Typography
        fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          margin: "20px 0",
        }}
      >
        What clients say
      </Typography>
      <Box
        width={{ md: "60vw", xs: "100%" }}
        margin={"auto"}
        padding={{ md: "50px", xs: "10px 10px 50px 10px" }}
        backgroundColor={"#F9F9F9"}
        borderRadius={"10px"}
      >
        <Slider {...settings}>
          {reviewData.map((el, i) => (
            <ReviewsCard />
          ))}
        </Slider>
      </Box>
    </Stack>
  );
}

function ReviewsCard() {
  return (
    <Stack
      padding={{ md: "0 10px 20px 10px", xs: "10px" }}
      direction={{ md: "row", xs: "column" }}
      gap={"40px"}
      width={"100%"}
      alignItems={"center"}
    >
      <Stack textAlign={"center"} width={{ md: "30%" }} alignItems={"center"}>
        <Image src={hannah} width={100} height={100} alt="" />
        <Typography fontSize={"1.2rem"} marginTop={"10px"}>
          Hannah Schimet
        </Typography>
        <Typography fontSize={"0.9rem"}> CEO - Marvish</Typography>
      </Stack>
      <Stack
        position={"relative"}
        width={{ md: "60%", xs: "85%" }}
        marginLeft={{ xs: "10%", md: "0" }}
      >
        <Box position={"absolute"} sx={{ left: "-40px" }}>
          <Image src={quotes} alt="" width={30} height={30} />
        </Box>
        <Image src={stars} alt="" width={100} height={18} />
        <Typography
          margin={"10px 0"}
          fontSize={{ md: "1rem", smm: "0.8rem", xs: "0.7rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
          mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget
          nibh in turpis. Consequat duis diam lacus arcu. Suspendisse sed magna
          eget nibh in turpis. Consequat duis diam lacus arcu.
        </Typography>
        <Typography fontSize={{ md: "0.9rem", xs: "0.6rem" }}>
          May 8, 2020
        </Typography>
      </Stack>
    </Stack>
  );
}
