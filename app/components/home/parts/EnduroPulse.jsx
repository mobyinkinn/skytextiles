"use client";

import { Box, Stack, Typography } from "@mui/material";
import enduro1 from "./assets/enduro1.png";
import enduro2 from "./assets/enduro2.png";
import enduro3 from "./assets/enduro3.png";
import enduro4 from "./assets/enduro4.png";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP);

export default function Enduro() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();
    tl.fromTo(
      ".image",
      { backgroundPosition: "center -300px" },
      {
        backgroundPosition: "center 0",
        scrollTrigger: {
          trigger: ".image",
          start: "top bottom",
          end: "center top",
          scrub: true,
          //   markers: true,
        },
      }
    )
      .fromTo(
        ".image3",
        { backgroundPosition: "center -150px" },
        {
          backgroundPosition: "center 0",
          scrollTrigger: {
            trigger: ".image3",
            start: "top bottom",
            end: "center top",
            scrub: true,
            // markers: true,
          },
        }
      )
      .fromTo(
        ".image2",
        { backgroundPosition: "center -300px" },
        {
          backgroundPosition: "center 0",
          scrollTrigger: {
            trigger: ".image2",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            // markers: true,
          },
        }
      )
      .fromTo(
        ".image4",
        { backgroundPosition: "center -150px" },
        {
          backgroundPosition: "center 0",
          scrollTrigger: {
            trigger: ".image4",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            // markers: true,
          },
        }
      );
  });
  return (
    <Stack margin={"0 50px"} gap={"10px"}>
      <Typography
        fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
        textAlign={"center"}
        fontWeight={"bold"}
        padding={"20px 0"}
      >
        Enduro Pulse
      </Typography>
      <Stack
        display={{ md: "flex", xs: "none" }}
        width={"100%"}
        alignItems={"end"}
        height={"100vh"}
        direction={"row"}
        gap={"10px"}
      >
        <Box
          width={"40%"}
          height={"70%"}
          position={"relative"}
          sx={{
            backgroundImage: `url(${enduro3.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
          className="image3"
        >
          {/* <Image src={enduro2} alt="" fill objectFit="cover" /> */}
        </Box>
        <Box
          width={"60%"}
          height={"100%"}
          position={"relative"}
          sx={{
            backgroundImage: `url(${enduro1.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 0px",
          }}
          className="image"
        >
          {/* <Image src={enduro1} alt="" fill objectFit="cover" /> */}
        </Box>
      </Stack>
      <Stack
        display={{ md: "flex", xs: "none" }}
        width={"100%"}
        alignItems={"start"}
        height={"100vh"}
        direction={"row"}
        gap={"10px"}
      >
        <Box
          width={"60%"}
          height={"100%"}
          position={"relative"}
          sx={{
            backgroundImage: `url(${enduro2.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 0px",
          }}
          className="image2"
        >
          {/* <Image src={enduro1} alt="" fill objectFit="cover" /> */}
        </Box>
        <Box
          width={"40%"}
          height={"70%"}
          position={"relative"}
          sx={{
            backgroundImage: `url(${enduro4.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
          className="image4"
        >
          {/* <Image src={enduro2} alt="" fill objectFit="cover" /> */}
        </Box>
      </Stack>
      <Stack width={"100%"} gap={"10px"} display={{ md: "none" }}>
        <Box
          width={"100%"}
          height={"40vh"}
          sx={{
            backgroundImage: `url(${enduro1.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        ></Box>
        <Box
          width={"100%"}
          height={"40vh"}
          sx={{
            backgroundImage: `url(${enduro2.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        ></Box>
        <Box
          width={"100%"}
          height={"40vh"}
          sx={{
            backgroundImage: `url(${enduro3.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        ></Box>
        <Box
          width={"100%"}
          height={"40vh"}
          sx={{
            backgroundImage: `url(${enduro4.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        ></Box>
      </Stack>
    </Stack>
  );
}
