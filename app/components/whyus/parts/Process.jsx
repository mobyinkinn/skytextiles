"use client";

import { useGSAP } from "@gsap/react";
import { Box, Stack, Typography } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);

export default function Process() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline();

    tl.to(".ball1", {
      x: "-=250",
      opacity: 0.8,
      scrollTrigger: {
        trigger: ".container",
        start: "top 70%",
        end: "top center",
        scrub: true,
        // markers: true,
      },
    }).to(".ball3", {
      x: "+=250",
      opacity: 0.8,
      scrollTrigger: {
        trigger: ".container",
        start: "top 70%",
        end: "top 40%",
        scrub: true,
        // markers: true,
      },
    });
  });
  return (
    <Stack margin={"100px 70px"}>
      <Typography
        fontSize={"2.5rem"}
        fontWeight={"bold"}
        textAlign={"center"}
        margin={"50px 0"}
      >
        Our Process
      </Typography>
      <Stack
        className="container"
        alignItems={"center"}
        direction={"row"}
        justifyContent={"center"}
      >
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          fontWeight={"bold"}
          color={"white"}
          backgroundColor={"#F95658"}
          height={"300px"}
          width={"300px"}
          borderRadius={"50%"}
          className="ball1"
          position={"relative"}
          sx={{
            left: "300px",
          }}
        >
          Discover
        </Stack>
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          fontWeight={"bold"}
          color={"white"}
          backgroundColor={"#9C3FEB"}
          height={"300px"}
          width={"300px"}
          borderRadius={"50%"}
          className="ball2"
        >
          Discover
        </Stack>
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          fontWeight={"bold"}
          color={"white"}
          backgroundColor={"#5A59FF"}
          height={"300px"}
          width={"300px"}
          borderRadius={"50%"}
          className="ball3"
          position={"relative"}
          sx={{
            right: "300px",
          }}
        >
          Discover
        </Stack>
      </Stack>
    </Stack>
  );
}
