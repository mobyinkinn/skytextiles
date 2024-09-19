"use client";

import { Stack, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import knitting from "./assets/knitting.png";

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
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Stack marginBottom={"100px"}>
      <Typography fontSize={"3rem"} fontWeight={"bold"} textAlign={"center"}>
        Here's A Breakdown Of Our Daily Production
      </Typography>
      <Typography
        fontSize={"3rem"}
        fontWeight={"bold"}
        textAlign={"center"}
        color={"#FB5457"}
      >
        Capacities For Various Processes
      </Typography>
      <Stack margin={"70px 70px 0 70px"}>
        <Slider {...settings}>
          {processData.map((el, i) => {
            return (
              <Stack
                key={el.id}
                width={"100%"}
                sx={{
                  backgroundImage: `url(${el.img.src})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "rightkk",
                }}
              >
                <Stack
                  width={"30%"}
                  backgroundColor={"#FB5457"}
                  padding={"20px"}
                  color={"white"}
                  gap={"10px"}
                >
                  <Typography fontSize={"1.5rem"}>{el.head}</Typography>
                  <Typography>{el.data}</Typography>
                </Stack>
              </Stack>
            );
          })}
        </Slider>
      </Stack>
    </Stack>
  );
}
