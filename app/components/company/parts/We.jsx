"use client";

import { Box, Stack, Typography } from "@mui/material";
import img from "./assets/We1.png";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
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
              '<b> What <span style="color: #FB5457;">We Are</span> </b>',
              '<b> Who <span style="color: #FB5457;">We Are</span> </b>',
              '<b> Where <span style="color: #FB5457;">We Are</span> </b>',
            ],
            autoStart: true,
            html: true,
            loop: true,
          }}
        />
      </Box>
      <Typography>
        We are thrilled to announce that SKY Textiles has emerged as a premier
        fully vertical facility, offering a comprehensive, one-stop solution for
        all your garment needs. From raw cotton to finished apparel, we handle
        every stage of production, including design, development, sourcing,
        industrial manufacturing, and sales. Our mission is to empower our
        clients by helping them unlock new possibilities and innovations in
        their product lines. Through close collaboration, we craft unique,
        high-quality garments that inspire confidence and bring delight to every
        customer.
      </Typography>
      <Typography>
        Founded in October 2020 under the Companies Act of 2013 (CIN:
        U17299GJ2020PTC116984), SKY Textiles is headquartered at B-105, Westgate
        Tower Unit 2, near YMCA Club, S.G. Highway, Makarba, Ahmedabad, Gujarat.
        We take pride in our cutting-edge vertical facility, located at Survey
        No Paiki, 32 & 33, Bhavnagar Road, Lathidad, District Botad, Gujarat.
      </Typography>
      <Typography>
        With our commitment to excellence, innovation, and customer
        satisfaction, SKY Textiles is poised to become a leading partner for all
        your garment production needs. We look forward to an exciting journey
        ahead, creating world-class apparel together !
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
            backgroundImage: `url(${img1.src})`,
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
            backgroundImage: `url(${img2.src})`,
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
            backgroundImage: `url(${img3.src})`,
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
            backgroundImage: `url(${img4.src})`,
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
                backgroundImage: `url(${img1.src})`,
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
                backgroundImage: `url(${img2.src})`,
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
                backgroundImage: `url(${img3.src})`,
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
                backgroundImage: `url(${img4.src})`,
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
