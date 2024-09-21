"use client";

import { Box, Stack, Typography } from "@mui/material";
import img from "./assets/We1.png";
import Typewriter from "typewriter-effect";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function We() {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20%",
  };

  return (
    <Stack margin={{ md: "70px", xs: "30px" }} gap={"20px"}>
      <Box fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}>
        <Typewriter
          options={{
            strings: [
              'What <span style="color: #FB5457;">We Are</span>',
              'Who <span style="color: #FB5457;">We Are</span>',
              'Where <span style="color: #FB5457;">We Are</span>',
            ],
            autoStart: true,
            html: true,
            loop: true,
          }}
        />
      </Box>
      <Typography>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.{" "}
      </Typography>
      <Typography>
        Founded on October 2020, under the Companies Act of 2013 (CIN:
        U17299GJ2020PTC116984), SKY Textiles is headquartered in Gujarat B-105,
        Westgate Tower Unit 2,Nr. YMCA Club, S.G. HIGHWAY ,Makarba , AHMEDABAD-
        380015. Our facility is equipped with the latest technology, including
        27,360 spindles for producing high-quality cotton threads in a range of
        counts.
      </Typography>
      <Stack
        direction={"row"}
        display={{ md: "flex", xs: "none" }}
        height={"60vh"}
        sx={{ justifyContent: "space-between", margin: "40px 0" }}
      >
        <Box
          width={"23%"}
          height={"100%"}
          sx={{
            backgroundImage: `url(${img.src})`,
            transition: "filter 0.5s ease",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            borderRadius: "20px",
            filter: "grayscale(100%)",
            cursor: "pointer",
            "&:hover": {
              filter: "grayscale(0%)",
            },
          }}
        ></Box>
        <Box
          width={"23%"}
          height={"100%"}
          sx={{
            backgroundImage: `url(${img.src})`,
            transition: "filter 0.5s ease",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            borderRadius: "20px",
            cursor: "pointer",
            filter: "grayscale(100%)",
            "&:hover": {
              filter: "grayscale(0%)",
            },
          }}
        ></Box>
        <Box
          height={"100%"}
          width={"23%"}
          sx={{
            backgroundImage: `url(${img.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            borderRadius: "20px",
            cursor: "pointer",
            filter: "grayscale(100%)",
            transition: "filter 0.5s ease",
            "&:hover": {
              filter: "grayscale(0%)",
            },
          }}
        ></Box>
        <Box
          width={"23%"}
          height={"100%"}
          sx={{
            backgroundImage: `url(${img.src})`,
            transition: "filter 0.5s ease",
            backgroundSize: "cover",
            borderRadius: "20px",
            backgroundPosition: "center center",
            filter: "grayscale(100%)",
            cursor: "pointer",
            "&:hover": {
              filter: "grayscale(0%)",
            },
          }}
        ></Box>
      </Stack>
      <Stack height={{ smm: "60vh" }} display={{ md: "none", xs: "flex" }}>
        <Slider {...settings}>
          <Box padding={"10px"}>
            <Box
              height={{ smm: "60vh", xs: "30vh" }}
              sx={{
                backgroundImage: `url(${img.src})`,
                transition: "filter 0.5s ease",
                backgroundSize: "cover",
                borderRadius: "20px",
                backgroundPosition: "center center",
                filter: "grayscale(100%)",
                cursor: "pointer",
                "&:hover": {
                  filter: "grayscale(0%)",
                },
              }}
            ></Box>
          </Box>
          <Box padding={"10px"}>
            <Box
              height={{ smm: "60vh", xs: "30vh" }}
              sx={{
                backgroundImage: `url(${img.src})`,
                transition: "filter 0.5s ease",
                backgroundSize: "cover",
                borderRadius: "20px",
                backgroundPosition: "center center",
                filter: "grayscale(100%)",
                cursor: "pointer",
                "&:hover": {
                  filter: "grayscale(0%)",
                },
              }}
            ></Box>
          </Box>
          <Box padding={"10px"}>
            <Box
              height={{ smm: "60vh", xs: "30vh" }}
              sx={{
                backgroundImage: `url(${img.src})`,
                transition: "filter 0.5s ease",
                backgroundSize: "cover",
                borderRadius: "20px",
                backgroundPosition: "center center",
                filter: "grayscale(100%)",
                cursor: "pointer",
                "&:hover": {
                  filter: "grayscale(0%)",
                },
              }}
            ></Box>
          </Box>
          <Box padding={"10px"}>
            <Box
              height={{ smm: "60vh", xs: "30vh" }}
              sx={{
                backgroundImage: `url(${img.src})`,
                transition: "filter 0.5s ease",
                backgroundSize: "cover",
                borderRadius: "20px",
                backgroundPosition: "center center",
                filter: "grayscale(100%)",
                cursor: "pointer",
                "&:hover": {
                  filter: "grayscale(0%)",
                },
              }}
            ></Box>
          </Box>
        </Slider>
      </Stack>
    </Stack>
  );
}
