"use client";

import { useGSAP } from "@gsap/react";
import { Box, Stack, Typography } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import icon1 from "./assets/redIcon1.png";
import icon2 from "./assets/redIcon2.png";
import icon3 from "./assets/redIcon3.png";
import Image from "next/image";

const data = [
  {
    id: 0,
    icon: icon1,
    head: "We Manufacture",
    body: "Innovation at Sutlej is driven by the needs of the customers who increasingly demand differentiated products to respond to new.",
  },
  {
    id: 1,
    icon: icon2,
    head: "We Design Fabric",
    body: "Innovation at Sutlej is driven by the needs of the customers who increasingly demand differentiated products to respond to new",
  },
  {
    id: 2,
    icon: icon3,
    head: "We Engineer",
    body: "Innovation at Sutlej is driven by the needs of the customers who increasingly demand differentiated products to respond to new.",
  },
];

gsap.registerPlugin(useGSAP);

export default function Vision() {
  useGSAP(() => {
    const height = window.innerHeight - 50;
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    tl.to(".titles", {
      scrollTrigger: {
        trigger: ".titles",
        start: "top 15%",
        end: `+=${2 * height}`,
        anticipatePin: 0.1,
        inertia: false,
        pin: true,
        pinSpacing: true,
        scrub: true,
        // markers: true,
      },
    })
      .to(".visionHead", {
        color: "#B0B0B0",
        scrollTrigger: {
          trigger: ".mission",
          start: "top 15%",
          end: `+=100`,
          scrub: true,
          //   markers: true,
        },
      })
      .to(".missionHead", {
        color: "#9C38F1",
        scrollTrigger: {
          trigger: ".mission",
          start: "top 15%",
          end: `+=100`,
          scrub: true,
          //   markers: true,
        },
      })
      .to(".missionHead", {
        color: "#B0B0B0",
        scrollTrigger: {
          trigger: ".values",
          start: "top 15%",
          end: `+=100`,
          scrub: true,
          //   markers: true,
        },
      })
      .to(".valuesHead", {
        color: "#5A57FF",
        scrollTrigger: {
          trigger: ".values",
          start: "top 15%",
          end: `+=100`,
          scrub: true,
          //   markers: true,
        },
      });
  });
  return (
    <Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        margin={"0 10vw"}
      >
        <Stack color={"#B0B0B0"} className="titles" height={"50vh"}>
          <Typography
            color={"#FB5457"}
            fontSize={"3.5rem"}
            fontWeight={"bold"}
            className="visionHead"
          >
            Vision
          </Typography>
          <Typography
            fontSize={"3.5rem"}
            fontWeight={"bold"}
            className="missionHead"
          >
            Mission
          </Typography>
          <Typography
            fontSize={"3.5rem"}
            fontWeight={"bold"}
            className="valuesHead"
          >
            Values
          </Typography>
        </Stack>
        <Stack width={"60%"}>
          <Box height={"90vh"}>
            <Typography
              fontSize={"3.5rem"}
              fontWeight={"bold"}
              className="vision"
            >
              To be the world's best and most trusted human experience design
              company
            </Typography>
          </Box>
          <Box height={"90vh"}>
            <Typography
              fontSize={"3.5rem"}
              fontWeight={"bold"}
              className="mission"
            >
              To enhance and elevate human interaction
            </Typography>
          </Box>
          <Box height={"90vh"}>
            <Typography
              fontSize={"3.5rem"}
              fontWeight={"bold"}
              className="values"
            >
              To pursue excellence through dedicated teamwork
            </Typography>
          </Box>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        margin={"0 70px"}
        justifyContent={"space-between"}
      >
        {data.map((el) => {
          return (
            <Stack
              key={el.id}
              width={"30%"}
              height={"40vh"}
              borderRadius={"10px"}
              gap={"10px"}
              sx={{
                cursor: "pointer",
                padding: "50px",
                "&:hover": {
                  backgroundColor: "#F9F9F9",
                },
              }}
            >
              <Image width={50} height={50} src={el.icon} alt="" />
              <Typography fontSize={"1.5rem"} fontWeight={"bold"}>
                {el.head}
              </Typography>
              <Typography>{el.body}</Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}
