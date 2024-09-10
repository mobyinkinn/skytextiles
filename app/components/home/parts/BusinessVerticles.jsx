"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP);

//importing images
import yarnImage from "./assets/woolnneedle.gif";

export default function BusinessVerticles() {
  useGSAP(() => {
    const innerHeight = window.innerHeight;
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline();
    let tl2 = gsap.timeline();
    let tl3 = gsap.timeline();

    tl.to(".yarns", {
      scrollTrigger: {
        trigger: ".yarns",
        start: "top 15%",
        end: "+=300",
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
          start: "top 30%%",
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
          end: "+=150",
          scrub: true,
          // markers: true,
        },
      });

    tl2
      .to(".fabricsContainer", {
        scrollTrigger: {
          trigger: ".fabricsContainer",
          start: "center 35%",
          end: "+=400",
          anticipatePin: 0.1,
          inertia: false,
          pin: true,
          pinSpacing: false,
          scrub: true,
          // markers: true,
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
      });

    tl3
      .to(".garmentsContainer", {
        scrollTrigger: {
          trigger: ".garmentsContainer",
          start: "center 35%",
          end: "+=300",
          anticipatePin: 0.1,
          inertia: false,
          pin: true,
          pinSpacing: false,
          scrub: true,
          // markers: true,
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
  });
  return (
    <Stack margin={"50px 200px"}>
      <Typography
        color="#D88684"
        fontSize={"2.5rem"}
        fontWeight={"bold"}
        textAlign={"center"}
        paddingBottom={"50px"}
      >
        Business Verticles
      </Typography>
      <Stack direction={"row"} gap={"100px"}>
        <Stack>
          <Stack className="yarns">
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
                    backgroundColor: "#FB5457",
                  }}
                ></Box>
              </Stack>
              <Typography fontSize={"5rem"} fontWeight={"bold"}>
                Yarns
              </Typography>
            </Stack>
            <Typography
              width={"25vw"}
              fontSize={"1.2rem"}
              sx={{ opacity: 0, display: "none" }}
              className="yarnsText"
            >
              The largest producer and a leading exporter of value added
              synthetic and blended dyed spun yarn in India, we are also a
              prominent manufacturer of cotton blended dyed and mélange yarn…
            </Typography>
          </Stack>

          <Stack className="fabrics">
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
              <Typography fontSize={"5rem"} fontWeight={"bold"}>
                Fabrics
              </Typography>
            </Stack>
            <Typography
              width={"25vw"}
              fontSize={"1.2rem"}
              sx={{ opacity: 0, display: "none" }}
            >
              The largest producer and a leading exporter of value added
              synthetic and blended dyed spun yarn in India, we are also a
              prominent manufacturer of cotton blended dyed and mélange yarn…
            </Typography>
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
              <Typography fontSize={"5rem"} fontWeight={"bold"}>
                Garments
              </Typography>
            </Stack>
            <Typography
              width={"25vw"}
              fontSize={"1.2rem"}
              sx={{ opacity: 0, display: "none" }}
            >
              The largest producer and a leading exporter of value added
              synthetic and blended dyed spun yarn in India, we are also a
              prominent manufacturer of cotton blended dyed and mélange yarn…
            </Typography>
          </Stack>
        </Stack>
        <Stack width={"30vw"} height={"60vh"} position={"relative"}>
          <Image src={yarnImage} alt="" fill objectFit="contain" />
        </Stack>
      </Stack>

      <Stack
        className="fabricsContainer"
        height={"100vh"}
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
          <Typography fontSize={"5rem"} fontWeight={"bold"}>
            Fabrics
          </Typography>
        </Stack>
        <Typography
          width={"25vw"}
          fontSize={"1.2rem"}
          sx={{ opacity: 0 }}
          className="fabricsText"
        >
          The largest producer and a leading exporter of value added synthetic
          and blended dyed spun yarn in India, we are also a prominent
          manufacturer of cotton blended dyed and mélange yarn…
        </Typography>
      </Stack>
      <Stack
        className="garmentsContainer"
        height={"100vh"}
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
          <Typography fontSize={"5rem"} fontWeight={"bold"}>
            Garments
          </Typography>
        </Stack>
        <Typography
          width={"25vw"}
          fontSize={"1.2rem"}
          sx={{ opacity: 0 }}
          className="garmentsText"
        >
          The largest producer and a leading exporter of value added synthetic
          and blended dyed spun yarn in India, we are also a prominent
          manufacturer of cotton blended dyed and mélange yarn…
        </Typography>
      </Stack>
    </Stack>
  );
}
