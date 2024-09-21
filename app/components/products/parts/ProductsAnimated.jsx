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
    tl.to(".images", {
      scrollTrigger: {
        trigger: ".images",
        start: "top 25%",
        endTrigger: ".garments",
        end: "top 25%",
        pin: true,
        scrub: true,
        // markers: true,
      },
    })
      .fromTo(
        ".yarnsImage",
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        },
        {
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          scrollTrigger: {
            trigger: ".fabrics",
            start: "top center",
            end: `+=100`,
            scrub: true,
            // markers: true,
          },
        }
      )
      .fromTo(
        ".fabricsImage",
        {
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          scrollTrigger: {
            trigger: ".fabrics",
            start: "top center",
            end: `+=100`,
            scrub: true,
            // markers: true,
          },
        }
      )
      .to(
        ".fabricsImage",

        {
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          scrollTrigger: {
            trigger: ".garments",
            start: "top center",
            end: `+=100`,
            scrub: true,
            // markers: true,
          },
        }
      )
      .fromTo(
        ".garmentsImage",
        {
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          scrollTrigger: {
            trigger: ".garments",
            start: "top center",
            end: `+=100`,
            scrub: true,
            // markers: true,
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
      <Stack
        width={"35%"}
        height={"700px"}
        className="images"
        position={"relative"}
      >
        <Stack
          height={"300px"}
          width={"500px"}
          className="yarnsImage"
          position={"absolute"}
          sx={{
            backgroundImage: `url(${yarns.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></Stack>
        <Stack
          height={"300px"}
          width={"500px"}
          className="fabricsImage"
          position={"absolute"}
          sx={{
            backgroundImage: `url(${fabric.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></Stack>
        <Stack
          height={"300px"}
          width={"500px"}
          className="garmentsImage"
          position={"absolute"}
          sx={{
            backgroundImage: `url(${garments.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></Stack>
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
