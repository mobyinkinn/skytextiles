"use client";

import { Box, Stack, Typography } from "@mui/material";
import img from "./assets/We1.png";
// import Typewriter from "typewriter-effect/dist/core";
import Typewriter from "typewriter-effect";
import { useEffect } from "react";

export default function We() {
  useEffect(() => {
    // let typewriter = new Typewriter(".head", {
    //   loop: true,
    //   delay: 75,
    // });
  });
  return (
    <Stack margin={"70px"} gap={"20px"}>
      <Box fontSize={"3rem"}>
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
      <Typography className=".head"></Typography>
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
        height={"60vh"}
        sx={{ justifyContent: "space-between", margin: "40px 0" }}
      >
        <Box
          width={"20%"}
          height={"100%"}
          sx={{
            backgroundImage: `url(${img.src})`,
            transition: "filter 0.5s ease",
            backgroundSize: "cover",
            borderRadius: "20px",
            filter: "grayscale(100%)",
            cursor: "pointer",
            "&:hover": {
              filter: "grayscale(0%)",
            },
          }}
        ></Box>
        <Box
          width={"20%"}
          height={"100%"}
          sx={{
            backgroundImage: `url(${img.src})`,
            transition: "filter 0.5s ease",
            backgroundSize: "cover",
            borderRadius: "20px",
            cursor: "pointer",
            filter: "grayscale(100%)",
            "&:hover": {
              filter: "grayscale(0%)",
            },
          }}
        ></Box>
        <Box
          width={"20%"}
          height={"100%"}
          sx={{
            backgroundImage: `url(${img.src})`,
            backgroundSize: "cover",
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
          width={"20%"}
          height={"100%"}
          sx={{
            backgroundImage: `url(${img.src})`,
            transition: "filter 0.5s ease",
            backgroundSize: "cover",
            borderRadius: "20px",
            filter: "grayscale(100%)",
            cursor: "pointer",
            "&:hover": {
              filter: "grayscale(0%)",
            },
          }}
        ></Box>
      </Stack>
    </Stack>
  );
}
