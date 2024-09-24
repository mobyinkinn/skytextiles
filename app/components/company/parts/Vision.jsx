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
    head: "Knitting",
    body: " The process of creating fabric by interlocking yarn loops to form flexible, stretchable textiles.",
  },
  {
    id: 1,
    icon: icon2,
    head: "Dyeing",
    body: "Applying color to fabric through various methods to achieve vibrant and consistent shades.",
  },
  {
    id: 2,
    icon: icon3,
    head: "Finishing",
    body: " Enhancing fabric properties like texture, strength, and appearance through treatments and processes after knitting and dyeing.",
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
        margin={{ md: "0 10vw", xs: "0 30px" }}
      >
        <Stack
          display={{ md: "flex", xs: "none" }}
          color={"#B0B0B0"}
          className="titles"
          height={{ md: "50vh" }}
        >
          <Typography
            color={"#FB5457"}
            fontSize={{ lg: "3.5rem", md: "2.5rem" }}
            fontWeight={"bold"}
            className="visionHead"
          >
            Vision
          </Typography>
          <Typography
            fontSize={{ lg: "3.5rem", md: "2.5rem" }}
            fontWeight={"bold"}
            className="missionHead"
          >
            Mission
          </Typography>
          <Typography
            fontSize={{ lg: "3.5rem", md: "2.5rem" }}
            fontWeight={"bold"}
            className="valuesHead"
          >
            Values
          </Typography>
        </Stack>
        <Stack width={{ md: "60%" }}>
          <Box height={{ md: "90vh" }}>
            <Typography
              display={{ md: "none" }}
              fontWeight={"bold"}
              marginTop={"20px"}
              color={"#FB5457"}
              fontSize={"3rem"}
            >
              Vision
            </Typography>
            <Typography
              fontSize={{ lg: "3rem", xs: "2rem" }}
              fontWeight={"bold"}
              className="vision"
            >
              Lead the industry with innovative, sustainable textile solutions
              for eco-friendly fashion.
            </Typography>
          </Box>
          <Box height={{ md: "90vh" }}>
            <Typography
              display={{ md: "none" }}
              fontWeight={"bold"}
              marginTop={"20px"}
              color={"#9C38F1"}
              fontSize={"3rem"}
            >
              Mission
            </Typography>
            <Typography
              fontSize={{ lg: "3rem", xs: "2rem" }}
              fontWeight={"bold"}
              className="mission"
            >
              Produce high-quality, sustainable textiles through innovation and
              ethical practices.
            </Typography>
          </Box>
          <Box height={{ md: "90vh" }}>
            <Typography
              display={{ md: "none" }}
              fontWeight={"bold"}
              color={"#5A57FF"}
              marginTop={"20px"}
              fontSize={"3rem"}
            >
              Values
            </Typography>
            <Typography
              fontSize={{ lg: "3rem", xs: "2rem" }}
              fontWeight={"bold"}
              className="values"
            >
              Quality, Sustainability, Innovation, Integrity, Customer Focus,
              Collaboration, Responsibility
            </Typography>
          </Box>
        </Stack>
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        margin={{ lg: "0 70px", xs: "30px" }}
        gap={"20px"}
        justifyContent={"space-between"}
      >
        {data.map((el) => {
          return (
            <Stack
              key={el.id}
              width={{ md: "30%" }}
              height={{ md: "40vh" }}
              borderRadius={"10px"}
              gap={"10px"}
              sx={{
                cursor: "pointer",
                padding: { lg: "50px", xs: "30px 30px" },
                backgroundColor: { md: "white", xs: "#f9f9f9" },
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
