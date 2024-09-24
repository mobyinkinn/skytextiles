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
            toggleActions: "play none reverse reverse",
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
            toggleActions: "play none none reverse",
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
            toggleActions: "play none none reverse",
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
            toggleActions: "play none none reverse",
            start: "top center",
            end: `+=100`,
            scrub: true,
            // markers: true,
          },
        }
      );
  });
  return (
    <>
      <Stack
        margin={{ md: "0 70px 100px 70px ", xs: "30px" }}
        justifyContent={"space-between"}
        direction={"row"}
        display={{ md: "flex", xs: "none" }}
      >
        <Stack width={"55%"} className="content">
          <Stack height={"90vh"} className="yarns">
            <Typography
              fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
              fontWeight={"bold"}
            >
              Yarn
            </Typography>
            <Typography fontSize={{ md: "1.2rem", xs: "0.8rem" }}>
              Maral manufactures a diverse range of blended & innovative yarns
              to various textile end uses from knitting, weaving, towels,
              sweaters, socks, home furnishing, denims, protective workwear and
              more.
            </Typography>
          </Stack>
          <Stack height={"90vh"} className="fabrics">
            <Typography
              fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
              fontWeight={"bold"}
            >
              Fabrics
            </Typography>
            <Typography fontSize={{ md: "1.2rem", xs: "0.8rem" }}>
              Maral manufactures a diverse range of blended & innovative yarns
              to various textile end uses from knitting, weaving, towels,
              sweaters, socks, home furnishing, denims, protective workwear and
              more.
            </Typography>
          </Stack>
          <Stack height={"90vh"} className="garments">
            <Typography
              fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
              fontWeight={"bold"}
            >
              Garments
            </Typography>
            <Typography fontSize={{ md: "1.2rem", xs: "0.8rem" }}>
              Maral manufactures a diverse range of blended & innovative yarns
              to various textile end uses from knitting, weaving, towels,
              sweaters, socks, home furnishing, denims, protective workwear and
              more.
            </Typography>
          </Stack>
        </Stack>
        <Stack
          width={"45%"}
          height={"700px"}
          className="images"
          position={"relative"}
        >
          <Stack
            height={{ lg: "300px", md: "200px" }}
            width={"100%"}
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
            height={{ lg: "300px", md: "200px" }}
            width={"100%"}
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
            height={{ lg: "300px", md: "200px" }}
            width={"100%"}
            className="garmentsImage"
            position={"absolute"}
            sx={{
              backgroundImage: `url(${garments.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></Stack>
        </Stack>
      </Stack>

      {/* mobile view */}
      <Stack margin={"30px"} gap={"20px"} display={{ md: "none" }}>
        <Stack>
          <Typography
            fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
            fontWeight={"bold"}
          >
            Yarn
          </Typography>
          <Typography fontSize={{ md: "1.2rem", xs: "0.8rem" }}>
            Maral manufactures a diverse range of blended & innovative yarns to
            various textile end uses from knitting, weaving, towels, sweaters,
            socks, home furnishing, denims, protective workwear and more.
          </Typography>
        </Stack>
        <Stack
          height={"150px"}
          width={"60%"}
          sx={{
            backgroundImage: `url(${yarns.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></Stack>

        <Stack>
          <Typography
            fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
            fontWeight={"bold"}
          >
            Fabrics
          </Typography>
          <Typography fontSize={{ md: "1.2rem", xs: "0.8rem" }}>
            Maral manufactures a diverse range of blended & innovative yarns to
            various textile end uses from knitting, weaving, towels, sweaters,
            socks, home furnishing, denims, protective workwear and more.
          </Typography>
        </Stack>
        <Stack
          height={"150px"}
          width={"60%"}
          sx={{
            backgroundImage: `url(${yarns.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></Stack>

        <Stack>
          <Typography
            fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
            fontWeight={"bold"}
          >
            Garments
          </Typography>
          <Typography fontSize={{ md: "1.2rem", xs: "0.8rem" }}>
            Maral manufactures a diverse range of blended & innovative yarns to
            various textile end uses from knitting, weaving, towels, sweaters,
            socks, home furnishing, denims, protective workwear and more.
          </Typography>
        </Stack>
        <Stack
          height={"150px"}
          width={"60%"}
          sx={{
            backgroundImage: `url(${yarns.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></Stack>
      </Stack>
    </>
  );
}
