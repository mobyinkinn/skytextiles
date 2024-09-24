"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import yarnImage from "./assets/Yarn.gif";
import fabricImage from "./assets/Fabric.gif";
import garmentImage from "./assets/Garment.gif";
import { useRef } from "react";
import ReactLenis from "@studio-freight/react-lenis";

gsap.registerPlugin(useGSAP);

export default function BusinessVerticles() {
  const container = useRef(null);
  useGSAP(() => {
    const innerHeight = window.innerHeight;
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline();
    let tl2 = gsap.timeline();
    let tl3 = gsap.timeline();
    let tl4 = gsap.timeline();

    tl.to(".yarns", {
      scrollTrigger: {
        trigger: ".yarns",
        start: "top 15%",
        endTrigger: ".fabricsContainer",
        end: "top center",
        anticipatePin: 0.1,
        inertia: false,
        pin: true,
        pinSpacing: false,
        scrub: true,
        // markers: true,
      },
    })
      .to(".fabrics, .garments", {
        y: 150,
        opacity: 0,
        scrollTrigger: {
          trigger: ".fabrics",
          start: "top center",
          end: "+=50",
          scrub: true,
          // markers: true,
        },
      })
      .to(".yarnsText", {
        x: 70,
        stagger: 0.5,
        display: "block",
        opacity: 1,
        scrollTrigger: {
          trigger: ".fabrics",
          start: "top 30%",
          endTrigger: ".fabricsContainer",
          end: "top 70%",
          scrub: true,
          // markers: true,
        },
      })
      .to(".fabricsContainer", {
        scrollTrigger: {
          trigger: ".fabricsContainer",
          start: "center 35%",
          endTrigger: ".garmentsContainer",
          end: "top center",
          anticipatePin: 0.1,
          inertia: false,
          pin: true,
          pinSpacing: false,
          scrub: true,
          // markers: true,
        },
      })
      .to(".fabricImage", {
        opacity: 1,
        scrollTrigger: {
          trigger: ".fabricsContainer",
          start: "center 35%",
          end: "+=10",
          scrub: true,
        },
      })
      .to(".fabricsText", {
        x: 70,
        stagger: 0.5,
        display: "block",
        opacity: 1,
        scrollTrigger: {
          trigger: ".fabricsContainer",
          start: "center 35%",
          end: "+=150",
          scrub: true,
          // markers: true,
        },
      })
      .to(".garmentsContainer", {
        scrollTrigger: {
          trigger: ".garmentsContainer",
          start: "center 35%",
          endTrigger: ".garmentsContainer",
          end: "bottom center",
          anticipatePin: 0.1,
          inertia: false,
          pin: true,
          pinSpacing: false,
          scrub: true,
          // markers: true,
        },
      })
      .to(".garmentImage", {
        opacity: 1,
        scrollTrigger: {
          trigger: ".garmentsContainer",
          start: "center 35%",
          end: "+=10",
          scrub: true,
        },
      })
      .to(".garmentsText", {
        x: 70,
        stagger: 0.5,
        display: "block",
        opacity: 1,
        scrollTrigger: {
          trigger: ".garmentsContainer",
          start: "center 35%",
          end: "+=150",
          scrub: true,
          // markers: true,
        },
      });

    tl4.to(".imageContainer", {
      scrollTrigger: {
        trigger: ".imageContainer",
        start: "top 15%",
        endTrigger: ".garmentsContainer",
        end: "bottom center",
        anticipatePin: 0.1,
        inertia: false,
        pin: true,
        pinSpacing: false,
        scrub: true,
        // markers: true,
      },
    });
  });

  return (
    <ReactLenis root options={{ lerp: 2, duration: 1.5, smoothWheel: true }}>
      <Stack
        margin={{ lg: "50px 150px", md: "50px 100px", smm: "30px", xs: "10px" }}
        ref={container}
      >
        <Typography
          color="#D88684"
          fontSize={{ md: "3rem", smm: "2rem", xs: "1.5rem" }}
          fontWeight={"bold"}
          textAlign={"center"}
          paddingBottom={"50px"}
        >
          Business Verticles
        </Typography>
        <Stack direction={"row"} height={"100vh"} gap={"100px"}>
          <Stack>
            <Stack className="yarns" gap={{ md: "20px" }}>
              <Stack
                marginBottom={"10px"}
                direction={"row"}
                gap={"10px"}
                alignItems={"center"}
              >
                <Stack
                  sx={{
                    border: "1.5px solid black",
                    width: "60px",
                    height: "60px",
                    borderRadius: "100%",
                    padding: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "100%",
                      backgroundColor: "#FB5457",
                    }}
                  ></Box>
                </Stack>
                <Typography
                  fontSize={{
                    lg: "4.5rem",
                    md: "3rem",
                    smm: "2.5rem",
                    xs: "2rem",
                  }}
                  fontWeight={"bold"}
                >
                  Yarns
                </Typography>
              </Stack>
              <Typography
                width={{ md: "25vw", sm: "70vw", xs: "60vw" }}
                fontSize={{
                  lg: "1.2rem",
                  md: "1rem",
                  smm: "0.9rem",
                  xs: "0.7rem",
                }}
                sx={{ opacity: 0, display: "none" }}
                className="yarnsText"
              >
                100% Cotton Combed Compact with P.P. Cleared Yarns We product
                richest quality of compact yarns using the advanced techniques
                and spinning machines.
              </Typography>
            </Stack>

            <Stack className="fabrics">
              <Stack
                marginBottom={"10px"}
                direction={"row"}
                gap={"10px"}
                alignItems={"center"}
              >
                <Stack
                  sx={{
                    border: "1.5px solid black",
                    width: "60px",
                    height: "60px",
                    borderRadius: "100%",
                    padding: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "100%",
                      backgroundColor: "#5857F9",
                    }}
                  ></Box>
                </Stack>
                <Typography
                  fontSize={{
                    lg: "4.5rem",
                    md: "3rem",
                    smm: "2.5rem",
                    xs: "2rem",
                  }}
                  fontWeight={"bold"}
                >
                  Fabrics
                </Typography>
              </Stack>
            </Stack>
            <Stack className="garments">
              <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
                <Stack
                  sx={{
                    border: "1.5px solid black",
                    width: "60px",
                    height: "60px",
                    borderRadius: "100%",
                    padding: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "100%",
                      backgroundColor: "#9C34F0",
                    }}
                  ></Box>
                </Stack>
                <Typography
                  fontSize={{
                    lg: "4.5rem",
                    md: "3rem",
                    smm: "2.5rem",
                    xs: "2rem",
                  }}
                  fontWeight={"bold"}
                >
                  Garments
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            width={{ lg: "40vw", md: "40vw" }}
            display={{ xs: "none", md: "flex" }}
            height={"60vh"}
            position={"relative"}
            className="imageContainer"
          >
            <Image
              src={yarnImage}
              alt=""
              fill
              objectPosition="top"
              objectFit="contain"
              className="yarnImage"
            />
            <Image
              src={fabricImage}
              alt=""
              fill
              objectPosition="top"
              objectFit="contain"
              style={{ opacity: 0 }}
              className="fabricImage"
            />
            <Image
              src={garmentImage}
              alt=""
              fill
              objectPosition="top"
              objectFit="contain"
              style={{ opacity: 0 }}
              className="garmentImage"
            />
          </Stack>
        </Stack>

        <Stack
          className="fabricsContainer"
          height={{ md: "100vh", xs: "120vh" }}
          justifyContent={"center"}
        >
          <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
            <Stack
              sx={{
                border: "1.5px solid black",
                width: "60px",
                height: "60px",
                borderRadius: "100%",
                padding: "10px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "100%",
                  backgroundColor: "#5857F9",
                }}
              ></Box>
            </Stack>
            <Typography
              fontSize={{
                lg: "4.5rem",
                md: "3rem",
                smm: "2.5rem",
                xs: "2rem",
              }}
              fontWeight={"bold"}
            >
              Fabrics
            </Typography>
          </Stack>
          <Typography
            width={{ md: "25vw", xs: "70vw", xs: "60vw" }}
            fontSize={{ lg: "1.2rem", md: "1rem", smm: "0.9rem", xs: "0.7rem" }}
            sx={{ opacity: 0 }}
            className="fabricsText"
          >
            Griege and Finished Knitted Fabrics.
          </Typography>
        </Stack>
        <Stack
          className="garmentsContainer"
          height={{ md: "100vh", xs: "120vh" }}
          justifyContent={"center"}
        >
          <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
            <Stack
              sx={{
                border: "1.5px solid black",
                width: "60px",
                height: "60px",
                borderRadius: "100%",
                padding: "10px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "100%",
                  backgroundColor: "#9C34F0",
                }}
              ></Box>
            </Stack>
            <Typography
              fontSize={{
                lg: "4.5rem",
                md: "3rem",
                smm: "2.5rem",
                xs: "2rem",
              }}
              fontWeight={"bold"}
            >
              Garments
            </Typography>
          </Stack>
          <Typography
            width={{ md: "25vw", xs: "70vw", xs: "60vw" }}
            fontSize={{ lg: "1.2rem", md: "1rem", smm: "0.9rem", xs: "0.7rem" }}
            sx={{ opacity: 0 }}
            className="garmentsText"
          >
            Fashion and Trendy Inner wear, Casual wear, Lounge wear, Sleep wear,
            Thermals, Athleisure, Outer wear, Fashion styles
          </Typography>
        </Stack>
      </Stack>
    </ReactLenis>
  );
}
