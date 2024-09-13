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

export default function Conservation() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();

    tl.fromTo(
      ".fade3",
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".fade3",
          start: "top 70%",
          end: "top center",
          scrub: true,
          // markers: true,
        },
      }
    ).fromTo(
      ".fade4",
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".fade4",
          start: "top 70%",
          end: "top center",
          scrub: true,
          // markers: true,
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
          Conservation Drives
        </Typography>
        <Typography width={"70%"} margin={"0 auto"} textAlign={"center"}>
          In addition to creating our own source of renewable energy, we seek
          eco-friendly ways to conserve energy and water by effecting process
          and machinery modifications, implementing technological advancements,
          developing newer processes, energy audits, optimal and timely
          maintenance, etc.
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
            <Image className="fade3" src={eco1} alt="" width={80} height={80} />
            <Typography className="fade3" textAlign={"center"}>
              Source Organic Cotton As Raw Material For Spinning
            </Typography>
          </Stack>
          <Stack width={"50%"} alignItems={"center"} padding={"40px"}>
            <Image src={eco2} alt="" className="fade3" width={80} height={80} />
            <Typography textAlign={"center"} className="fade3">
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
            <Image src={eco3} alt="" width={80} height={80} className="fade4" />
            <Typography textAlign={"center"} className="fade4">
              Recycle Water Using Effluent Water Treatment
            </Typography>
          </Stack>
          <Stack width={"50%"} alignItems={"center"} padding={"40px"}>
            <Image src={eco4} alt="" width={80} height={80} className="fade4" />
            <Typography textAlign={"center"} className="fade4">
              Installed Rooftop Solar Panels To Harness 2.2 Mw
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
