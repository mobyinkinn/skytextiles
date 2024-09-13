"use client";

import { Box, Stack, Typography } from "@mui/material";
import eco1 from "./assets/eco1.png";
import eco2 from "./assets/eco2.png";
import eco3 from "./assets/eco3.png";
import eco4 from "./assets/eco4.png";
import Image from "next/image";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP);

export default function Eco() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();

    tl.fromTo(
      ".fade",
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".fade",
          start: "top 70%",
          end: "top center",
          scrub: true,
          //   markers: true,
        },
      }
    ).fromTo(
      ".fade2",
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".fade2",
          start: "top 70%",
          end: "top center",
          scrub: true,
          //   markers: true,
        },
      }
    );
  });
  return (
    <Stack sx={{ marginBottom: "100px", gap: "10px" }}>
      <Stack>
        <Typography
          textAlign={"center"}
          fontSize={"2.5rem"}
          fontWeight={"bold"}
        >
          Eco-Friendly Initiatives
        </Typography>
        <Typography width={"70%"} margin={"0 auto"} textAlign={"center"}>
          Our internal ethics drive our desire to be a responsible corporate.
          Moving ahead of the times, we have been using eco-friendly materials
          well before our clients requested them. We also proactively invest in
          clean energy, minimise our carbon and effluent footprint and recycle
          raw materials, even before these initiatives are mandated.
        </Typography>
      </Stack>
      <Stack margin={"20px 0 0 0"}>
        <Stack
          sx={{ borderBottom: "1.5px solid black" }}
          direction={"row"}
          width={"50%"}
          margin={"0 auto"}
        >
          <Stack
            width={"50%"}
            alignItems={"center"}
            padding={"40px"}
            sx={{ borderRight: "1.5px solid black" }}
          >
            <Image className="fade" src={eco1} alt="" width={80} height={80} />
            <Typography className="fade" textAlign={"center"}>
              Source Organic Cotton As Raw Material For Spinning
            </Typography>
          </Stack>
          <Stack width={"50%"} alignItems={"center"} padding={"40px"}>
            <Image src={eco2} alt="" className="fade" width={80} height={80} />
            <Typography textAlign={"center"} className="fade">
              Use Eco-friendly Dyes And Pigments
            </Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} width={"50%"} margin={"0 auto"}>
          <Stack
            width={"50%"}
            alignItems={"center"}
            padding={"40px"}
            sx={{ borderRight: "1.5px solid black" }}
          >
            <Image src={eco3} alt="" width={80} height={80} className="fade2" />
            <Typography textAlign={"center"} className="fade2">
              Recycle Water Using Effluent Water Treatment
            </Typography>
          </Stack>
          <Stack width={"50%"} alignItems={"center"} padding={"40px"}>
            <Image src={eco4} alt="" width={80} height={80} className="fade2" />
            <Typography textAlign={"center"} className="fade2">
              Installed Rooftop Solar Panels To Harness 2.2 Mw
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
