"use client";
import { Stack } from "@mui/system";
import yarns from "./assets/yarns.png";
import fabric from "./assets/fabric.png";
import garments from "./assets/garments.png";
import { Typography } from "@mui/material";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);

export default function ProductAnimated() {
  useGSAP(() => {
    const height = window.innerHeight;
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();
    tl.to(".content", {
      scrollTrigger: {
        trigger: ".images",
        start: "top 15%",
        end: "bottom center",
        pin: true,
        scrub: true,
        markers: true,
      },
    }).fromTo(
      ".yarnsImage",
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      },
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        display: "hidden",
        // clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        scrollTrigger: {
          trigger: ".fabrics",
          start: "top 15%",
          end: `+=100`,
          pin: true,
          scrub: true,
          markers: true,
        },
      }
    );
  });
  return (
    <Stack
      margin={"0 70px 100px 70px "}
      justifyContent={"space-between"}
      direction={"row"}
    >
      <Stack width={"60%"} className="content">
        <Stack height={"90vh"} className="yarns">
          <Typography fontSize={"3rem"} fontWeight={"bold"}>
            Yarn
          </Typography>
          <Typography fontSize={"1.2rem"}>
            Maral manufactures a diverse range of blended & innovative yarns to
            various textile end uses from knitting, weaving, towels, sweaters,
            socks, home furnishing, denims, protective workwear and more.
          </Typography>
        </Stack>
        <Stack height={"90vh"} className="fabrics">
          <Typography fontSize={"3rem"} fontWeight={"bold"}>
            Fabrics
          </Typography>
          <Typography fontSize={"1.2rem"}>
            Maral manufactures a diverse range of blended & innovative yarns to
            various textile end uses from knitting, weaving, towels, sweaters,
            socks, home furnishing, denims, protective workwear and more.
          </Typography>
        </Stack>
        <Stack height={"90vh"} className="garments">
          <Typography fontSize={"3rem"} fontWeight={"bold"}>
            Garments
          </Typography>
          <Typography fontSize={"1.2rem"}>
            Maral manufactures a diverse range of blended & innovative yarns to
            various textile end uses from knitting, weaving, towels, sweaters,
            socks, home furnishing, denims, protective workwear and more.
          </Typography>
        </Stack>
      </Stack>
      <Stack width={"35%"} className="images">
        <Image
          className="yarnsImage"
          src={yarns}
          alt=""
          height={300}
          width={500}
          style={{}}
        />
        <Image
          className="fabricsImage"
          src={fabric}
          alt=""
          height={300}
          width={500}
          style={{}}
        />
        {/* 
        <Image
          className="yarnsImage"
          src={garments}
          alt=""
          height={300}
          width={500}
          style={{}}
        /> */}
      </Stack>
    </Stack>
  );
}
