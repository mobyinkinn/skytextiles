"use client";

import { Box, Stack, Typography } from "@mui/material";
import banner from "./assets/banner2.png";
import enterprise from "./assets/enterprise.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const enterpriseData = [
  {
    id: 0,
    image: enterprise,
    head: "Medium Enterprise",
    data: "There Are Many Variations of Passages of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour.",
  },
  {
    id: 1,
    image: enterprise,
    head: "Medium Enterprise",
    data: "There Are Many Variations of Passages of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour.",
  },
  {
    id: 2,
    image: enterprise,
    head: "Medium Enterprise",
    data: "There Are Many Variations of Passages of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour.",
  },
  {
    id: 3,
    image: enterprise,
    head: "Medium Enterprise",
    data: "There Are Many Variations of Passages of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour.",
  },
];

export default function SkyTextiles() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Stack>
      <Stack
        height={"80vh"}
        width={"100%"}
        sx={{
          backgroundImage: `url(${banner.src})`,
          backgroundSize: "cover",
        }}
        padding={"0 70px"}
        justifyContent={"center"}
      >
        <Typography fontSize={"3rem"} fontWeight={"bold"}>
          It Is A Long
        </Typography>
        <Typography fontSize={"3rem"} fontWeight={"bold"}>
          Established Fact.
        </Typography>
        <Typography width={"40%"}>
          There Are Many Variations of Passages of Lorem Ipsum Available, But
          The Majority Have Suffered Alteration In Some Form, By Injected
          Humour, or Randomised Words Which Don't Look Even Slightly Believable.
        </Typography>
      </Stack>
      <Stack margin={"70px"}>
        <Typography>We Advice More Than.</Typography>
        <Typography fontSize={"3rem"} fontWeight={"bold"}>
          We Advice More Than
        </Typography>
        <Typography fontSize={"3rem"} fontWeight={"bold"}>
          1500 Companies.
        </Typography>
        <Box>
          <Slider {...settings}>
            <Stack>
              {enterpriseData.map((el, i) => {
                return (
                  <Stack>
                    <Typography>{el.head}</Typography>
                    <Typography>{el.data}</Typography>
                  </Stack>
                );
              })}
            </Stack>
          </Slider>
        </Box>
      </Stack>
    </Stack>
  );
}
