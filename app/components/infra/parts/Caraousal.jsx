"use client";

import { Stack, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import knitting from "./assets/knitting.png";
import { useRef, useState } from "react";

const processData = [
  {
    id: 0,
    head: "Knitting",
    img: knitting,
    data: "Our Knitting Facility Is Capable Of Producing A Total Of 15 Tons Of High-quality Knitted Fabrics Per Day. It Is Well-equipped With Advanced High-speed Automatic Circular (Mayer & Cie) & Flat Knitting (Matsuya) Machines.",
  },
  {
    id: 1,
    head: "Knitting 2",
    img: knitting,
    data: "Our Knitting Facility Is Capable Of Producing A Total Of 15 Tons Of High-quality Knitted Fabrics Per Day. It Is Well-equipped With Advanced High-speed Automatic Circular (Mayer & Cie) & Flat Knitting (Matsuya) Machines.",
  },
  {
    id: 2,
    head: "Knitting 3",
    img: knitting,
    data: "Our Knitting Facility Is Capable Of Producing A Total Of 15 Tons Of High-quality Knitted Fabrics Per Day. It Is Well-equipped With Advanced High-speed Automatic Circular (Mayer & Cie) & Flat Knitting (Matsuya) Machines.",
  },
  {
    id: 3,
    head: "Knitting 4",
    img: knitting,
    data: "Our Knitting Facility Is Capable Of Producing A Total Of 15 Tons Of High-quality Knitted Fabrics Per Day. It Is Well-equipped With Advanced High-speed Automatic Circular (Mayer & Cie) & Flat Knitting (Matsuya) Machines.",
  },
];

export default function Caraosal() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
    appendDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => <div>{i + 1}</div>,
  };

  return (
    <Stack marginBottom={{ md: "100px", xs: "20px" }}>
      <Typography
        fontSize={{ lg: "2.8rem", md: "2rem", sm: "1.2rem" }}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Here's A Breakdown Of Our Daily Production
      </Typography>
      <Typography
        fontSize={{ lg: "3rem", md: "2rem", sm: "1.2rem" }}
        fontWeight={"bold"}
        textAlign={"center"}
        color={"#FB5457"}
      >
        Capacities For Various Processes
      </Typography>
      <Stack margin={{ md: "70px 70px 0 70px", xs: "20px 0 20px 0" }}>
        <Slider ref={sliderRef} {...settings}>
          {processData.map((el, i) => {
            return (
              <Stack
                key={el.id}
                width={"100%"}
                height={{ md: "fit-content", xs: "50vh" }}
                sx={{
                  backgroundImage: `url(${el.img.src})`,
                  backgroundSize: { lg: "contain", xs: "cover" },
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: { lg: "right", xs: "center center" },
                }}
              >
                <Stack
                  width={{ md: "40%", xs: "80%" }}
                  backgroundColor={"#FB5457"}
                  padding={"30px"}
                  color={"white"}
                  gap={"10px"}
                  margin={{ md: "100px", xs: "10vh auto" }}
                  marginBottom={{ md: "10px", xs: "10px" }}
                  marginLeft={"0"}
                >
                  <Typography fontSize={"2rem"}>{el.head}</Typography>
                  <Typography fontSize={"1.3rem"}>{el.data}</Typography>
                </Stack>
                <Stack
                  width={"40%"}
                  margin={{ md: "0", xs: "0 auto" }}
                  justifyContent={"center"}
                  gap={"40px"}
                  direction={"row"}
                >
                  {processData.map((el, i) => {
                    return (
                      <Stack
                        onClick={() => sliderRef.current.slickGoTo(i)}
                        marginBottom={"100px"}
                        backgroundColor={"white"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        width={"35px"}
                        height={"35px"}
                        fontSize={currentSlide == i ? "1.5rem" : "1.2rem"}
                        borderRadius={"50%"}
                        color={currentSlide == i ? "black" : "#858080"}
                        sx={{ cursor: "pointer" }}
                      >
                        {i + 1}
                      </Stack>
                    );
                  })}
                </Stack>
              </Stack>
            );
          })}
        </Slider>
      </Stack>
    </Stack>
  );
}
